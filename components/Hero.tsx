import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

function Hero() {
  return (
    <>
      <div className="hero mt-[60px] flex flex-col justify-center items-center lg:justify-between">
        <div className="sm:w-[600px] border border-black px-3 lg:px-0 lg:mb-32 flex justify-center items- lg:justify-start">
          <div>
            <div className="text-black text-[27px] text-center sm:text-start font-black capitalize leading-[45px]">
              <p>🙌 Hello friends</p>
              <p>I am Sofia and we want to start</p>
              <p>
                {" "}
                a <span className="text-black text-opacity-20">Web</span>
                <span className="text-purple-400"> Design</span> course
                together.
              </p>
              <p> Do you like it too 😍 ?</p>
            </div>
            <div className="flex justify-start lg:w-[500px] items-center relative mt-[2px]">
              <button className="hover:scale-90 ease-in-out duration-300 py-[10px] px-2 md:px-[7px] md:py-[12px]  capitalize cursor-pointer bg-zinc-950 text-white text-[13px] rounded-[8px] mt-7 justify-center items-center flex">
                <p>
                  Start course <span className="sm:contents hidden">now</span>
                </p>
                <MdOutlineKeyboardArrowRight className="ml-2" size="20" />
              </button>
              <Image
                alt="seven-nine image"
                src="icons/seven-nine.svg"
                className="ml-6 mt-8"
                width="43"
                height="20"
              />
              <Image
                alt="spring"
                src="icons/spring-arrow-yellow.svg"
                className="mt-10"
                width="80"
                height="20"
              />
              <div className="w-[76px] h-9 px-3.5 py-2 origin-top-left rotate-[20deg] text-amber-500 bg-amber-500 bg-opacity-5 rounded-[50px] justify-start items-center gap-2 inline-flex absolute bottom-[60px] left-[240px] sm:left-[270px]">
                Booked
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-[600px] mt-[60px] lg:mt-[0px]">
          <Image
            alt="woman"
            src="icons/woman-circle.svg"
            width="900"
            height="20"
            className=""
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
