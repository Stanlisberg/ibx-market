import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Hero() {
  return (
    <>
      <div className="hero mt-[60px] flex flex-col justify-center items-center xl:justify-between">
        <div className="sm:w-[500px] lg:px-0 lg:mb-32">
          <div className="text-black text-[27px] text-center sm:text-start font-black capitalize leading-[45px]">
            <p>🙌 Hello friends</p>
            <p>I am Sofia and we want to start</p>
            <p>
              {" "}
              a <span className="text-black text-opacity-20">Web</span>
              <span className="text-purple-400"> Design</span> course together.
            </p>
            <p> Do you like it too 😍 ?</p>
          </div>
          <div className="flex xl:w-[500px] items-center relative mt-[2px]">
            <div className="hover:scale-90 ease-in-out duration-300 w-[120px] md:w-[145px] py-[10px] px-[4px] capitalize cursor-pointer bg-zinc-950 text-white text-sm rounded-[8px] mt-7 justify-center items-center inline-flex">
              Start course <span className="sm:contents hidden">now</span>
              <MdOutlineKeyboardArrowRight className="ml-2 mt-1" size="20" />
            </div>
            <img src="icons/seven-nine.svg" width="43" className="ml-6 mt-8" />
            <img
              src="icons/spring-arrow-yellow.svg"
              className="mt-10"
              width="80"
            />
            <div className="w-[76px] h-9 px-3.5 py-2 origin-top-left rotate-[20deg] text-amber-500 bg-amber-500 bg-opacity-5 rounded-[50px] justify-start items-center gap-2 inline-flex absolute bottom-[70px] left-[240px] sm:left-[280px]">
              Booked
            </div>
          </div>
        </div>
        <div className="xl:w-[600px] mt-[60px] lg:mt-[0px]">
          <img src="icons/woman-circle.svg" width="900" className="" />
        </div>
      </div>
    </>
  );
}

export default Hero;
