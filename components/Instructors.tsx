import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Instructors() {
  return (
    <div className="flex justify-between border items-center border-blue-600 mt-24 mx-[8px] sm:mx-[10px] md:mx-[10px] lg:mx-[10px] xl:mr-0 xl:ml-[80px]">
      <div className="border-2 border-red-700 w-[320px] h-[170px]">
        <img
          src="icons/best-instructor.svg"
          width="210"
          className="cursor-text"
        />
        <p className="mt-6 capitalize text-black text-opacity-75 text-[13px] font-normal leading-[20px] tracking-tight">
          At the academy we strive to bring together the best professors for the
          best courses
        </p>
        <div className="flex mt-5 relative">
          <div className="w-[120px] md:w-[135px] px-[4px] capitalize cursor-pointer py-[8px] bg-zinc-950 text-white text-sm rounded-[10px] mt-7 mb-[20px] justify-center items-center inline-flex">
            All <span className="sm:contents hidden">Instructors</span>
            <MdOutlineKeyboardArrowRight className="ml-2 mt-1" size="20" />
          </div>
          <img
            src="icons/spring-arrow-purple.svg"
            className="mt-[6px] ml-[4px]"
            width="75"
          />
          <div className="w-[100px] h-9 px-3.5 py-2 absolute bottom-[70px] left-[200px] origin-top-left rotate-[20deg] bg-slate-50 rounded-[50px] justify-start items-center gap-2 text-center text-indigo-500 text-[13px] font-medium capitalize flex">
            <p>54</p>
            <p>Instructor</p>
          </div>
        </div>
      </div>
      <div className="w-[800px] border border-black flex justify-center items-center relative">
        <img src="icons/background.svg" width="900" />
        <div>
          <img
            src="images/instructor-one.svg"
            width="180"
            className="absolute z-10 top-[10%] right-[60%] translate-x-[-55%] translate-y-[-55%]"
          />
        </div>
        <div>
          <img
            src="images/instructor-two.svg"
            width="180"
            className="absolute z-10 top-[10%] right-[30%] translate-x-[-55%] translate-y-[-55%]"
          />
        </div>
        <div>
          <img
            src="images/instructor-three.svg"
            width="180"
            className="absolute z-10 top-[10%] right-[1%] translate-x-[-55%] translate-y-[-55%]"
          />
        </div>
        <div>
          <img
            src="images/instructor-four.svg"
            width="200"
            className="absolute z-10 top-[20%] right-[80%] translate-x-[-55%] translate-y-[-55%]"
          />
        </div>
        <div>
          <img
            src="images/instructor-five.svg"
            width="200"
            className="absolute z-10 top-[20%] right-[90%] translate-x-[-55%] translate-y-[-55%]"
          />
        </div>
        <div>
          <img
            src="images/instructor-six.svg"
            width="200"
            className="absolute z-10 top-[20%] right-[100%] translate-x-[-55%] translate-y-[-55%]"
          />
        </div>
      </div>
    </div>
  );
}

export default Instructors;
