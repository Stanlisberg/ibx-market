import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Hero from "./Hero";
// import SearchCourse from "./SearchCourse";
import NewCourses from "./NewCourses";
import Overflow from "./Overflow";
import Instructors from "./Instructors";
import YourCourses from "./YourCourses";
import Newsletter from "./Newsletter";
import TopCourses from "./TopCourses";
import Footer from "./Footer";

function Home() {
  return (
    <div className="relative min-h-screen pb-4">
      <Navbar />
      <div className="py-5 mx-[8px] sm:mx-[10px] md:mx-[10px] lg:mx-[10px] xl:mx-[80px]">
        {/* <Navbar /> */}
        <Slider />
        <Hero />
        {/* <SearchCourse /> */}
        <NewCourses />
      </div>
      <Overflow />
      <Instructors />
      <YourCourses />
      <Newsletter />
      <TopCourses />
      <Footer />
    </div>
  );
}

export default Home;
