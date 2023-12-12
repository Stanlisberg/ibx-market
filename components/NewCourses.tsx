import React from "react";
import { GoDotFill } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function NewCourses() {
  return (
    <>
      <div>
        <div className="flex justify-between items-center mt-[15px]">
          <div className="flex justify-center items-center">
            <GoDotFill size="5" color="purple" className="mt-[3px]" />{" "}
            <p className="text-zinc-950 text-[16px] font-semibold uppercase ml-[6px]">
              New Courses(Book)
            </p>
          </div>
          <ul className="text-[12px] cursor-pointer justify-center items-center hidden md:flex">
            <li className="mx-[2px] px-3 py-[6px] font-medium inline-flex bg-neutral-100 rounded-[10px] justify-center items-center capitalize text-zinc-950">
              All course
            </li>
            <li className="mx-[2px] hover:bg-neutral-100 hover:rounded-[10px] px-3 py-[6px] font-medium">
              Design
            </li>
            <li className="mx-[2px] hover:bg-neutral-100 hover:rounded-[10px] px-3 py-[6px] font-medium">
              Development
            </li>
            <li className="mx-[2px] hover:bg-neutral-100 hover:rounded-[10px] px-3 py-[6px] font-medium">
              Photography
            </li>
            <li className="mx-[2px] hover:bg-neutral-100 hover:rounded-[10px] px-3 py-[6px] font-medium">
              Music
            </li>
            <li className="bg-neutral-100 rounded-[5px] px-2 py-[6px]">
              {" "}
              <img src="icons/funnel.svg" className="" width="15" />{" "}
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 w-[100%] text-zinc-950 font-medium capitalize text-sm">
          <div className="border border-zinc-200 w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
            <img
              src="images/first.svg"
              width="200"
              className="w-[100%] rounded-[5px]"
            />
            <p className="text-zinc-950 text-[13px] font-medium capitalize">
              Learn Figma- uI/uX Design essential training
            </p>
            <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
              <div className="flex justify-center items-center">
                <img src="icons/lesson.svg" width="13" />
                <p className="ml-[4px] text-[12px]">lesson : 6</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/student.svg" width="13" />
                <p className="ml-[4px] text-[12px]">Student : 168</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/cup.svg" width="16" />
                <p className="ml-[4px] text-[12px]">Beginner</p>
              </div>
            </div>
            <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
              <div className="w-[70px] sm:w-[120px] pl-[10px] cursor-pointer py-[6px] bg-zinc-950 text-white text-sm rounded-[10px] justify-center items-center inline-flex">
                start <span className="sm:contents hidden">course</span>
                <MdOutlineKeyboardArrowRight
                  className="ml-0.5 mt-1"
                  size="20"
                />
              </div>
              <img src="icons/star-four.svg" width="30" />
            </div>
          </div>
          <div className="border border-zinc-200 w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
            <img
              src="images/second.svg"
              width="200"
              className="w-[100%] rounded-[5px]"
            />
            <p className="text-zinc-950 text-[13px] font-medium capitalize">
              Learn Figma- uI/uX Design essential training
            </p>
            <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
              <div className="flex justify-center items-center">
                <img src="icons/lesson.svg" width="13" />
                <p className="ml-[4px] text-[12px]">lesson : 6</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/student.svg" width="13" />
                <p className="ml-[4px] text-[12px]">Student : 168</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/cup.svg" width="16" />
                <p className="ml-[4px] text-[12px]">Beginner</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-[18px] flex-wrap">
              <div className="w-[70px] sm:w-[110px] pl-[10px] cursor-pointer py-[6px] bg-zinc-950 text-white text-[13px] rounded-[10px] justify-center items-center inline-flex">
                start <span className="sm:contents hidden">course</span>
                <MdOutlineKeyboardArrowRight
                  className="ml-0.5 mt-1"
                  size="20"
                />
              </div>
              <img src="icons/star-four.svg" width="30" />
            </div>
          </div>
          <div className="border border-zinc-200 w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
            <img
              src="images/third.svg"
              width="200"
              className="w-[100%] rounded-[5px]"
            />
            <p className="text-zinc-950 text-[13px] font-medium capitalize">
              Learn Figma- uI/uX Design essential training
            </p>
            <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
              <div className="flex justify-center items-center">
                <img src="icons/lesson.svg" width="13" />
                <p className="ml-[4px] text-[12px]">lesson : 6</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/student.svg" width="13" />
                <p className="ml-[4px] text-[12px]">Student : 168</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/cup.svg" width="16" />
                <p className="ml-[4px] text-[12px]">Beginner</p>
              </div>
            </div>
            <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
              <div className="w-[70px] sm:w-[110px] pl-[10px] cursor-pointer py-[6px] bg-zinc-950 text-white text-[13px] rounded-[10px] justify-center items-center inline-flex">
                start <span className="sm:contents hidden">course</span>
                <MdOutlineKeyboardArrowRight
                  className="ml-0.5 mt-1"
                  size="20"
                />
              </div>
              <img src="icons/star-four.svg" width="30" />
            </div>
          </div>
          <div className="border border-zinc-200 w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
            <img
              src="images/fourth.svg"
              width="200"
              className="w-[100%] rounded-[5px]"
            />
            <p className="text-zinc-950 text-[13px] font-medium capitalize">
              Learn Figma- uI/uX Design essential training
            </p>
            <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
              <div className="flex justify-center items-center">
                <img src="icons/lesson.svg" width="13" />
                <p className="ml-[4px] text-[12px]">lesson : 6</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/student.svg" width="13" />
                <p className="ml-[4px] text-[12px]">Student : 168</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/cup.svg" width="16" />
                <p className="ml-[4px] text-[12px]">Beginner</p>
              </div>
            </div>
            <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
              <div className="w-[70px] sm:w-[110px] pl-[10px] cursor-pointer py-[6px] bg-zinc-950 text-white text-[13px] rounded-[10px] justify-center items-center inline-flex">
                start <span className="sm:contents hidden">course</span>
                <MdOutlineKeyboardArrowRight
                  className="ml-0.5 mt-1"
                  size="20"
                />
              </div>
              <img src="icons/star-four.svg" width="30" />
            </div>
          </div>
          <div className="border border-zinc-200 w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
            <img
              src="images/fifth.svg"
              width="200"
              className="w-[100%] rounded-[5px]"
            />
            <p className="text-zinc-950 text-[13px] font-medium capitalize">
              Learn Figma- uI/uX Design essential training
            </p>
            <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
              <div className="flex justify-center items-center">
                <img src="icons/lesson.svg" width="13" />
                <p className="ml-[4px] text-[12px]">lesson : 6</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/student.svg" width="13" />
                <p className="ml-[4px] text-[12px]">Student : 168</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/cup.svg" width="16" />
                <p className="ml-[4px] text-[12px]">Beginner</p>
              </div>
            </div>
            <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
              <div className="w-[70px] sm:w-[110px] pl-[10px] cursor-pointer py-[6px] bg-zinc-950 text-white text-[13px] rounded-[10px] justify-center items-center inline-flex">
                start <span className="sm:contents hidden">course</span>
                <MdOutlineKeyboardArrowRight
                  className="ml-0.5 mt-1"
                  size="20"
                />
              </div>
              <img src="icons/star-four.svg" width="30" />
            </div>
          </div>
          <div className="border border-zinc-200 w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
            <img
              src="images/sixth.svg"
              width="200"
              className="w-[100%] rounded-[5px]"
            />
            <p className="text-zinc-950 text-[13px] font-medium capitalize">
              Learn Figma- uI/uX Design essential training
            </p>
            <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
              <div className="flex justify-center items-center">
                <img src="icons/lesson.svg" width="13" />
                <p className="ml-[4px] text-[12px]">lesson : 6</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/student.svg" width="13" />
                <p className="ml-[4px] text-[12px]">Student : 168</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/cup.svg" width="16" />
                <p className="ml-[4px] text-[12px]">Beginner</p>
              </div>
            </div>
            <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
              <div className="w-[70px] sm:w-[110px] pl-[10px] cursor-pointer py-[6px] bg-zinc-950 text-white text-[13px] rounded-[10px] justify-center items-center inline-flex">
                start <span className="sm:contents hidden">course</span>
                <MdOutlineKeyboardArrowRight
                  className="ml-0.5 mt-1"
                  size="20"
                />
              </div>
              <img src="icons/star-four.svg" width="30" />
            </div>
          </div>
          <div className="border border-zinc-200 w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
            <img
              src="images/seventh.svg"
              width="200"
              className="w-[100%] rounded-[5px]"
            />
            <p className="text-zinc-950 text-[13px] font-medium capitalize">
              Learn Figma- uI/uX Design essential training
            </p>
            <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
              <div className="flex justify-center items-center">
                <img src="icons/lesson.svg" width="13" />
                <p className="ml-[4px] text-[12px]">lesson : 6</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/student.svg" width="13" />
                <p className="ml-[4px] text-[12px]">Student : 168</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/cup.svg" width="16" />
                <p className="ml-[4px] text-[12px]">Beginner</p>
              </div>
            </div>
            <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
              <div className="w-[70px] sm:w-[110px] pl-[10px] cursor-pointer py-[6px] bg-zinc-950 text-white text-[13px] rounded-[10px] justify-center items-center inline-flex">
                start <span className="sm:contents hidden">course</span>
                <MdOutlineKeyboardArrowRight
                  className="ml-0.5 mt-1"
                  size="20"
                />
              </div>
              <img src="icons/star-four.svg" width="30" />
            </div>
          </div>
          <div className="border border-zinc-200 w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
            <img
              src="images/eighth.svg"
              width="200"
              className="w-[100%] rounded-[5px]"
            />
            <p className="text-zinc-950 text-[13px] font-medium capitalize">
              Learn Figma- uI/uX Design essential training
            </p>
            <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
              <div className="flex justify-center items-center">
                <img src="icons/lesson.svg" width="13" />
                <p className="ml-[4px] text-[12px]">lesson : 6</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/student.svg" width="13" />
                <p className="ml-[4px] text-[12px]">Student : 168</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/cup.svg" width="16" />
                <p className="ml-[4px] text-[12px]">Beginner</p>
              </div>
            </div>
            <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
              <div className="w-[70px] sm:w-[110px] pl-[10px] cursor-pointer py-[6px] bg-zinc-950 text-white text-[13px] rounded-[10px] justify-center items-center inline-flex">
                start <span className="sm:contents hidden">course</span>
                <MdOutlineKeyboardArrowRight
                  className="ml-0.5 mt-1"
                  size="20"
                />
              </div>
              <img src="icons/star-four.svg" width="30" />
            </div>
          </div>
        </div>
      </div>



      {/* <div className="w-[1204px] h-72 relative rounded-tl-[40px] rounded-bl-[40px]">
        <div className="w-[1204px] h-72 left-0 top-0 absolute bg-purple-500 bg-opacity-10" />
        <div className="w-[1204px] h-[292px] left-0 top-[-2px] absolute">
          <div className="w-[401px] h-[292px] left-[803px] top-0 absolute justify-end items-center inline-flex">
            <div className="w-[543.81px] h-[327.87px] relative"></div>
          </div>
          <div className="w-[401px] h-[292px] left-0 top-0 absolute justify-end items-center inline-flex">
            <div className="w-[543.81px] h-[327.87px] relative"></div>
          </div>
          <div className="w-[402px] h-[292px] left-[803px] top-0 absolute origin-top-left rotate-180 justify-end items-center inline-flex">
            <div className="w-[545.17px] h-[327.87px] relative"></div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default NewCourses;
