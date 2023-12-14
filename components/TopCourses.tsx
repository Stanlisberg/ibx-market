import React from "react";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function TopCourses() {
  return (
    <>
      <div className="mt-[60px] mx-2 xl:mt-[90px] sm:mx-[10px] md:mx-[10px] lg:mx-[10px] xl:mx-[80px]">
        <div className="flex justify-between items-center pl-2 pr-2 xl:pr-0">
          <div className="flex justify-center items-center">
            <GoDotFill size="5" color="purple" className="mt-[3px]" />{" "}
            <p className="text-zinc-950 text-[16px] font-semibold uppercase ml-[6px]">
              Top Courses
            </p>
          </div>
          <div className="flex cursor-pointer">
            <div className="p-2 bg-[#f5f5f5] mr-[14px] rounded-[5px] hover:bg-slate-100">
              <IoIosArrowBack className="" />
            </div>
            <div className="p-2 bg-[#f5f5f5] hover:bg-slate-100 rounded-[5px]">
              <IoIosArrowForward className="" />
            </div>
          </div>
        </div>
        <div className="grid lg:flex gap-4 mt-[30px] w-[100%] text-zinc-950 font-medium capitalize text-sm">
          <div className="bg-neutral-50 w-[100%] pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
            <Image
              alt="first"
              src="images/first.svg"
              width="200"
              height="0"
              className="w-[100%] rounded-[5px]"
            />
            <p className="text-zinc-950 text-[13px] font-medium capitalize mt-2">
              Learn Figma- uI/uX Design essential training
            </p>
            <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
              <div className="flex justify-center items-center">
                <Image
                  alt="lesson"
                  height="0"
                  src="icons/lesson.svg"
                  width="13"
                />
                <p className="ml-[4px] text-[12px]">lesson : 6</p>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  alt="student"
                  height="0"
                  src="icons/student.svg"
                  width="13"
                />
                <p className="ml-[4px] text-[12px]">Student : 168</p>
              </div>
              <div className="flex justify-center items-center">
                <Image alt="cup" height="0" src="icons/cup.svg" width="16" />
                <p className="ml-[4px] text-[12px]">Beginner</p>
              </div>
            </div>
            <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
              <div className="hover:bg-zinc-700 w-[70px] sm:w-[120px] pl-[10px] cursor-pointer py-[6px] bg-zinc-950 text-white text-sm rounded-[10px] justify-center items-center inline-flex">
                start <span className="sm:contents hidden">course</span>
                <MdOutlineKeyboardArrowRight
                  className="ml-0.5 mt-1"
                  size="20"
                />
              </div>
              <Image
                alt="four"
                height="0"
                src="icons/star-four.svg"
                width="30"
              />
            </div>
          </div>
          <div className="bg-neutral-50 w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
            <Image
              alt="second"
              height="0"
              src="images/second.svg"
              width="200"
              className="w-[100%] rounded-[5px]"
            />
            <p className="text-zinc-950 text-[13px] font-medium capitalize mt-2">
              Learn Figma- uI/uX Design essential training
            </p>
            <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
              <div className="flex justify-center items-center">
                <Image
                  alt="lesson"
                  height="0"
                  src="icons/lesson.svg"
                  width="13"
                />
                <p className="ml-[4px] text-[12px]">lesson : 6</p>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  alt="student"
                  src="icons/student.svg"
                  height="0"
                  width="13"
                />
                <p className="ml-[4px] text-[12px]">Student : 168</p>
              </div>
              <div className="flex justify-center items-center">
                <Image alt="cup" height="0" src="icons/cup.svg" width="16" />
                <p className="ml-[4px] text-[12px]">Beginner</p>
              </div>
            </div>
            <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
              <div className="hover:bg-zinc-700 w-[70px] sm:w-[120px] pl-[10px] cursor-pointer py-[6px] bg-zinc-950 text-white text-sm rounded-[10px] justify-center items-center inline-flex">
                start <span className="sm:contents hidden">course</span>
                <MdOutlineKeyboardArrowRight
                  className="ml-0.5 mt-1"
                  size="20"
                />
              </div>
              <Image
                alt="three"
                height="0"
                src="icons/star-three.svg"
                width="30"
              />
            </div>
          </div>
          <div className="bg-neutral-50 w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
            <Image
              alt="third"
              height="0"
              src="images/third.svg"
              width="200"
              className="w-[100%] rounded-[5px]"
            />
            <p className="text-zinc-950 text-[13px] font-medium capitalize mt-2">
              Learn Figma- uI/uX Design essential training
            </p>
            <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
              <div className="flex justify-center items-center">
                <Image
                  alt="lesson"
                  height="0"
                  src="icons/lesson.svg"
                  width="13"
                />
                <p className="ml-[4px] text-[12px]">lesson : 6</p>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  alt="student"
                  height="0"
                  src="icons/student.svg"
                  width="13"
                />
                <p className="ml-[4px] text-[12px]">Student : 168</p>
              </div>
              <div className="flex justify-center items-center">
                <Image alt="cup" height="0" src="icons/cup.svg" width="16" />
                <p className="ml-[4px] text-[12px]">Beginner</p>
              </div>
            </div>
            <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
              <div className="hover:bg-zinc-700 w-[70px] sm:w-[120px] pl-[10px] cursor-pointer py-[6px] bg-zinc-950 text-white text-sm rounded-[10px] justify-center items-center inline-flex">
                start <span className="sm:contents hidden">course</span>
                <MdOutlineKeyboardArrowRight
                  className="ml-0.5 mt-1"
                  size="20"
                />
              </div>
              <Image
                alt="five"
                height="0"
                src="icons/star-five.svg"
                width="30"
              />
            </div>
          </div>
          <div className="bg-neutral-50 w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
            <Image
              alt="fourth"
              height="0"
              src="images/fourth.svg"
              width="200"
              className="w-[100%] rounded-[5px]"
            />
            <p className="text-zinc-950 text-[13px] font-medium capitalize mt-2">
              Learn Figma- uI/uX Design essential training
            </p>
            <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
              <div className="flex justify-center items-center">
                <Image
                  alt="lesson"
                  height="0"
                  src="icons/lesson.svg"
                  width="13"
                />
                <p className="ml-[4px] text-[12px]">lesson : 6</p>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  alt="student"
                  height="0"
                  src="icons/student.svg"
                  width="13"
                />
                <p className="ml-[4px] text-[12px]">Student : 168</p>
              </div>
              <div className="flex justify-center items-center">
                <Image alt="cup" height="0" src="icons/cup.svg" width="16" />
                <p className="ml-[4px] text-[12px]">Beginner</p>
              </div>
            </div>
            <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
              <div className="hover:bg-zinc-700 w-[70px] sm:w-[120px] pl-[10px] cursor-pointer py-[6px] bg-zinc-950 text-white text-sm rounded-[10px] justify-center items-center inline-flex">
                start <span className="sm:contents hidden">course</span>
                <MdOutlineKeyboardArrowRight
                  className="ml-0.5 mt-1"
                  size="20"
                />
              </div>
              <Image
                alt="star"
                height="2"
                src="icons/star-two.svg"
                width="30"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopCourses;
