"use client";

import React from "react";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [navIcon, setNavIcon] = useState(true);
  return (
    <>
      <nav className="flex justify-between items-center border-b border-zinc-100 py-5 px-[8px] sm:px-[10px] md:px-[10px] lg:px-[10px] xl:px-[80px]">
        <div className="flex justify-between items-center">
          <div className="flex">
            <img src="icons/logo.svg" width="28" />
            <h1 className="text-[28px] sm:text-[26px] text-zinc-950 font-black uppercase ml-1">
              ACADEMY
            </h1>
          </div>
          <ul className="text-sm font-medium hidden xl:contents text-zinc-950 text-opacity-50 cursor-pointer">
            <li className="ml-10 px-3 py-[6px] hover:bg-neutral-100 hover:rounded-[10px]">
              Categories
            </li>
            <MdOutlineKeyboardArrowDown
              size="17"
              className="mt-[3px]"
              color="grey"
            />
            <li className="px-3 py-[6px] hover:bg-neutral-100 hover:rounded-[10px] mx-[1px]">
              Teach
            </li>
            <li className="px-3 py-[6px] hover:bg-neutral-100 hover:rounded-[10px] mx-[1px]">
              Contact Us
            </li>
            <li className="px-3 py-[6px] hover:bg-neutral-100 hover:rounded-[10px] mx-[1px]">
              About Us
            </li>
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
              className="h-7 mr-[60px] text-[11px] font-normal outline-none pl-3 bg-[#fafafa] placeholder:text-slate-400 block sm:text-sm"
              placeholder="Search Anything"
            />
          </div>
          <div className="flex text-sm items-center mr-8 xl:mr-8 md:border-l h-8 w-[120px] md:w-[230px] lg:w-[180px] border-zinc-200 pl-[40px] py-[0px]">
            <img src="icons/dash-image.png" width="33" className="rounded-md" />
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
        <div className="md:hidden mt-1 block cursor-pointer z-[10]">
          {navIcon === true ? (
            <GiHamburgerMenu
              size="32"
              color="#9E5CF2"
              onClick={() => setNavIcon(!navIcon)}
            />
          ) : (
            <FaTimes
              size="32"
              color="#9E5CF2"
              onClick={() => setNavIcon(!navIcon)}
              className="z-100"
            />
          )}
        </div>
        <div
          className={
            navIcon === false
              ? " fixed overflow-y-hidden md:hidden flex flex-col ease-in duration-700 top-[65px] left-0 w-full h-full px-4 py-7 bg-purple-500 z-10 opacity-[0.9]"
              : "  fixed top-17 h-full left-[-100%] ease-in duration-700"
          }
        >
          <ul className="w-full p-4 font-medium text-[18px]">
            <li
              className="border-b border-black py-6 cursor-pointer text-black"
              onClick={() => setNavIcon(!navIcon)}
            >
              Categories
            </li>

            <li
              className="border-b border-black py-6 cursor-pointer text-black"
              onClick={() => setNavIcon(!navIcon)}
            >
              Teach
            </li>

            <li
              className="border-b border-black py-6 cursor-pointer  text-black"
              onClick={() => setNavIcon(!navIcon)}
            >
              Contact Us
            </li>

            <li
              className="border-b border-black py-6 cursor-pointer  text-black"
              onClick={() => setNavIcon(!navIcon)}
            >
              About Us
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
