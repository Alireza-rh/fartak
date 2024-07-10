/* eslint-disable no-unused-vars */
import React from "react";
import { IoMdPerson } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { TbDeviceAnalytics } from "react-icons/tb";
import { FaRunning } from "react-icons/fa";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { IoFastFood } from "react-icons/io5";

const Properties = () => {
  return (
    <div className="w-[80%] md:w-[80%]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-20">
      <div className=" my-8 md:w-[90%] ">
        <div className="bg-blue-600 inline-block p-3 text-white text-2xl rounded-xl">
          <IoMdPerson />
        </div>
        <h3 className="text-2xl font-bold mt-2">سبک شخصی</h3>
        <p className="text-slate-400 mt-3 leading-7">
          لورم ايپسوم متن ساختگی با توليد سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافيک است.
        </p>
      </div>

      <div className=" my-8 md:w-[90%] ">
        <div className="bg-blue-600 inline-block p-3 text-white text-2xl rounded-xl">
          <FaUserFriends />
        </div>
        <h3 className="text-2xl font-bold mt-2">دعوت از دوستان </h3>
        <p className="text-slate-400 mt-3 leading-7">
          لورم ايپسوم متن ساختگی با توليد سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافيک است.
        </p>
      </div>

      <div className=" my-8 md:w-[90%] ">
        <div className="bg-blue-600 inline-block p-3 text-white text-2xl rounded-xl">
          <TbDeviceAnalytics />
        </div>
        <h3 className="text-2xl font-bold mt-2"> پردازش سریع</h3>
        <p className="text-slate-400 mt-3 leading-7">
          لورم ايپسوم متن ساختگی با توليد سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافيک است.
        </p>
      </div>

      <div className="my-8 md:w-[90%] ">
        <div className="bg-blue-600 inline-block p-3 text-white text-2xl rounded-xl">
          <FaRunning />
        </div>
        <h3 className="text-2xl font-bold mt-2"> ثبت فعالیت</h3>
        <p className="text-slate-400 mt-3 leading-7">
          لورم ايپسوم متن ساختگی با توليد سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافيک است.
        </p>
      </div>

      <div className="my-8 md:w-[90%] ">
        <div className="bg-blue-600 inline-block p-3 text-white text-2xl rounded-xl">
          <IoMusicalNotesSharp />
        </div>
        <h3 className="text-2xl font-bold mt-2"> پخش آهنگ </h3>
        <p className="text-slate-400 mt-3 leading-7">
          لورم ايپسوم متن ساختگی با توليد سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافيک است.
        </p>
      </div>

      <div className="my-8 md:w-[90%] ">
        <div className="bg-blue-600 inline-block p-3 text-white text-2xl rounded-xl">
          <IoFastFood />
        </div>
        <h3 className="text-2xl font-bold mt-2"> رژیم ساده </h3>
        <p className="text-slate-400 mt-3 leading-7">
          لورم ايپسوم متن ساختگی با توليد سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافيک است.
        </p>
      </div>

    </div>
  );
};

export default Properties;
