/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const Community = () => {
  const [scroll, setScroll] = useState(false);
  window.addEventListener("scroll", (event) => {
    console.log(Math.round(window.scrollY))

    if (window.scrollY > 2700) {
      setScroll(true);
      console.log("scroll")
    } else{
      setScroll(false)
    }

 
  });
  return (
    <div className="bg-gray-900">
      <div className=" w-[85%] mx-auto pt-5 pb-10">
        <div className="top ">
          <div className=" flex justify-end text-2xl ml-5">
            <FaPeopleGroup className="bg-blue-600 text-white p-2 text-5xl rounded-xl md:text-7xl md:p-4" />
          </div>
          <div className="md:w-2/3">
            <h3 className="mt-5  text-white ">انجمن تناسب اندام</h3>
            <h1 className="text-white mt-6 text-2xl font-bold md:text-3xl">
              یک جامعه که به شما کمک میکند تا در مسیر خود باشید
            </h1>
            <p className="text-white mt-6 leading-7">
              لورم ايپسوم متن ساختگی با توليد سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافيک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
          </div>
          
          <button className="text-white mt-7 bg-orange-600 px-7 py-3 rounded-md text-sm hover:bg-blue-700 transition">
          <Link to={"/plans"}>
            عضویت رایگان
          </Link>
          </button>
        </div>

        <div className="border mt-10 mb-10"  />

        <div className="down text-white">
            <div className="w-[90%] mx-auto  grid grid-cols-4 justify-items-center md:grid-cols-4 ">
              <div className="my-4 text-xl md:text-2xl">
                <CountUp end={325} className="font-sans"/> +<p className="text-white">کاربر</p>
              </div>
              <div className="my-4 text-xl md:text-2xl">
                <CountUp end={640}  className="font-sans" /> +<p className="text-white">دانلود</p>
              </div>
              <div className="my-4 text-xl md:text-2xl">
                <CountUp end={200} className="font-sans" /> +<p className="text-white">ویدیو</p>
              </div>
              <div className="my-4 text-xl md:text-2xl">
                <CountUp end={100}  className="font-sans"/> +<p className="text-white">تمرین</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
