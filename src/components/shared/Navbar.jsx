import { NavLink, useNavigate } from "react-router-dom";
import Button_Primary from "./Button_Primary";
import { useContext } from "react";
import AuthContext from "../../context/Authcontext";
import Swal from "sweetalert2";
import { ThemeContext } from "../../context/ThemeProvider";
import { BsFillBrightnessHighFill, BsMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const { toggleTheme, theme } = useContext(ThemeContext);
  const navigate = useNavigate();
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

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          title: "You successfully logout to TastyFork!",
          icon: "success",
          draggable: true,
        });
        navigate("/login");
      })
      .catch((error) => {
        Swal.fire({
          title: error.message,
          icon: "success",
          draggable: true,
        });
      });
  };

  return (
    <div className="navbar md:max-w-11/12 mx-auto">
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
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow text-black bg-white"
          >
            {navlinks}
          </ul>
        </div>
        <a className="text-xl italic md:text-5xl font-bold flex items-center gap-1 cursor-pointer">
          <img className="w-8 md:w-14" src="/logo.png" alt="" />
          <span className="hidden md:block font-birthstone">TastyFork</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex *:text-xl">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end items-center">
        <button
          className="text-3xl md:text-4xl cursor-pointer mr-4"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <BsFillBrightnessHighFill />
          ) : (
            <BsMoonStarsFill />
          )}
        </button>

        {user ? (
          <div className="flex gap-2 md:gap-4 items-center">
            <button
              onClick={handleLogout}
              className={`text-xl text-white text-center font-medium py-1 md:py-3 px-4 md:px-6 cursor-pointer my-2 bg-sky-900 border border-sky-900 hover:bg-sky-800 transition rounded-full`}
            >
              Logout
            </button>
            <div className="dropdown md:w-full w-14 dropdown-bottom dropdown-end cursor-pointer text-black">
              <div tabIndex={0} role="button" className="m-1">
                <img
                  className="h-8 md:h-12 w-8 md:w-12 rounded-full border border-green-600"
                  src={user.photoURL}
                  alt="Profile-picture"
                />
              </div>
              <ul
                tabIndex={0}
                className={`dropdown-content menu rounded-box z-1 w-38 p-2 bg-white`}
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
        ) : (
          <NavLink to="/login">
            <Button_Primary text="Login"></Button_Primary>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
