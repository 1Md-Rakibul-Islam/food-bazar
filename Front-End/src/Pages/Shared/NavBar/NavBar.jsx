import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaBox, FaShoppingCart, FaTimes, FaUser } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import Brand from "../../../Components/Brand";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [openNav, setOpenNav] = useState(false);

  const [openPopup, setOpenPopup] = useState(false);

  const handelLogOut = () => {
    logOut().then().catch();
  };

  const navItems = ["About"];

  return (
    <nav
      className={`w-full fixed bg-black md:px-10 px-2 py-2 z-50  ${
        openNav && "inset-0 bg-white/20 bg-opacity-25 -blur-sm"
      }`}
    >
      <div className="flex gap-3 justify-between items-center">
        <Brand />
        <div className="md:block hidden w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-4 md:mt-0 md:border-0 ">
            <li className="hover:text-green-600 text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-green-600 text-white">
              <Link to="/products">Products</Link>
            </li>
            <li className="hover:text-green-600 text-white">
              <button>My Order</button>
            </li>
            {user?.email ? (
              <li className="text-center bg-green-600 text-white px-2 cursor-pointer  rounded-full" onClick={() => handelLogOut()}>Logout</li>
            ) : (
              <>
                <Link to={"/login"}>
                  <li className="hover:text-green-600 text-white">Login</li>{" "}
                </Link>
                <Link to={"/signup"}>
                  <li className="hover:text-green-600 text-white">Register</li>
                </Link>
              </>
            )}
          </ul>
        </div>

        <div className="flex items-center space-x-5">
          <FaShoppingCart className="text-2xl hover:text-green-600 text-white" />
          <div className="flex items-center md:space-x-0 space-x-5 rounded-full p-2 border-2 border-green-400">
            <button onClick={() => setOpenNav(true)}>
              <FaBars className="text-xl md:hidden block text-white" />
            </button>
            <img
              className="w-[30px] h-[30px] rounded-full"
              src={user?.photoURL}
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        className={`absolute ${
          openNav
            ? "z-50 block transdiv transition-opacity duration-1000"
            : "hidden"
        } z-50 bg-black md:w-[380px] w-[300px] h-[100vh] top-0 right-0`}
      >
        <div className="p-10">
          <div onClick={() => setOpenNav(false)} className="mb-10">
            <FaTimes className="text-3xl cursor-pointer absolute right-4 top-4" />
          </div>
          <ul className="mt-4 ">
            <li className="my-2 text-center w-full hover:bg-green-600 p-1">
              <Link to="/">Home</Link>
            </li>
            <li className="my-2 text-center w-full hover:bg-green-600 p-1">
              <Link to="/products">Products</Link>
            </li>
            <li className="my-2 text-center w-full hover:bg-green-600 p-1">
              <button>My Order</button>
            </li>
            {user?.email ? (
              <li onClick={() => handelLogOut()}> Logout</li>
            ) : (
              <>
                <Link to={"/login"}>
                  <li className="my-2 text-center w-full hover:bg-green-600 p-1"> Login</li>{" "}
                </Link>
                <Link to={"/signup"}>
                  <li className="my-2 text-center w-full hover:bg-green-600 p-1"> Register</li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
