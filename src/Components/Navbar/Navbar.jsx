import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContex } from "../../Contex/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContex);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        alert("sdsd");
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  };
  return (
    <div className=" bg-gray-100 shadow-sm ">
      <div className="navbar container mx-auto">
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
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/service">Service</NavLink>
              </li>
              <li>
                <NavLink to="/my-profile">My Profile</NavLink>
              </li>
            </ul>
          </div>

          <a href="/" className="flex items-center text-xl">
            Warm<span className="text-amber-500">Paws</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/service">Service</NavLink>
            </li>
            <li>
              <NavLink to="/my-profile">My Profile</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-2">
              <img
                className="w-[50px] h-[50px] rounded-[50%] border-[3px] border-red-600"
                src={user.photoURL}
                alt={user.displayName}
              />
              <button onClick={handleLogOut}>LogOut</button>
            </div>
          ) : (
            <NavLink to="/log-in">Login</NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
