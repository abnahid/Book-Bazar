/* eslint-disable react/prop-types */
import { FaUserGroup } from "react-icons/fa6";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { LuMapPin } from "react-icons/lu";
import { Link } from "react-router-dom";

const Listbook = ({ listbook }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    category,
    rating,
    tags,
    yearOfPublishing,
    totalPages,
    publisher,
  } = listbook;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="flex bg-base-100 border border-gray-900 border-opacity-10  p-6  rounded-2xl  space-x-4 mb-5">
        <div className="w-1/4 h-56 px-24 py-8 bg-gray-900 bg-opacity-5 rounded-2xl">
          <img src={image} alt={bookName} className="rounded-md h-full" />
        </div>

        <div className="w-3/4">
          {/* Title */}
          <h2 className="text-2xl font-bold font-PlayDis mb-4">{bookName}</h2>

          <p className="text-gray-500 mb-2 font-medium">By: {author}</p>

          {/* Tags */}
          <div className="flex mb-2 space-x-4">
            <p className="font-bold">Tag</p>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-0.5  rounded-full bg-custom-green bg-opacity-5 font-medium text-custom-green"
              >
                #{tag}
              </span>
            ))}
            <div className="flex items-center gap-2">
              <LuMapPin /> Year of Publishing: {yearOfPublishing}
            </div>
          </div>

          {/* Publisher, Year, and Pages */}
          <div className="flex items-center text-gray-500 mb-2 space-x-2">
            <div className="flex items-center gap-2">
              <FaUserGroup /> Publisher: {publisher}
            </div>

            <div className="flex items-center gap-2">
              <HiOutlineDocumentChartBar /> Page: {totalPages}
            </div>
          </div>

          <div className="divider"></div>
          {/* Category and Rating */}
          <div className="flex items-center space-x-2 ">
            <span className="px-4 py-2 bg-blue-500 bg-opacity-10 text-blue-500 rounded-full">
              Category: {category}
            </span>
            <span className="px-4 py-2 bg-yellow-400 bg-opacity-10  text-yellow-400 rounded-full">
              Rating: {rating}
            </span>

            <button className="px-4 py-2 bg-custom-green text-white rounded-full">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Listbook;
