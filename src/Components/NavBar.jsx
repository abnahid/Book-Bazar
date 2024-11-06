import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

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

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="origin-top scale-95">
          <div
            className="btn btn-ghost lg:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <RxCross2 /> : <FaBars />}
          </div>
          <ul
            className={`menu menu-sm absolute bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  ${
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
        <a className="btn bg-custom-green hover:bg-green-400 text-white">
          Sign In
        </a>
        <a className="btn bg-custom-blue hover:bg-teal-300 text-white">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default NavBar;
