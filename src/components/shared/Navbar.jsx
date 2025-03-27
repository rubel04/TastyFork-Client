import { NavLink, useNavigate } from "react-router-dom";
import Button_Primary from "./Button_Primary";
import { useContext } from "react";
import AuthContext from "../../context/Authcontext";
import Swal from "sweetalert2";
import Button_Secondary from "./Button_Secondary";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate()
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
          title: "You successfully logout to CineBuzz!",
          icon: "success",
          draggable: true,
        });
        navigate("/login")
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
        <a className="text-xl italic md:text-3xl font-bold flex items-center gap-1 cursor-pointer">
          <img className="w-12" src="/logo.png" alt="" />
          TastyFork
        </a>
      </div>
      <div className="navbar-center hidden lg:flex *:text-xl *:text-gray-800">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end items-center">
        {user ? (
          <div className="flex gap-4 items-center">
            <button onClick={handleLogout}>
              <Button_Secondary text="Logout"></Button_Secondary>
            </button>
            <div className="dropdown dropdown-bottom dropdown-center cursor-pointer">
              <div tabIndex={0} role="button" className="m-1">
                <img
                  className="h-12 w-12 rounded-full border border-green-600"
                  src={user.photoURL}
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
