import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import { useContext } from "react";
import { FaPhone,FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch((err) => {
        console.error(err);
      });
  };

  const navLinks = (
    <>
      <li className="mx-3 text-lg">
        <NavLink to="/">Home</NavLink>
      </li>
      
      <li className="mx-3 text-lg">
            <NavLink to="/shop">Shop</NavLink>
        </li>
      <li className="mx-3 text-lg">
            <NavLink to="/showProduct">Show product</NavLink>
        </li>
      <li className="mx-3 text-lg">
        <NavLink to="/addProduct">My Cart</NavLink>
      </li>
      {user && (
        <div className="flex">
          <li className="mx-3 text-lg">
            <NavLink to="/Portfolio">Portfolio</NavLink>
          </li>
          <li className="mx-3 text-lg">
        <NavLink to="/addProduct">Add product</NavLink>
      </li>
        </div>
      )}
    </>
  );

  return (
    <div>
        <div className="bg-slate-700 py-5">
        <div className="flex justify-end container mx-auto text-white">
            <h2 className="flex justify-center items-center">
                <FaPhone className="text-4xl"></FaPhone>
                <div className="ml-4">
                    <p>Call Us Now</p>
                    <p>+880 1711 111 111</p>
                </div>
            </h2>
            <h2 className="flex justify-center items-center ml-5">
                <FaCartShopping className="text-4xl"></FaCartShopping>
                <div className="ml-4">
                <p>CheckOut</p>
                <p>0 Item</p>
            </div>
            
            </h2>
        </div>
        </div>
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <div className="relative w-14 md:w-64 w-3">
            <img
                className="md:-mt-20 bg-slate-700  transform skew-x-[-20deg] md:w-full md:h-auto"
              src="https://i.ibb.co/tphCn8J/logo-586ba9e1-83ed-4bb2-83c7-816815964de9-190x120-1.png"
              alt=""
            />
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center md:justify-center md:gap-3">
              {user?.displayName ? user?.displayName : "Anonymous user"}
              {user?.photoURL ? (
                <img
                  className="md:w-11 w-8 object-cover rounded-full"
                  src={user?.photoURL}
                  alt="User Profile"
                />
              ) : (
                <img
                  className="md:w-11 w-8"
                  src="https://i.ibb.co/SvWDpny/profile.png"
                  alt="Default Profile"
                />
              )}
              <button
                onClick={handleSignOut}
                className="btn btn-sm ml-4 text-lg"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex">
              <NavLink className="btn btn-sm ml-2 text-lg" to="/register">
                Register
              </NavLink>
              <button className="btn btn-sm ml-2 text-lg">
                <NavLink to="/login">Login</NavLink>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
