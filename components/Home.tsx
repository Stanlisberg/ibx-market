import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

function Home() {
  return (
    <div className="px-3 sm:px-5 md:px-5 lg:px-5 xl:px-20 border-2 border-red-800 relative">
      <div className="border border-black mt-5 py-5">
        <Navbar />
        <Hero />
      </div>
      <div className='absolute top-[450px] left-[27px] hidden xl:flex'>
        <img src='icons/dotted-arrow.svg' width='60'/>
      </div>
    </div>
  );
}

export default Home;
