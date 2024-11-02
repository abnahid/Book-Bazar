import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../Main/addToRl";
import Listbook from "./Listbook";

const ListedBooks = () => {
  const allBooks = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
  }, [allBooks]);

  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "Number of pages") {
      const sortedReadList = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedReadList);
    }

    if (sortType === "Rating") {
      const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedReadList);
    }

    if (sortType === "Publisher year") {
      const sortedReadList = [...readList].sort(
        (a, b) => a.publishedYear - b.publishedYear
      );
      setReadList(sortedReadList);
    }
  };

  return (
    <div>
      <div className="dropdown my-9">
        <div tabIndex={0} role="button" className="btn m-1">
          {sort ? `Sort by: ${sort}` : "Sort By"}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={() => handleSort("Rating")}>
            <a>Rating</a>
          </li>
          <li onClick={() => handleSort("Number of pages")}>
            <a>Number of pages</a>
          </li>
          <li onClick={() => handleSort("Publisher year")}>
            <a>Publisher year</a>
          </li>
        </ul>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab h-10 text-lg"
          aria-label="Read Books"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-8"
        >
          <div className="">
            {readList.map((listbook) => (
              <Listbook key={listbook.bookId} listbook={listbook}></Listbook>
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab h-10 text-lg"
          aria-label="Wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Wishlist Books
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
