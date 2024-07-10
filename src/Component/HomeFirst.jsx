/* eslint-disable no-unused-vars */
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomeFirst = () => {
  return (
    <div className='bg-[url("./images/11.png")] h-full object-cover object-center bg-no-repeat bg-contain bg-slate-400 flex flex-col lg:flex-row'>
      <div className="mt-40 pl-14 pr-14 text-white">
        <div className="">
          <h1 className="text-4xl font-bold lg:text-5xl xl:text-6xl">فرتاک پروژکت</h1>
          <p className="mt-12 lg:text-lg lg:mt-16">
            سال 98 وقتی فراگیری کرونا شروع شد؛ گویا فرتاک به وجود اومد.
          </p>
          <p className="mt-7 lg:text-lg lg:mt-14 ">
            با عنایت خداوند، در سال 1407 فرتاک انتخاب اول دانش جویان و دانش
            آموزان در ایران
          </p>
          <p className="mt-7 lg:mt-14">1415 فرداک جزو برترین برندهای جهانی</p>
          <div className="mt-10 flex h-10  justify-start lg:mt-16n">
            <button className="bg-white text-black flex items-center text-[12px] p-3 rounded-lg shadow-lg lg:text-sm hover:bg-orange-600 hover:text-white transition  lg:p-5">
              <Link to={"/plans"}>اولین سفارش با تخفیف ویژه</Link>
            </button>
            <div className="flex  items-center mr-20">
              <button className=" p-3 rounded-lg text-sm flex items-center text-[12px] lg:text-sm ">
                {" "}
                <Link to={"/about-us"}>اطلاعات بیشتر</Link>
              </button>
              <FaLongArrowAltLeft className="mt-1 text-2xl" />
            </div>
          </div>
        </div>
        <ul className="w-64  flex p-5 justify-between items-center mt-10 ">
          <li>
            <a href="facebook.com">
              <FaFacebook className="text-xl cursor-pointer lg:mx-6" />
            </a>
          </li>
          <li>
            <a href="twiiter.com">
              <FaSquareXTwitter className="text-xl cursor-pointer lg:mx-6" />
            </a>
          </li>
          <li>
            <a href="www.instagram.com">
              <FaInstagram className="text-xl cursor-pointer lg:mx-6" />
            </a>
          </li>
          <li>
            <a href="linkedin.com">
              <FaLinkedin className="text-xl cursor-pointer lg:mx-6" />
            </a>
          </li>
          <li>
            <a href="youtube.com">
              <FaYoutube className="text-xl cursor-pointer lg:mx-6" />
            </a>
          </li>
        </ul>
      </div>
      <div className="img mt-16 lg:mt-32 flex items-center justify-center ">
        <img src="./images/image1.png" alt="" className="w-[430px] xl:w-[600px]" />
      </div>
    </div>
  );
};

export default HomeFirst;
