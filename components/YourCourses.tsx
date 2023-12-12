import React from "react";
import { GoDotFill } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function YourCourses() {
  return (
    <>
      <div className="mt-[170px] border border-black py-5 mx-[8px] sm:mx-[10px] md:mx-[10px] lg:mx-[10px] xl:mx-[80px]">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            <GoDotFill size="5" color="purple" className="mt-[3px]" />{" "}
            <p className="text-zinc-950 text-[16px] font-semibold uppercase ml-[6px]">
              Your Courses
            </p>
          </div>
          <div className=" pl-5 pr-3 py-[6px] bg-neutral-100 cursor-pointer rounded-[10px] justify-start items-center gap-2 inline-flex text-center text-stone-700 text-opacity-75 text-sm font-medium capitalize leading-tight">
            See all
          </div>
        </div>
        <div className="grid w-[100%] grid-cols-1 gap-4 sm:grid-cols-2 mt-[20px]">
          <div className="flex gap-3 border border-blue-700  px-[8px] py-2 bg-neutral-50 rounded-xl">
            <img
              src="images/course-one.svg"
              width="245"
              className="width-[50%]"
            />
            <div className="my-2">
              <p className="text-zinc-950 text-[13px] font-medium capitalize">
                google ads training 2021: profit with pay
              </p>
              <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
                <div className="flex justify-center items-center">
                  <img src="icons/lesson.svg" width="13" />
                  <p className="ml-[4px] text-[12px]">lesson : 6</p>
                </div>
                <div className="flex justify-center items-center">
                  <img src="icons/student.svg" width="13" />
                  <p className="ml-[4px] text-[12px]">Student : 198</p>
                </div>
                <div className="flex justify-center items-center">
                  <img src="icons/cup.svg" width="16" />
                  <p className="ml-[4px] text-[12px]">Average</p>
                </div>
              </div>
              <div>
                <img src="icons/point-one.svg" className="mt-4" />
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="text-zinc-950 text-opacity-75 text-xs font-normal capitalize">
                  Points: 75 / 100
                </div>
                <div className="text-zinc-950 text-opacity-75 text-xs font-normal capitalize">
                  Days: 56
                </div>
              </div>
              <div className="flex">
                <div className="flex mt-[20px]">
                  <img
                    src="images/small-one.svg"
                    width="33"
                    className="rounded-[10px]"
                  />
                  <div className="text-stone-700 text-[12px] font-medium leading-1 ml-2 tracking-tight">
                    <h1>Jon katner</h1>
                    <p className="text-stone-700 text-opacity-75 text-[10px] font-normal tracking-tight">
                      SEO
                    </p>
                  </div>
                </div>
                <div>
                  <div className="w-[120px] md:w-[135px] px-[4px] capitalize cursor-pointer py-[8px] bg-zinc-950 text-white text-sm rounded-[10px] mt-7 mb-[20px] justify-center items-center inline-flex">
                    All <span className="sm:contents hidden">Instructors</span>
                    <MdOutlineKeyboardArrowRight
                      className="ml-2 mt-1"
                      size="20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex border border-blue-700 px-[8px]">
            <img
              src="images/course-two.svg"
              width="200"
              className="width-[50%]"
            />
            <div></div>
          </div>
          <div className="flex border border-blue-700  px-[8px]">
            <img
              src="images/course-three.svg"
              width="200"
              className="width-[50%]"
            />
            <div></div>
          </div>
          <div className="flex border border-blue-700  px-[8px]">
            <img
              src="images/course-four.svg"
              width="200"
              className="width-[50%]"
            />
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YourCourses;
