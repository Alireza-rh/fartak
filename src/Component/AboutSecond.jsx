/* eslint-disable no-unused-vars */
import React from "react";

const AboutSecond = () => {
  return (
    <div className="w-[80%] mx-auto flex flex-col mt-20 lg:mt-10 lg:flex-row lg:items-center lg:justify-between">
      <div className="top-right lg:w-[50%] ">
        <img src="./images/image8.jpg" alt="" className="rounded-3xl"/>
      </div>
      <div className="bottom-left mt-10 lg:w-[40%] mb-10 ">
        <h3 className="text-orange-500 font-bold lg:text-lg">درباره ما</h3>
        <h1 className="mt-5 text-2xl font-bold md:text-3xl lg:text-4xl lg:mt-10">ما شما را همراهی می کنیم تا نهایت خودتان</h1>
        <p className="mt-5 text-gray-500 leading-6 text-sm md:text-base lg:mt-10 lg:leading-8">
          لورم ايپسوم متن ساختگی با توليد سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافيک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
      </div>
    </div>
  );
};

export default AboutSecond;
