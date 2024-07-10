/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const AboutFirst = () => {
  return (
    <div className='bg-[url("./images/11.png")] w-full h-full bg-[length:100%_500px] bg-orange-600 bg-no-repeat bg-top '>
      <div className="w-[80%] mx-auto pt-32 flex flex-col text-white  lg:flex-row lg:items-center lg:justify-between ">
        <div className="top-right bg-emerald-20 lg:w-[50%] lg:leading-loose">
          <h1 className="text-4xl font-bold md:text-6xl">
            با تیم همکاران ما آشنا شوید
          </h1>
          <p className="mt-10 leading-8 text-sm md:text-lg lg:mt-16">
            لورم ايپسوم متن ساختگی با توليد سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافيک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
          <div className=" flex items-center mt-10 md:text-lg lg:mt-16">
            <a href="">
              <Link to={"/features"}>ما را ملاقات کنید</Link>
            </a>
            <IoIosArrowDropleftCircle className="mr-2" />
          </div>
        </div>
        <div className="bottom-left mt-10 lg:w-[40%] mb-20">
          <img src="./images/image7.jpg" alt="" className="rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default AboutFirst;
