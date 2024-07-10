/* eslint-disable no-unused-vars */
import React from "react";
import CountUp from "react-countup";

const AboutFifth = () => {
  return (
    <div className="mx-auto w-[80%]  flex flex-col items-center mb-20">
      <p className="mt-3">اعضای تیم ما</p>

      <div className="items mt-5 grid grid-cols-1 md:grid-cols-3">
        <div className="item mt-8 flex flex-col items-center justify-center">
          <img src="./images/image11.jpg" className="w-2/3" />
          <h3 className="text-lg font-bold mt-4">رضا علیزاده </h3>
          <p className="text-sm mt-3 text-gray-500">طراح سایت </p>
        </div>

        <div className="item mt-8 flex flex-col items-center justify-center">
          <img src="./images/image12.jpg" className="w-2/3" />
          <h3 className="text-lg font-bold mt-4">لیسانا محمدی </h3>
          <p className="text-sm mt-3 text-gray-500">پشتیبان </p>
        </div>

        <div className="item mt-8 flex flex-col items-center justify-center">
          <img src="./images/image13.jpg" className="w-2/3" />
          <h3 className="text-lg font-bold mt-4">دانیال رحیمی </h3>
          <p className="text-sm mt-3 text-gray-500">مدیر عامل </p>
        </div>

        <div className="item mt-8 flex flex-col items-center justify-center">
          <img src="./images/image14.jpg" className="w-2/3" />
          <h3 className="text-lg font-bold mt-4">مهسا باقری </h3>
          <p className="text-sm mt-3 text-gray-500">مهندس الکترونیک </p>
        </div>

        <div className="item mt-8 flex flex-col items-center justify-center">
          <img src="./images/image15.jpg" className="w-2/3" />
          <h3 className="text-lg font-bold mt-4">مهرداد جعفری </h3>
          <p className="text-sm mt-3 text-gray-500">مهندس عمران </p>
        </div>
        <div className="mt-8 flex flex-col justify-center items-center p-7 bg-gray-100 text-xl">
            <div>
            <CountUp end={20} className="font-sans "/>+
            </div>
            <h3 className="mt-4 font-bold">اعضای تیم دورکار</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutFifth;
