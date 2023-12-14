import React from "react";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function YourCourses() {
  return (
    <>
      <div className="mt-[60px] xl:mt-[150px] sm:mx-[10px] md:mx-[10px] lg:mx-[10px] xl:mx-[80px]">
        <div className="flex justify-between items-center pl-2 pr-2 xl:pr-0">
          <div className="flex justify-center items-center">
            <GoDotFill size="5" color="purple" className="mt-[3px]" />{" "}
            <p className="text-zinc-950 text-[16px] font-semibold uppercase ml-[6px]">
              Your Courses
            </p>
          </div>
          <div className="hover:bg-slate-100 pl-5 pr-3 py-[6px] mt-[6px] bg-neutral-100 cursor-pointer rounded-[10px] justify-start items-center gap-2 inline-flex text-center text-stone-700 text-opacity-75 text-sm font-medium capitalize leading-tight">
            See all
          </div>
        </div>
        <div className="grid w-[100%] grid-cols-1 gap-4 xl:grid-cols-2 mt-[30px]">
          <div className="flex flex-col xl:flex-row gap-3 mx-2 xl:mx-0 px-[8px] py-2 bg-neutral-100 border border-zinc-100 rounded-xl">
            <Image
              alt="one"
              height="0"
              width="0"
              src="images/course-one.svg"
              className="width-[50%] w-full xl:w-[50%]"
            />
            <div className="my-2">
              <p className="text-zinc-950 text-[13px] font-medium capitalize">
                google ads training 2021: profit with pay
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
                  <p className="ml-[4px] text-[12px]">Student : 198</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image alt="cup" height="0" src="icons/cup.svg" width="16" />
                  <p className="ml-[4px] text-[12px]">Average</p>
                </div>
              </div>
              <div>
                <Image
                  alt="point"
                  src="icons/point-one.svg"
                  height="0"
                  width="0"
                  className="mt-4 w-full"
                />
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="text-zinc-950 text-opacity-75 text-xs font-normal capitalize">
                  Points: 75 / 100
                </div>
                <div className="text-zinc-950 text-opacity-75 text-xs font-normal capitalize">
                  Days: 56
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex mt-[20px]">
                  <Image
                    alt="small"
                    src="images/small-one.svg"
                    width="33"
                    height="0"
                    className="rounded-[10px]"
                  />
                  <div className="text-stone-700 text-[12px] font-medium leading-1 ml-2 tracking-tight">
                    <h1>Jon katner</h1>
                    <p className="text-stone-700 text-opacity-75 text-[10px] font-normal tracking-tight">
                      SEO
                    </p>
                  </div>
                </div>
                <div className="hover:bg-zinc-700 px-[4px]capitalize w-[95px] mt-5 cursor-pointer py-[4px] bg-zinc-950 text-white text-sm rounded-[10px] justify-center items-center inline-flex">
                  <p className="text-center text-white text-[12px] font-medium capitalize leading-tight">
                    Let&apos;s Go
                  </p>
                  <MdOutlineKeyboardArrowRight
                    className="ml-2 mt-1"
                    size="20"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-3 mx-2  xl:mx-0 px-[8px] py-2 bg-neutral-100 border border-zinc-100 rounded-xl">
            <Image
              alt="two"
              height="0"
              width="0"
              src="images/course-two.svg"
              className="width-[50%] w-full xl:w-[50%]"
            />
            <div className="my-2">
              <p className="text-zinc-950 text-[13px] font-medium capitalize">
                ASO & Mobile App Marketing: monetize
                <span className="xl:contents hidden">...</span>
                <span className="xl:hidden contents"> Your App</span>
              </p>
              <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
                <div className="flex justify-center items-center">
                  <Image
                    alt="lesson"
                    src="icons/lesson.svg"
                    height="0"
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
                  <p className="ml-[4px] text-[12px]">Student : 198</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image alt="cup" src="icons/cup.svg" height="0" width="16" />
                  <p className="ml-[4px] text-[12px]">Advance</p>
                </div>
              </div>
              <div>
                <Image
                  alt="two"
                  height="0"
                  width="0"
                  src="icons/point-two.svg"
                  className="mt-4 width-full"
                />
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="text-zinc-950 text-opacity-75 text-xs font-normal capitalize">
                  Points: 25 / 100
                </div>
                <div className="text-zinc-950 text-opacity-75 text-xs font-normal capitalize">
                  Days: 56
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex mt-[20px]">
                  <Image
                    alt="small"
                    src="images/small-two.svg"
                    width="33"
                    height="0"
                    className="rounded-[10px]"
                  />
                  <div className="text-stone-700 text-[12px] font-medium leading-1 ml-2 tracking-tight">
                    <h1>Jon katner</h1>
                    <p className="text-stone-700 text-opacity-75 text-[10px] font-normal tracking-tight">
                      SEO
                    </p>
                  </div>
                </div>
                <div className="hover:bg-zinc-700 px-[4px]capitalize w-[95px] mt-5 cursor-pointer py-[4px] bg-zinc-950 text-white text-sm rounded-[10px] justify-center items-center inline-flex">
                  <p className="text-center text-white text-[12px] font-medium capitalize leading-tight">
                    Let&apos;s Go
                  </p>
                  <MdOutlineKeyboardArrowRight
                    className="ml-2 mt-1"
                    size="20"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-3 mx-2  xl:mx-0 border border-zinc-100 px-[8px] py-2 bg-neutral-100 rounded-xl">
            <Image
              alt="three"
              src="images/course-three.svg"
              width="0"
              height="0"
              className="width-[50%] w-full xl:w-[50%]"
            />
            <div className="my-2">
              <p className="text-zinc-950 text-[13px] font-medium capitalize">
                Python for Beginners - Learn
                <span className="xl:contents hidden">...</span>
                <span className="contents xl:hidden">
                  {" "}
                  Programming from scratch
                </span>
              </p>
              <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
                <div className="flex justify-center items-center">
                  <Image
                    alt="lesson"
                    src="icons/lesson.svg"
                    width="13"
                    height="0"
                  />
                  <p className="ml-[4px] text-[12px]">lesson : 6</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    alt="student"
                    src="icons/student.svg"
                    width="13"
                    height="0"
                  />
                  <p className="ml-[4px] text-[12px]">Student : 198</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image alt="cup" src="icons/cup.svg" width="16" height="0" />
                  <p className="ml-[4px] text-[12px]">Beginner</p>
                </div>
              </div>
              <div>
                <Image
                  alt="three"
                  height="0"
                  width="0"
                  src="icons/point-three.svg"
                  className="mt-4 width-full"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-zinc-950 text-opacity-75 text-xs font-normal capitalize">
                  Points: 50 / 100
                </div>
                <div className="text-zinc-950 text-opacity-75 text-xs font-normal capitalize">
                  Days: 56
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <div className="flex mt-[20px]">
                  <Image
                    alt="three"
                    src="images/small-three.svg"
                    width="33"
                    className="rounded-[10px]"
                    height="0"
                  />
                  <div className="text-stone-700 text-[12px] font-medium leading-1 ml-2 tracking-tight">
                    <h1>Jon katner</h1>
                    <p className="text-stone-700 text-opacity-75 text-[10px] font-normal tracking-tight">
                      Design Teacher
                    </p>
                  </div>
                </div>
                <div className="hover:bg-zinc-700 px-[4px]capitalize w-[95px] mt-5 cursor-pointer py-[4px] bg-zinc-950 text-white text-sm rounded-[10px] justify-center items-center inline-flex">
                  <p className="text-center text-white text-[12px] font-medium capitalize leading-tight">
                    Let&apos;s Go
                  </p>
                  <MdOutlineKeyboardArrowRight
                    className="ml-2 mt-1"
                    size="20"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-3 mx-2  xl:mx-0 border border-zinc-100 px-[8px] py-2 bg-neutral-100 rounded-xl">
            <Image
              alt="four"
              src="images/course-four.svg"
              height="0"
              width="0"
              className="width-[50%] w-full xl:w-[50%]"
            />
            <div className="my-2">
              <p className="text-zinc-950 text-[13px] font-medium capitalize">
                Beginner Nikon Digital SLR Photography
              </p>
              <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
                <div className="flex justify-center items-center">
                  <Image
                    alt="lesson"
                    src="icons/lesson.svg"
                    width="13"
                    height="0"
                  />
                  <p className="ml-[4px] text-[12px]">lesson : 6</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    alt="student"
                    src="icons/student.svg"
                    width="13"
                    height="0"
                  />
                  <p className="ml-[4px] text-[12px]">Student : 198</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image alt="cup" src="icons/cup.svg" width="16" height="0" />
                  <p className="ml-[4px] text-[12px]">Beginner</p>
                </div>
              </div>
              <div>
                <Image
                  alt="four"
                  height="0"
                  width="0"
                  src="icons/point-four.svg"
                  className="mt-4 w-ful"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-zinc-950 text-opacity-75 text-xs font-normal capitalize">
                  Points: 100 / 100
                </div>
                <div className="text-zinc-950 text-opacity-75 text-xs font-normal capitalize">
                  Days: 56
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <div className="flex mt-[20px]">
                  <Image
                    alt="four"
                    src="images/small-four.svg"
                    width="33"
                    height="0"
                    className="rounded-[10px]"
                  />
                  <div className="text-stone-700 text-[12px] font-medium leading-1 ml-2 tracking-tight">
                    <h1>Jon katner</h1>
                    <p className="text-stone-700 text-opacity-75 text-[10px] font-normal tracking-tight">
                      Photography
                    </p>
                  </div>
                </div>
                <div className=" hover:bg-zinc-700 px-[4px]capitalize w-[95px] mt-5 cursor-pointer py-[4px] bg-zinc-950 text-white text-sm rounded-[10px] justify-center items-center inline-flex">
                  <p className="text-center text-white text-[12px] font-medium capitalize leading-tight">
                    Let&apos;s Go
                  </p>
                  <MdOutlineKeyboardArrowRight
                    className="ml-2 mt-1"
                    size="20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YourCourses;
