/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const BlogFirst = () => {
  return (
    <div className="bg-gray-100 w-full h-full">
      <div className="pb-20 grid grid-cols-1 md:grid-cols-6 md:justify-around md:gap-5 lg:gap-10 w-[80%] md:w-[90%] mx-auto pt-28">
        
        <div className="blog md:col-span-4 ">
          <div className="bg-white p-5 rounded-lg mt-5">
            <h1 className="text-2xl">همه چیز درباره ی ورزش بدنسازی !</h1>
            <p className="font-sans mt-4"> تناسب اندام / خرداد 1, 1400</p>
            <p className="text-slate-600 mt-5 leading-7">
              لورم ايپسوم متن ساختگی با توليد سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافيک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرايط فعلی تکنولوژی مورد
              نياز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زيادی در شصت و سه …
            </p>
            <a href="" className="mt-">
              <Link to={"/blogs"} className="flex items-center mt-5">
                <p> بیشتر بخوانید</p>
                <MdOutlineKeyboardDoubleArrowLeft className="mr-1" />
              </Link>
            </a>
          </div>

          <div className="bg-white p-5 rounded-lg mt-5">
            <h1 className="text-2xl">
              گرم و سرد کردن بدن یکی از عامل مهم تناسب اندام !
            </h1>
            <p className="font-sans mt-4"> تناسب اندام / خرداد 1, 1400</p>
            <p className="text-slate-600 mt-5 leading-7">
              لورم ايپسوم متن ساختگی با توليد سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافيک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرايط فعلی تکنولوژی مورد
              نياز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زيادی در شصت و سه …
            </p>
            <a href="" className="mt-">
              <Link to={"/blogs"} className="flex items-center mt-5">
                <p> بیشتر بخوانید</p>
                <MdOutlineKeyboardDoubleArrowLeft className="mr-1" />
              </Link>
            </a>
          </div>

          <div className="bg-white p-5 rounded-lg mt-5">
            <h1 className="text-2xl">دویدن به تناسب اندام کمک میکند !</h1>
            <p className="font-sans mt-4"> تناسب اندام / خرداد 1, 1400</p>
            <p className="text-slate-600 mt-5 leading-7">
              لورم ايپسوم متن ساختگی با توليد سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافيک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرايط فعلی تکنولوژی مورد
              نياز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زيادی در شصت و سه …
            </p>
            <a href="" className="mt-">
              <Link to={"/blogs"} className="flex items-center mt-5">
                <p> بیشتر بخوانید</p>
                <MdOutlineKeyboardDoubleArrowLeft className="mr-1" />
              </Link>
            </a>
          </div>
        </div>
        <div className="left mt-10 md:mt-0 md:col-span-2">
          <div className="bg-white p-5 mt-5 flex flex-col rounded-lg">
            <h1 className="text-xl">نوشته‌های تازه</h1>
            <a href="" className="mt-3">
              <Link to={"/blogs"} className="text-slate-500 ">
                همه چیز درباره ی ورزش بدنسازی !
              </Link>
            </a>
            <a href="" className="mt-3">
              <Link to={"/blogs"} className="text-slate-500 ">
                گرم و سرد کردن بدن یکی از عامل مهم تناسب اندام !
              </Link>
            </a>
            <a href="" className="mt-3">
              <Link to={"/blogs"} className="text-slate-500 ">
                دویدن به تناسب اندام کمک میکند !
              </Link>
            </a>
          </div>
          <div className="bg-white p-5 mt-5 rounded-lg lg:p-8">
            <h3 className="text-xl">دسته‌ها</h3>
            <p className="text-slate-600 mt-4">تناسب اندام</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFirst;
