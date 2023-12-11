import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="px-3 sm:px-5 md:px-5 lg:px-5 xl:px-20 border-2 border-red-800 h-screen">
      <div className="border border-black mt-5 py-5">
        <Navbar />
      </div>
    </div>
  );
}

export default Home;
