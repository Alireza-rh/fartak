/* eslint-disable no-unused-vars */
import React from "react";

const AboutThird = () => {
  return (
    <div className="w-[80%] mx-auto flex flex-col mt-0 lg:mt-20 lg:flex-row lg:items-center lg:justify-between">
      <div className="top-left lg:w-[50%] md:order-last">
        <img src="./images/image9.jpg" alt="" className="rounded-3xl"/>
      </div>
      <div className="bottom-right mt-10 lg:w-[40%]">
        <h3 className="text-orange-500 font-bold lg:text-lg">هدف ما</h3>
        <h1 className="mt-5 text-2xl font-bold md:text-3xl lg:text-4xl lg:mt-10">آسان کردن مسیر تناسب اندام</h1>
        <p className="mt-5 text-gray-500 leading-6 text-sm md:text-base lg:mt-10 lg:leading-8">
          لورم ايپسوم متن ساختگی با توليد سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافيک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
      </div>
    </div>
  );
};

export default AboutThird;
