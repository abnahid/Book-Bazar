import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "./addToRl";
const BooksDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  const {
    image,
    bookName,
    author,
    rating,
    category,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };
  const handleAddToWishList = (id) => {
    addToStoredWishList(id);
  };
  return (
    <div className="flex flex-col md:flex-row border rounded-2xl bg-base-100 p-4 m-4 my-12">
      {/* Book Image */}
      <figure className="bg-gray-900 bg-opacity-5 rounded-2xl p-10 md:p-20 w-full md:w-1/3 flex-shrink-0">
        <img
          src={image}
          alt={bookName}
          className="h-full bg-cover w-full object-cover"
        />
      </figure>

      {/* Book Details */}
      <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-8 flex flex-col justify-between font-Worsens">
        <h2 className="text-lg md:text-xl font-bold font-PlayDis">
          {bookName}
        </h2>
        <p className="text-sm md:text-base text-gray-500">By: {author}</p>

        <div className="border-t-2 my-2 border-gray-900 border-opacity-10"></div>
        <p className="text-sm md:text-base text-gray-500">{category}</p>

        <div className="border-t-2  my-2  border-gray-900 border-opacity-10"></div>
        <div className="my-4">
          <h3 className="font-semibold text-sm md:text-base">Review:</h3>
          <p className="text-sm md:text-base text-gray-600">{review}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <p className="text-base font-bold text-gray-900">Tag</p>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-0.5 rounded-full bg-custom-green bg-opacity-5 font-medium text-custom-green text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="border-t-2  my-2 border-gray-900 border-opacity-10"></div>
        {/* Book Information */}
        <ul className="text-sm md:text-base text-gray-600 space-y-1 flex-grow">
          <li>
            <strong>Number of Pages:</strong> {totalPages}
          </li>
          <li>
            <strong>Publisher:</strong> {publisher}
          </li>
          <li>
            <strong>Year of Publishing:</strong> {yearOfPublishing}
          </li>
          <li>
            <strong>Rating:</strong> {rating}
          </li>
        </ul>
        <div className="border-t-2  my-2 border-gray-900 border-opacity-10"></div>
        {/* Actions */}
        <div className="card-actions mt-4 flex space-x-2">
          <button
            onClick={() => handleMarkAsRead(bookId)}
            className="btn border border-gray-900 border-opacity-30 w-full md:w-auto"
          >
            Read
          </button>
          <button
            onClick={() => handleAddToWishList(bookId)}
            className="btn bg-custom-blue text-white w-full md:w-auto"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BooksDetail;
