/* eslint-disable no-unused-vars */
import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AboutFourth = () => {
  return (
    <div className="w-full h-72 my-20 md:h-80 lg:h-96">
      <div className='w-full  h-full bg-no-repeat bg-center bg-cover  bg-[url("./images/image10.jpg")]'>
        <div className="flex h-full backdrop-contrast-50 justify-center items-center">
          <div className="w-[80%] text-white flex flex-col items-center md:w-[70%] lg:w-1/2">
            <Link to={"/features"}>
              <FaRegCirclePlay className="text-6xl hover:text-orange-500 transition-all lg:text-7xl" />
            </Link>
            <h2 className="text-2xl mt-3 md:text-3xl lg:text-4xl lg:mt-5">آشنایی با ما</h2>
            <p className="text-sm text-center mt-2 text-gray-100 leading-6 md:text-base lg:text-lg lg:mt-5">
              لورم ايپسوم متن ساختگی با توليد سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافيک است.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFourth;
