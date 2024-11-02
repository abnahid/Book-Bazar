import { toast } from "react-toastify";

// Not Recommended

const getStoredReadList = () => {
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    toast.error("This book is already in your read list.");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
    toast.success("This book has been added to your read list.");
  }
};

const getStoredWishList = () => {
  const storedWishListStr = localStorage.getItem("wish-list");
  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();
  if (storedWishList.includes(id)) {
    toast.error("This book is already in your wishlist.");
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListStr);
    toast.success("This book has been added to your wishlist.");
  }
};

export {
  addToStoredReadList,
  addToStoredWishList,
  getStoredReadList,
  getStoredWishList,
};
