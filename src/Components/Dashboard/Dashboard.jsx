/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const colors = [
  "#3498db",
  "#1abc9c",
  "#f1c40f",
  "#e67e22",
  "#e74c3c",
  "#9b59b6",
  "#2ecc71",
  "#34495e",
  "#f39c12",
];

const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;
  return (
    <path
      d={`M${x + width / 2},${y} L${x + width},${y + height} L${x},${
        y + height
      } Z`}
      fill={fill}
    />
  );
};

const CustomConeChart = () => {
  const [booksChart, setBooksChart] = useState([]);

  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => {
        const uniqueBooks = Array.from(
          new Set(data.map((book) => book.bookId))
        ).map((id) => data.find((book) => book.bookId === id));
        const coloredBooks = uniqueBooks.map((book, index) => ({
          ...book,
          color: colors[index % colors.length],
        }));
        setBooksChart(coloredBooks);
      });
  }, []);

  return (
    <div className="my-12 bg-gray-900 bg-opacity-5 rounded-lg p-8">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={booksChart}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="totalPages"
            shape={(props) => (
              <CustomBar {...props} fill={props.payload.color} />
            )}
          >
            <LabelList dataKey="totalPages" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomConeChart;
