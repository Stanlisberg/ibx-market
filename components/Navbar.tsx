"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [navIcon, setNavIcon] = useState(true);
  return (
    <>
      <nav className="flex justify-between items-center border-b border-zinc-200 py-[18px] px-[8px] sm:px-[10px] md:px-[10px] lg:px-[10px] xl:px-[80px]">
        <div className="flex justify-between items-center">
          <div className="flex">
            <Image alt="logo" height="20" src="icons/logo.svg" width="28" />
            <h1 className="text-[28px] sm:text-[26px] text-zinc-950 font-black uppercase ml-1">
              ACADEMY
            </h1>
          </div>
          <ul className="relative text-[13px] font-medium hidden xl:contents text-zinc-950 text-opacity-50 cursor-pointer">
            <li className="ml-10 px-3 py-[6px] hover:bg-neutral-100 hover:rounded-[10px]">
              Categories
            </li>
            <MdOutlineKeyboardArrowDown
              size="17"
              className="absolute top-[32px] left-[357px]"
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
          <div className="w-[200px] hidden md:flex relative mr-[40px] bg-neutral-50 rounded-[6px] py-[8px] text-zinc-950 text-opacity-25 text-[13px]">
            <Image
              alt="search"
              height="20"
              src="icons/Search.svg"
              className="absolute right-2 top-[15px]"
              width="15"
            />
            <input
              type="text"
              className="h-7 mr-[60px] text-[11px] outline-none pl-3 bg-[#fafafa] placeholder:text-[11px] placeholder:text-slate-400 text-slate-500 font-medium block sm:text-[12px]"
              placeholder="Search Anything"
            />
          </div>
          <div className="flex text-sm items-center mr-[40px] xl:mr-8 md:border-l h-10 w-[120px] md:w-[230px] lg:w-[180px] border-zinc-200 pl-[40px] py-2">
            <Image
              alt="dash"
              height="20"
              src="icons/dashed.svg"
              width="1"
              className="rounded-md w-[32px] md:w-10"
            />
            <span className="text-sm ml-2 flex md:grid items-center">
              <p className="text-zinc-950 text-[13px] leading-3 font-medium">
                Behzad <span className="hidden md:contents">Paschei</span>
              </p>
              <MdOutlineKeyboardArrowDown
                size="17"
                className="md:hidden mt-[3px]"
                color="black"
              />
              <p className="hidden md:grid text-zinc-950 text-opacity-50 text-[10px] font-medium">
                Ui & Ux designer
              </p>
            </span>
          </div>
          <div className="bell py-3 px-3 hidden md:grid bg-purple-500 bg-opacity-5 rounded-xl">
            <Image alt="ball" src="icons/bell.svg" height="20" width="16" />
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
