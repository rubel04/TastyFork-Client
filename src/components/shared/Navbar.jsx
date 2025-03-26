import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all_foods">All Foods</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar max-w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navlinks}
          </ul>
        </div>
        <a className="text-xl md:text-2xl font-bold flex items-center gap-1 cursor-pointer">
          <img src="/logo.png" alt="" />
          TastyFork
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end items-center">
        <div className="flex gap-4 items-center">
          <NavLink>Login</NavLink>
          <div className="dropdown dropdown-bottom dropdown-center cursor-pointer">
            <div tabIndex={0} role="button" className="m-1">
              <img
                className="h-10 w-10 rounded-full border border-cyan-300"
                src="/logo.png"
                alt="Profile-picture"
              />
            </div>
            <ul
              tabIndex={0}
              className={`dropdown-content menu bg-base-100 rounded-box z-1 w-38 p-2`}
            >
              <li>
                <NavLink to="/my_foods">My Foods</NavLink>
              </li>
              <li>
                <NavLink to="/add_foods">Add Foods</NavLink>
              </li>
              <li>
                <NavLink to="/my_orders">My Orders</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
