import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SearchCourse from "./SearchCourse";
import NewCourses from "./NewCourses";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Home() {
  return (
    <div className="px-3 sm:px-5 md:px-5 lg:px-5 xl:px-20 border-2 border-red-800 relative">
      <div className="border border-black mt-5 py-5">
        <Navbar />
        <Hero />
        <SearchCourse />
        <NewCourses />
      </div>
      <div className='absolute top-[450px] left-[27px] hidden xl:flex'>
        <img src='icons/dotted-arrow.svg' width='60'/>
      </div>
      <div>
        <div>
          <h1>Best Instructors</h1>
          <p>At the academy we strive to bring together the best professors for the best courses</p>
          <div>
          <div className="w-[120px] md:w-[145px] px-[4px] capitalize cursor-pointer py-[10px] bg-zinc-950 text-white text-sm rounded-[10px] mt-7 justify-center items-center inline-flex">
              Start course <span className='sm:contents hidden'>now</span>
              <MdOutlineKeyboardArrowRight className='ml-2 mt-1' size='20'/>
          </div>
          </div>
        </div>
        <img src='icons/background.svg' />
      </div>
    </div>
  );
}

export default Home;
