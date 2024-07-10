/* eslint-disable no-unused-vars */
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const PlanSecond = () => {
  return (
    <div className="bg-slate-100 w-full h-full">
      <div className=" w-[80%] mx-auto py-20 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8">
        <div className="bg-white p-5 rounded-2xl shadow-2xl">
          <p className="flex items-center justify-center text-orange-500 mt-5 font-bold">
            رایگان
          </p>
          <div className="flex items-center p-3 mt-5">
            <span className="font-sans text-4xl font-bold">0</span>
            <h1 className="text-4xl font-bold mr-2">تومان</h1>
            <span className="text-slate-500">/ ماهانه</span>
          </div>
          <p className="text-slate-500 mt-5 leading-7">
            لورم ايپسوم متن ساختگی با توليد سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافيک است.
          </p>
          <ul className="divide-y-2 mt-5">
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-blue-600" />
              <p className="mr-3 text-slate-600">گزارش عملکرد </p>
            </li>
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-blue-600" />
              <p className="mr-3 text-slate-600">ارسال هوشمند </p>
            </li>
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-blue-600" />
              <p className="mr-3 text-slate-600">چالش هفتگی </p>
            </li>
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-blue-600" />
              <p className="mr-3 text-slate-600">اشتراک با دوستان </p>
            </li>
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-slate-500" />
              <p className="mr-3 text-slate-400 line-through">تبلیغات </p>
            </li>
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-slate-500" />
              <p className="mr-3 text-slate-400 line-through ">مربی آنلاین </p>
            </li>
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-slate-500" />
              <p className="mr-3 text-slate-400 line-through">
                درخواست نامحدود{" "}
              </p>
            </li>
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-slate-500" />
              <p className="mr-3 text-slate-400 line-through">گزارش روزانه </p>
            </li>
          </ul>
          <div className="flex justify-center mt-10">
            <Link to={"/features"}>
              <button className="lg:px-9 lg:py-3 600 bg-blue-100 px-7 py-3 rounded-lg text-sm font-bold hover:text-white hover:bg-blue-600 transition">
                شروع کنید
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-2xl">
          <p className="flex items-center justify-center text-orange-500 mt-5 font-bold">
          برنزی
          </p>
          <div className="flex items-center p-3 mt-5">
            <span className="font-sans text-4xl font-bold">50</span>
            <h1 className="text-4xl font-bold mr-2">تومان</h1>
            <span className="text-slate-500">/ ماهانه</span>
          </div>
          <p className="text-slate-500 mt-5 leading-7">
            لورم ايپسوم متن ساختگی با توليد سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافيک است.
          </p>
          <ul className="divide-y-2 mt-5">
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-blue-600" />
              <p className="mr-3 text-slate-600">گزارش عملکرد </p>
            </li>
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-blue-600" />
              <p className="mr-3 text-slate-600">ارسال هوشمند </p>
            </li>
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-blue-600" />
              <p className="mr-3 text-slate-600">چالش هفتگی </p>
            </li>
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-blue-600" />
              <p className="mr-3 text-slate-600">اشتراک با دوستان </p>
            </li>
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-blue-600" />
              <p className="mr-3 text-slate-600 ">تبلیغات </p>
            </li>
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-blue-600" />
              <p className="mr-3 text-slate-600  ">مربی آنلاین </p>
            </li>
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-slate-500" />
              <p className="mr-3 text-slate-400 line-through">
                درخواست نامحدود{" "}
              </p>
            </li>
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-slate-500" />
              <p className="mr-3 text-slate-400 line-through">گزارش روزانه </p>
            </li>
          </ul>
          <div className="flex justify-center mt-10">
            <Link to={"/features"}>
              <button className=" lg:px-9 lg:py-3 600 bg-blue-100 px-7 py-3 rounded-lg text-sm font-bold hover:text-white hover:bg-blue-600 transition">
                شروع کنید
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-2xl">
          <p className="flex items-center justify-center text-orange-500 mt-5 font-bold">
            رایگان
          </p>
          <div className="flex items-center p-3 mt-5">
            <span className="font-sans text-4xl font-bold">100</span>
            <h1 className="text-4xl font-bold mr-2">تومان</h1>
            <span className="text-slate-500">/ ماهانه</span>
          </div>
          <p className="text-slate-500 mt-5 leading-7">
            لورم ايپسوم متن ساختگی با توليد سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافيک است.
          </p>
          <ul className="divide-y-2 mt-5">
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-blue-600" />
              <p className="mr-3 text-slate-600">گزارش عملکرد </p>
            </li>
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-blue-600" />
              <p className="mr-3 text-slate-600">ارسال هوشمند </p>
            </li>
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-blue-600" />
              <p className="mr-3 text-slate-600">چالش هفتگی </p>
            </li>
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-blue-600" />
              <p className="mr-3 text-slate-600">اشتراک با دوستان </p>
            </li>
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-blue-600" />
              <p className="mr-3 text-slate-600 ">تبلیغات </p>
            </li>
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-blue-600" />
              <p className="mr-3 text-slate-600  ">مربی آنلاین </p>
            </li>
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-blue-600" />
              <p className="mr-3 text-slate-600 ">
                درخواست نامحدود{" "}
              </p>
            </li>
            <li className="flex items-center p-3">
              <FaCheckCircle className="text-2xl text-blue-600" />
              <p className="mr-3 text-slate-600 ">گزارش روزانه </p>
            </li>
          </ul>
          <div className="flex justify-center mt-10">
            <Link to={"/features"}>
              <button className="text-white lg:px-9 lg:py-3  bg-orange-600 px-7 py-3 rounded-lg text-sm font-bold hover:text-white hover:bg-blue-600 transition">
                شروع کنید
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanSecond;
