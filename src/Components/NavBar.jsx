import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Firebase/Providers/AuthProvider";

const NavBar = () => {
  const activeStyle =
    "font-semibold text-custom-green border rounded-lg border-green-600";

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeStyle : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listedBooks"
          className={({ isActive }) => (isActive ? activeStyle : "")}
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? activeStyle : "")}
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  const [openMenu, setOpenMenu] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="origin-top scale-95">
          <button
            className="btn btn-ghost lg:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <RxCross2 /> : <FaBars />}
          </button>
          <ul
            className={`menu menu-sm absolute bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${
              openMenu ? "" : "hidden"
            }`}
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src={
                    user.photoURL ||
                    "https://i.ibb.co.com/rQr6L83/default-avatar-icon-of-social-media-user-vector.jpg"
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://i.ibb.co.com/rQr6L83/default-avatar-icon-of-social-media-user-vector.jpg";
                  }}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleSignOut}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="btn bg-custom-green hover:bg-green-400 text-white"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="btn bg-custom-blue hover:bg-teal-300 text-white"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
