import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SearchCourse from "./SearchCourse";
import NewCourses from "./NewCourses";
import Instructors from "./Instructors";
import YourCourses from "./YourCourses";

function Home() {
  return (
    // <div className="px-3 sm:px-5 md:px-5 lg:px-5 xl:px-20 border-2 border-red-800 relative">
    <div className="border-2 border-red-800 relative min-h-screen pb-4">
      <div className="border border-black mt-5 py-5 mx-[8px] sm:mx-[10px] md:mx-[10px] lg:mx-[10px] xl:mx-[80px]">
        <Navbar />
        <Hero />
        <SearchCourse />
        <NewCourses />
      </div>
      <div className='absolute top-[450px] left-[27px] hidden xl:flex'>
        <img src='icons/dotted-arrow.svg' width='60'/>
      </div>
      <Instructors />
      <YourCourses />
    </div>
  );
}

export default Home;
