/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, category, rating, tags } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card border rounded-2xl border-gray-900 border-opacity-10 w-96 p-6 font-Worsens">
        <figure className="h-56 px-24 py-8 bg-gray-100 rounded-2xl">
          <img src={image} alt={bookName} className="h-full" />
        </figure>
        <div className="card-body p-0 mt-4">
          <div className="flex gap-2 mb-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-0.5 rounded-full bg-custom-green bg-opacity-5 font-medium text-custom-green "
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-bold">{bookName}</h2>
          <p className=" font-medium  text-gray-900 text-opacity-80 ">
            By : {author}
          </p>
          <div className="border-t-2 border-dashed border-gray-900 border-opacity-10 "></div>
          <div className="flex mt-2">
            <p className="text-gray-900 text-sm font-medium">{category}</p>
            <span className="flex items-center gap-2 text-lg font-semibold">
              {rating}
              <FaRegStar />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
