import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/listedBooks">Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">dashboard</NavLink>
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
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        <a className="btn bg-custom-green hover:bg-green-400">Sign In</a>
        <a className="btn bg-custom-blue hover:bg-teal-300">Sign Up</a>
      </div>
    </div>
  );
};

export default NavBar;