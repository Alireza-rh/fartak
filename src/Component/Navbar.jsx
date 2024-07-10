/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({ prop }) => {
  const [Icon, setIcon] = useState(true);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      setIcon(false);
    } else {
      setIcon(true);
    }
  });

  return (
    <div className="w-full absolute ">
      <div
        className="flex items-center  h-full p-3 w-32  "
        onClick={() => setIcon(!Icon)}
      >
        {!Icon ? (
          <IoClose className="text-5xl text-blue-600 md:hidden cursor-pointer m-2 shadow-lg rounded-lg bg-white p-3" />
        ) : (
          <IoMenu className="text-5xl text-blue-600 md:hidden cursor-pointer m-2 shadow-lg rounded-lg bg-white p-3" />
        )}
      </div>
      {!Icon ? (
        <div
          className={
            prop ? ` md:items-center  md:bg-white` : `md:flex md:items-center`
          }
        >
          <ul
            className={
              prop
                ? `flex  w-full flex-col  md:items-center md:divide-none items-start divide-y-2 bg-white  md:text-black`
                : `flex  w-full flex-col md:flex-row md:items-center md:divide-none items-start divide-y-2 bg-white md:bg-inherit md:text-white`
            }
          >
            <li className="  p-3  mr-5 text-sm flex md:hidden md:mr-2 items-center md:p-5 md:text-lg lg:mx-5  w-full md:w-20 ">
              <Link to={"/"}>خانه</Link>
            </li>
            <li className=" p-3  mr-5  text-sm flex md:hidden md:mx-0 items-center md:p-5 md:text-lg lg:mx-5  w-full md:w-20 ">
              <Link to={"/about-us"}> درباره </Link>
            </li>
            <li className=" p-3 mr-5  text-sm flex md:hidden md:mx-0 items-center md:p-5 md:text-lg lg:mx-5  w-full md:w-20 ">
              <Link to={"/features"}>امکانات</Link>
            </li>
            <li className=" p-3 mr-5  text-sm flex md:hidden md:mx-0 items-center md:p-5 md:text-lg lg:mx-5 w-full md:w-20 ">
              <Link to={"/blogs"}>وبلاگ</Link>
            </li>
            <li className=" p-3 mr-5  text-sm flex md:hidden md:mx-0 items-center md:p-5 md:text-lg lg:mx-5  w-full md:w-20 ">
              <Link to={"/plans"}>طرح </Link>
            </li>
          </ul>
          <button className="hidden  md:text-white md:hidden md:bg-orange-600 hover:bg-orange-700 transition md:px-3 md:py-2 md:rounded-lg md:shadow-lg md:ml-16">
            FartakProject
          </button>
        </div>
      ) : (
        ""
      )}

      <div className="hidden md:flex">
        <div
          className={
            prop
              ? `flex md:justify-between md:items-center  md:bg-white w-full`
              : `flex md:justify-between md:flex md:items-center  w-full`
          }
        >
          <ul
            className={
              prop
                ? `flex w-full md:items-center bg-white  md:text-black`
                : `flex  w-full md:items-center md:bg-inherit md:text-white`
            }
          >
            <li className="md:mr-2 md:p-5 md:text-lg lg:mx-5 w-full md:w-20">
              <Link to={"/"}>خانه</Link>
            </li>
            <li className="md:mr-2 md:p-5 md:text-lg lg:mx-5 w-full md:w-20">
              <Link to={"/features"}>امکانات</Link>
            </li>
            <li className="md:mr-2 md:p-5 md:text-lg lg:mx-5 w-full md:w-20">
              <Link to={"/plans"}>طرح </Link>
            </li>
            <li className="md:mr-2 md:p-5 md:text-lg lg:mx-5 w-full md:w-20">
              <Link to={"/about-us"}> درباره </Link>
            </li>
            <li className="md:mr-2 md:p-5 md:text-lg lg:mx-5 w-full md:w-20">
              <Link to={"/blogs"}>وبلاگ</Link>
            </li>
          </ul>
          <button className="  md:text-white  md:bg-orange-600 hover:bg-orange-700 transition md:px-3 md:py-2 md:rounded-lg md:shadow-lg md:ml-16">
            <Link to={"/"}>FartakProject</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
