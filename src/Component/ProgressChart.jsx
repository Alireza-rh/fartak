/* eslint-disable no-unused-vars */
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ProgressChart = () => {
  return (
    <div className="pl-10 pr-10 mt-5 lg:mt-20 h-full mx-auto md:pl-16 md:pr-16   lg:flex lg:justify-center xl:pl-32 xl:pr-32">
      <div className="right img  flex items-center justify-center mx-auto lg:w-1/2">
        <img src="./images/image2.png" className="w-[430px] lg:w-[520px]" alt="" />
      </div>

      <div className="left text lg:w-1/2  lg:flex lg:flex-col lg:justify-center">
        <h3 className="text-orange-600 text-xl font-bold lg:text-2xl xl:text-3xl">نمودار پیشرفت</h3>
        <h1 className=" text-2xl font-bold mt-5 md:text-3xl lg:text-4xl lg:mt-10 xl:text-5xl xl:leading-snug">پیشرفت خود را با نرم افزار ما پیگیری کنید</h1>
        <p className="text-slate-400 mt-7 leading-8 lg:text-lg lg:leading-9">
          لورم ايپسوم متن ساختگی با توليد سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافيک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است.
        </p>
        <div className="flex flex-col mt-5">
          <div className="flex items-center mt-3 lg:text-lg">
            <FaCheckCircle className="text-blue-700 ml-2 " /> نسخه رایگان
          </div>
          <div className="flex items-center mt-3 lg:text-lg">
            <FaCheckCircle className="text-blue-700 ml-2 " /> پشتیبانی آنلاین
          </div>
          <div className="flex items-center mt-3 lg:text-lg">
            <FaCheckCircle className="text-blue-700 ml-2 " /> گزارش پیشرفت
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;
