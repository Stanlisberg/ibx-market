import React from "react";
import Image from "next/image";

function SearchCourse() {
  return (
    <div className="w-full mx-auto">
      <div className="w-[300px] sm:w-[500px] md:w-[600px] lg:w-[700px] text-center mx-auto">
        <p className="text-zinc-950 text-2xl font-black  capitalize leading-[40px]">
          Search among
          <span className="text-purple-400 text-2xl font-black  capitalize leading-[40px]">
            {" "}
            58340
          </span>{" "}
          courses and
        </p>
        <p className="text-zinc-950 text-2xl font-black  capitalize leading-[40px]">
          find your favorite course
        </p>
      </div>
      <div className="flex flex-col justify-center md:flex-row items-center mt-[50px] md:mt-[20px]">
        <div className="w-[270px] md:w-[504px] border border-neutral-50 relative md:ml-[60px] bg-neutral-50 rounded-[6px] py-[5px] text-zinc-950 text-opacity-25 text-[13px]  justify-start items-center gap-4 inline-flex">
          <Image
            alt='search'
            height='20'
            src="icons/Search.svg"
            className="absolute right-2 top-[14px]"
            width="15"
          />
          <div className="hover:scale-90 ease-in-out duration-300 w-[70px] md:w-[100px] ml-2 px-7 py-1.5 bg-zinc-950 rounded-[10px] text-white justify-center items-center gap-2 inline-flex cursor-pointer">
            Categories
          </div>
          <input
            type="text"
            className="h-7 md:mr-[45px] text-[11px] font-normal outline-none md:pl-[4px] bg-[#fafafa] placeholder:text-slate-400 block sm:text-sm w-[110px] md:w-[500px]"
            placeholder="Search Anything"
          />
        </div>
        <div className="text-stone-700 text-opacity-75 text-sm font-medium capitalize ml-[10px] mt-[20px] md:mt-[0px]">
          Or view the following courses...
        </div>
        <img
          alt='arrow'
          src="icons/spring-arrow-green.svg"
          width="90"
          height='20'
          className="md:mb-[70px] md:mt-0 mt-[10px]"
        />
      </div>
    </div>
  );
}

export default SearchCourse;
