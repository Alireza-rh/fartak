/* eslint-disable no-unused-vars */
import React from "react";

const FeatureFirst = () => {
  return (
    <div className='bg-[url("./images/image23.png")] w-full  bg-blue-600 bg-no-repeat bg-cover'>
      <div className="pt-28 text-white w-[80%] mx-auto flex flex-col lg:flex-row items-center justify-between ">
        <div className="top-right lg:w-[50%] lg:leading-loose ">
          <h1 className="text-4xl font-bold md:text-6xl">
            از تناسب اندام خود نهایت استفاده را ببرید
          </h1>
          <p className="mt-10 leading-8 text-sm md:text-lg lg:mt-16">
            لورم ايپسوم متن ساختگی با توليد سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافيک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
        </div>
        <div className="dowm-left mt-10 lg:w-[40%] mb-20">
          <img src="./images/image16.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FeatureFirst;
