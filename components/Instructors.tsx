import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

function Instructors() {
  return (
    <>
      <div className="hidden xl:flex justify-between items-center mt-[120px] mx-[8px] sm:mx-[10px] md:mx-[10px] lg:mx-[10px] xl:mr-0 xl:ml-[80px]">
        <div className="w-[320px] h-[170px]">
          <Image
            alt="best"
            src="icons/best-instructor.svg"
            width="210"
            height="20"
            className="cursor-text"
          />
          <p className="mt-6 capitalize text-black text-opacity-75 text-[13px] font-normal leading-[20px] tracking-tight">
            At the academy we strive to bring together the best professors for
            the best courses
          </p>
          <div className="flex mt-5 relative">
            <button className=" hover:scale-90 ease-in-out duration-300 py-[10px] px-2 md:px-[7px] md:py-[13px] capitalize cursor-pointer bg-zinc-950 text-white text-[13px] rounded-[8px] mt-7 mb-[20px] justify-center items-center flex">
              <p>
                All <span className="sm:contents hidden">Instructors</span>
              </p>
              <MdOutlineKeyboardArrowRight className="ml-2" size="20" />
            </button>
            <Image
              alt="spring-arrow"
              src="icons/spring-arrow-purple.svg"
              className="mt-[6px] ml-[4px]"
              width="75"
              height="20"
            />
            <div className="w-[100px] h-9 px-3.5 py-2 absolute bottom-[70px] left-[200px] origin-top-left rotate-[20deg] bg-slate-50 rounded-[50px] justify-start items-center gap-2 text-center text-indigo-500 text-[13px] font-medium capitalize flex">
              <p>54</p>
              <p>Instructor</p>
            </div>
          </div>
        </div>
        <div className="w-[800px] flex justify-center items-center relative">
          <Image
            alt="background"
            src="icons/background.svg"
            height="20"
            width="900"
          />
          <div className=" px-[6px] pt-[4px] pb-[28px] bg-neutral-100 border border-zinc-50 rounded-xl absolute z-10 top-[10%] right-[60%] translate-x-[-40%] translate-y-[-55%]">
            <Image
              alt="instructor"
              src="images/instructor-one.svg"
              height="20"
              width="150"
            />
            <div className="justify-between items-center flex mb-[-12px] mt-4">
              <p className="text-[12px] font-medium">Jon kantner</p>
              <p className="text-[11px]">Designer</p>
            </div>
          </div>
          <div className="px-[6px] pt-[4px] pb-[28px] bg-neutral-100 border border-zinc-50 rounded-xl absolute z-10 top-[10%] right-[30%] translate-x-[-75%] translate-y-[-55%]">
            <Image
              alt="instructor-two"
              src="images/instructor-two.svg"
              height="20"
              width="150"
            />
            <div className="justify-between items-center flex mb-[-12px] mt-4">
              <p className="text-[12px] font-medium">Debbie LaChusa</p>
              <p className="text-[11px]">Seo</p>
            </div>
          </div>
          <div className=" px-[6px] pt-[4px] pb-[28px] bg-neutral-100 border border-zinc-50 rounded-xl absolute z-10 top-[10%] right-[1%] translate-x-[-104%] translate-y-[-55%]">
            <Image
              alt="instructor-three"
              src="images/instructor-three.svg"
              height="20"
              width="150"
            />
            <div className="justify-between items-center flex mb-[-12px] mt-4">
              <p className="text-[12px] font-medium">Edwin Diaz</p>
              <p className="text-[11px]">Composer</p>
            </div>
          </div>
          <div className=" px-[6px] pt-[4px] pb-[28px] bg-neutral-100 border border-zinc-50 rounded-xl absolute z-10 top-[90%] right-[55%] translate-x-[-65%] translate-y-[-40%]">
            <Image
              alt="instructor-four"
              height="20"
              src="images/instructor-four.svg"
              width="150"
            />
            <div className="justify-between items-center flex mb-[-12px] mt-4">
              <p className="text-[12px] font-medium">Cassie Evans</p>
              <p className="text-[11px]">Photographer</p>
            </div>
          </div>
          <div className=" px-[6px] pt-[4px] pb-[28px] bg-neutral-100 border border-zinc-50 rounded-xl  absolute z-10 top-[90%] right-[30%] translate-x-[-75%] translate-y-[-40%]">
            <Image
              alt="instructor-five"
              height="20"
              src="images/instructor-five.svg"
              width="150"
            />
            <div className="justify-between items-center flex mb-[-12px] mt-4">
              <p className="text-[12px] font-medium">Erich Andreas</p>
              <p className="text-[11px]">Programmer</p>
            </div>
          </div>
          <div className=" px-[6px] pt-[4px] pb-[28px] bg-neutral-100 border border-zinc-50 rounded-xl absolute z-10 top-[90%] right-[7%] translate-x-[-75%] translate-y-[-40%]">
            <Image
              alt="instructor-six"
              height="20"
              src="images/instructor-six.svg"
              width="150"
            />
            <div className="justify-between items-center flex mb-[-12px] mt-4">
              <p className="text-[12px] font-medium">Jason Allen</p>
              <p className="text-[11px]">Accounting</p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------Mobile view --------------------------------- */}
      <div className="flex flex-col justify-between items center xl:hidden">
        <div className="h-[170px] px-[8px] w-full mt-[60px] mx-1">
          <Image
            alt="best"
            src="icons/best-instructor.svg"
            width="210"
            height="20"
            className="cursor-text"
          />
          <p className="mt-6 capitalize text-black text-opacity-75 text-[16px] font-normal leading-[20px] tracking-tight">
            At the academy we strive to bring together the best professors for
            the best courses
          </p>
          <div className="flex mt-5 relative">
            <div className="hover:scale-90 ease-in-out duration-300 w-[75px] md:w-[135px] px-[4px] capitalize cursor-pointer py-[6px] bg-zinc-950 text-white text-sm rounded-[10px] mt-7 mb-[20px] justify-center items-center inline-flex">
              All <span className="hidden sm:contents"> Instructors</span>
              <MdOutlineKeyboardArrowRight className="ml-2 mt-1" size="20" />
            </div>
            <Image
              alt="spring-purple"
              height="20"
              src="icons/spring-arrow-purple.svg"
              className="mt-[6px] ml-[4px]"
              width="75"
            />
            <div className="w-[100px] h-9 px-3.5 py-2 absolute bottom-[60px] sm:bottom-[70px] left-[150px] sm:left-[200px] origin-top-left rotate-[20deg] bg-slate-50 rounded-[50px] justify-start items-center gap-2 text-center text-indigo-500 text-[13px] font-medium capitalize flex">
              <p>54</p>
              <p>Instructor</p>
            </div>
          </div>
        </div>
        <div className=" text-stone-700 px-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-[50px]">
          <div className=" px-[8px] pt-[8px] pb-[30px] bg-neutral-100 border border-zinc-50 rounded-xl w-full">
            <Image
              alt="instructor-one"
              height="20"
              src="images/instructor-one.svg"
              width="350"
              className="w-full"
            />
            <div className="justify-between items-center flex mb-[-12px] mt-5 text-stone-700">
              <p className="text-[14px] font-medium">Jon kantner</p>
              <p className="text-[11px]">Designer</p>
            </div>
          </div>
          <div className="px-[8px] pt-[8px] pb-[30px] bg-neutral-100 border border-zinc-50 rounded-xl w-full">
            <Image
              alt="instructor-two"
              height="20"
              src="images/instructor-two.svg"
              width="150"
              className="w-full"
            />
            <div className="justify-between items-center flex mb-[-6px] mt-5">
              <p className="text-[14px] font-medium">Debbie LaChusa</p>
              <p className="text-[11px]">Seo</p>
            </div>
          </div>
          <div className=" px-[8px] pt-[8px] pb-[30px] bg-neutral-100 border border-zinc-50 rounded-xl w-full">
            <Image
              alt="instructor-three"
              height="20"
              src="images/instructor-three.svg"
              width="150"
              className="w-full"
            />
            <div className="justify-between items-center flex mb-[-12px] mt-5">
              <p className="text-[14px] font-medium">Edwin Diaz</p>
              <p className="text-[11px]">Composer</p>
            </div>
          </div>
          <div className=" px-[8px] pt-[8px] pb-[30px] bg-neutral-100 border border-zinc-50 rounded-xl w-full ">
            <Image
              alt="four"
              src="images/instructor-four.svg"
              width="150"
              height="20"
              className="w-full"
            />
            <div className="justify-between items-center flex mb-[-12px] mt-5">
              <p className="text-[14px] font-medium">Cassie Evans</p>
              <p className="text-[11px]">Photographer</p>
            </div>
          </div>
          <div className=" px-[8px] pt-[8px] pb-[30px]  bg-neutral-100 border border-zinc-50 rounded-xl  w-full">
            <Image
              alt="five"
              src="images/instructor-five.svg"
              width="150"
              height="20"
              className="w-full"
            />
            <div className="justify-between items-center flex mb-[-12px] mt-5">
              <p className="text-[14px] font-medium">Erich Andreas</p>
              <p className="text-[11px]">Programmer</p>
            </div>
          </div>
          <div className=" px-[8px] pt-[8px] pb-[30px] bg-neutral-100 border border-zinc-50 rounded-xl w-full">
            <Image
              alt="instru six"
              height="20"
              src="images/instructor-six.svg"
              width="150"
              className="w-full"
            />
            <div className="justify-between items-center flex mb-[-12px] mt-5">
              <p className="text-[14px] font-medium">Jason Allen</p>
              <p className="text-[11px]">Accounting</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Instructors;
