import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Instructors() {
  return (
    <>
    <div className="hidden xl:flex justify-between border-2 items-center border-blue-600 mt-[120px] mx-[8px] sm:mx-[10px] md:mx-[10px] lg:mx-[10px] xl:mr-0 xl:ml-[80px]">
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
          <div className=" hover:scale-90 ease-in-out duration-300 w-[120px] md:w-[135px] px-[4px] capitalize cursor-pointer py-[8px] bg-zinc-950 text-white text-sm rounded-[10px] mt-7 mb-[20px] justify-center items-center inline-flex">
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
        <div className=" px-[6px] pt-[4px] pb-[42px] bg-neutral-100 border border-zinc-50 rounded-xl absolute z-10 top-[10%] right-[60%] translate-x-[-40%] translate-y-[-55%]">
          <img src="images/instructor-one.svg" width="150" />
          <div className="justify-between items-center flex mb-[-12px]">
            <p className="text-[13px] font-medium">Jon kantner</p>
            <p className="text-[11px]">Designer</p>
          </div>
        </div>
        <div className="px-[6px] pt-[4px] pb-[42px] bg-neutral-100 border border-zinc-50 rounded-xl absolute z-10 top-[10%] right-[30%] translate-x-[-75%] translate-y-[-55%]">
          <img src="images/instructor-two.svg" width="150" />
          <div className="justify-between items-center flex mb-[-12px]">
            <p className="text-[13px] font-medium">Debbie LaChusa</p>
            <p className="text-[11px]">Seo</p>
          </div>
        </div>
        <div className=" px-[6px] pt-[4px] pb-[42px] bg-neutral-100 border border-zinc-50 rounded-xl absolute z-10 top-[10%] right-[1%] translate-x-[-104%] translate-y-[-55%]">
          <img src="images/instructor-three.svg" width="150" />
          <div className="justify-between items-center flex mb-[-12px]">
            <p className="text-[13px] font-medium">Edwin Diaz</p>
            <p className="text-[11px]">Composer</p>
          </div>
        </div>
        <div className=" px-[6px] pt-[4px] pb-[42px] bg-neutral-100 border border-zinc-50 rounded-xl absolute z-10 top-[90%] right-[55%] translate-x-[-65%] translate-y-[-40%]">
          <img src="images/instructor-four.svg" width="150" />
          <div className="justify-between items-center flex mb-[-12px]">
            <p className="text-[13px] font-medium">Cassie Evans</p>
            <p className="text-[11px]">Photographer</p>
          </div>
        </div>
        <div className=" px-[6px] pt-[4px] pb-[42px] bg-neutral-100 border border-zinc-50 rounded-xl  absolute z-10 top-[90%] right-[30%] translate-x-[-75%] translate-y-[-40%]">
          <img src="images/instructor-five.svg" width="150" />
          <div className="justify-between items-center flex mb-[-12px]">
            <p className="text-[13px] font-medium">Erich Andreas</p>
            <p className="text-[11px]">Programmer</p>
          </div>
        </div>
        <div className=" px-[6px] pt-[4px] pb-[42px] bg-neutral-100 border border-zinc-50 rounded-xl absolute z-10 top-[90%] right-[7%] translate-x-[-75%] translate-y-[-40%]">
          <img src="images/instructor-six.svg" width="150" />
          <div className="justify-between items-center flex mb-[-12px]">
            <p className="text-[13px] font-medium">Jason Allen</p>
            <p className="text-[11px]">Accounting</p>
          </div>
        </div>
      </div>
    </div>



    {/* ---------------------------Mobile view --------------------------------- */}
      <div className="flex flex-col justify-between items center xl:hidden">
        <div className="border-2 border-red-700 h-[170px] mx-auto px-[8px] w-full mt-[60px]">
          <img
            src="icons/best-instructor.svg"
            width="210"
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
            <img
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
        <div className="border border-black px-2 min-h-[100vh] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-[50px]">
          {/* <img src="icons/background.svg" width="900" className='w-full h-full object-cover'/> */}
          <div className=" px-[8px] pt-[8px] pb-[40px] bg-neutral-100 border border-zinc-50 rounded-xl w-full">
            <img src="images/instructor-one.svg" width="150" className='w-full'/>
            <div className="justify-between items-center flex mb-[-12px]">
              <p className="text-[15px] font-medium">Jon kantner</p>
              <p className="text-[11px]">Designer</p>
            </div>
          </div>
          <div className="px-[8px] pt-[8px] pb-[40px] bg-neutral-100 border border-zinc-50 rounded-xl w-full">
            <img src="images/instructor-two.svg" width="150" className='w-full'/>
            <div className="justify-between items-center flex mb-[-12px]">
              <p className="text-[15px] font-medium">Debbie LaChusa</p>
              <p className="text-[11px]">Seo</p>
            </div>
          </div>
          <div className=" px-[8px] pt-[8px] pb-[40px] bg-neutral-100 border border-zinc-50 rounded-xl w-full">
            <img src="images/instructor-three.svg" width="150" className='w-full'/>
            <div className="justify-between items-center flex mb-[-12px]">
              <p className="text-[15px] font-medium">Edwin Diaz</p>
              <p className="text-[11px]">Composer</p>
            </div>
          </div>
          <div className=" px-[8px] pt-[8px] pb-[40px] bg-neutral-100 border border-zinc-50 rounded-xl w-full ">
            <img src="images/instructor-four.svg" width="150" className='w-full'/>
            <div className="justify-between items-center flex mb-[-12px]">
              <p className="text-[15px] font-medium">Cassie Evans</p>
              <p className="text-[11px]">Photographer</p>
            </div>
          </div>
          <div className=" px-[8px] pt-[8px] pb-[40px]  bg-neutral-100 border border-zinc-50 rounded-xl  w-full">
            <img src="images/instructor-five.svg" width="150" className='w-full' />
            <div className="justify-between items-center flex mb-[-12px]">
              <p className="text-[15px] font-medium">Erich Andreas</p>
              <p className="text-[11px]">Programmer</p>
            </div>
          </div>
          <div className=" px-[8px] pt-[8px] pb-[40px] bg-neutral-100 border border-zinc-50 rounded-xl w-full">
            <img src="images/instructor-six.svg" width="300" className='w-full'/>
            <div className="justify-between items-center flex mb-[-12px]">
              <p className="text-[15px] font-medium">Jason Allen</p>
              <p className="text-[11px]">Accounting</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Instructors;
