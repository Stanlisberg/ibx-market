import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <div className="flex">
            <img src="icons/logo.svg" width="22" />
            <h1 className="text-[20px] sm:text-2xl text-zinc-950 font-black uppercase ml-1">
              ACADEMY
            </h1>
          </div>
          <ul className="text-sm font-medium hidden xl:contents text-zinc-950 text-opacity-50">
            <li className="ml-10 ">Categories</li>
            <MdOutlineKeyboardArrowDown
              size="17"
              className="mt-[3px]"
              color="grey"
            />
            {/* <span>
              <img
                src="icons/arrow-down.svg"
                className="absolute right-[10px]"
              />
            </span> */}
            <li className="px-3">Teach</li>
            <li className="px-3">Contact Us</li>
            <li className="px-3">About Us</li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="w-[200px] hidden md:flex relative mr-[40px] bg-neutral-50 rounded-[6px] py-[3px] text-zinc-950 text-opacity-25 text-[13px]">
            <img
              src="icons/Search.svg"
              className="absolute right-2 top-[10px]"
              width="15"
            />
            <input
              type="text"
              className="h-7 mr-[60px] text-[11px] font-normal outline-none pl-3 bg-[#fafafa]"
              placeholder="Search Anything"
            />
          </div>
          <div className="flex text-sm items-center xl:mr-8 md:border-l h-8 w-[120px] md:w-[230px] lg:w-[180px] border-zinc-200 pl-[40px] py-[0px]">
            <img
              src="icons/dash-image.png"
              width="33"
              className="border border-black rounded-md"
            />
            <span className="text-sm ml-2 flex md:grid items-center">
              <p className="text-zinc-950 text-[14px] leading-3 font-medium">
                Behzad <span className="hidden md:contents">Paschei</span>
              </p>
              <MdOutlineKeyboardArrowDown
                size="17"
                className="md:hidden mt-[3px] ml-[5px]"
              />
              <p className="hidden md:grid text-zinc-950 text-opacity-50 text-[10px] font-medium">
                Ui & Ux designer
              </p>
            </span>
          </div>
          <div className="bell py-2 px-2 hidden md:grid bg-purple-500 bg-opacity-5 rounded-xl">
            <img src="icons/bell.svg" width="15" />
          </div>
        </div>
        <HiOutlineMenu size="30" className="md:hidden" />
      </nav>
    </>
  );
}

export default Navbar;