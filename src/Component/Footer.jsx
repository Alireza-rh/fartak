/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <div className="w-[90%] mx-auto mt-10 mb-10 grid grid-cols-1 md:grid-cols-6 ">
        <div className="mt-5  md:col-span-4">
          <h2 className="text-lg font-bold mb-3 lg:text-xl">نوشته‌های تازه</h2>
          <ul className="flex flex-col p-3 space-y-3 text-gray-600">
            <li>
              <Link to={"/blogs"}>همه چیز درباره ی ورزش بدنسازی !</Link>
            </li>
            <li>
              <Link to={"/blogs"}>گرم و سرد کردن بدن یکی از عامل مهم تناسب اندام !</Link>
            </li>
            <li>
              <Link to={"/blogs"}>دویدن به تناسب اندام کمک میکند !</Link>
            </li>
            <li>
              <Link to={"/blogs"}>جلسات روزانه تیم ها یکی از عامل موفقیت !</Link>
            </li>
          </ul>
        </div>
        <div className="mt-5 md:col-span-1">
          <h2 className="text-lg font-bold mb-3 lg:text-xl">پشتیبانی</h2>
          <ul className="flex flex-col p-3 space-y-3 text-gray-600">
            <li>
              <Link to={"/plans"}>طرح ها</Link>
            </li>
            <li>
              <Link to="/features">امکانات</Link>
            </li>
            <li>
              <Link to={"/blogs"}>وبلاگ</Link>
            </li>
            <li>
              <Link to={"/about-us"}>درباره ما</Link>
            </li>
          </ul>
        </div>
        <div className="mt-5 md:col-span-1 ">
          <h2 className="text-lg font-bold mb-3 lg:text-xl">دسترسی سریع</h2>
          <ul className="flex flex-col p-3 space-y-3 text-gray-600">
            <li>
              <Link to={"/plans"}>طرح ها</Link>
            </li>
            <li>
              <Link to="/features">امکانات</Link>
            </li>
            <li>
              <Link to={"/blogs"}>وبلاگ</Link>
            </li>
            <li>
              <Link to={"/about-us"}>درباره ما</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
