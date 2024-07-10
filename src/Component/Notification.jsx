/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <div className=" mt-5 mb-10 mx-auto h-full w-[85%]  md:w-[80%] md:mt-20  lg:flex lg:justify-center lg:items-center">
      <div className="right img flex items-center justify-center lg:w-1/2 order-last">
        <img
          src="./images/image3.png"
          alt=""
          className="w-[430px] md:w-[500px]"
        />
      </div>
      <div className="left text  lg:w-1/2 ">
        <h3 className="text-orange-600 text-xl font-bold lg:text-2xl xl:text-3xl">
          اعلان هوشمند
        </h3>
        <h1 className="text-2xl font-bold md:text-3xl mt-5 lg:text-4xl lg:mt-10 xl:text-5xl xl:leading-snug">
          هیچ وقت زمان تمرین از یادت نمیره
        </h1>
        <p className="text-slate-400 mt-7 leading-8 lg:text-lg lg:leading-9">
          لورم ايپسوم متن ساختگی با توليد سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافيک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است.
        </p>
        <Link to={"/about-us"}>
        <button className="text-blue-600 mt-7 bg-sky-100 font-bold py-3 px-4 rounded-lg shadow-lg lg:py-3 lg:px-7 hover:bg-blue-500 hover:text-white transition">
          اطلاعات بیشتر
        </button>
        
        </Link>
      </div>
    </div>
  );
};

export default Notification;
