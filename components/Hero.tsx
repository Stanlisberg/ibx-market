import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Hero() {
  return (
    <>
    <div className='hero border border-purple-600 mt-40 flex flex-col justify-center items-center xl:justify-between'>
      <div className='border-2 border-green-800 sm:w-[500px] lg:px-0 lg:mb-32'>
        <div className="text-black text-[27px] font-black capitalize leading-[45px]">
          <p>🙌 Hello friends</p>
          <p>I am Sofia and we want to start</p>
          <p> a <span className='text-black text-opacity-20'>Web</span><span className='text-purple-400'> Design</span> course together.</p>
          <p> Do you like it too 😍 ?</p>
        </div>
        <div className='flex border-red-700 xl:w-[500px] border items-center justify-start relative mt-[2px]'>
          <div className="w-[140px] px-[3px] py-[10px] bg-zinc-950 text-white text-sm rounded-[5px] mt-7 justify-center items-center inline-flex">
              Start course now
              <MdOutlineKeyboardArrowRight className='ml-2 mt-1' size='20'/>
          </div>
          <div className=' bg-white rounded-full border-2 flex justify-center text-sm mt-8 ml-6 items-center w-[40px] h-[40px]'>79%</div>
          <img src='icons/spring-arrow-yellow.svg' className='mt-10' width='80'/>
          <div className='w-[76px] h-9 px-3.5 py-2 origin-top-left rotate-[20deg] text-amber-500 bg-amber-500 bg-opacity-5 rounded-[50px] justify-start items-center gap-2 inline-flex absolute bottom-[70px] left-[280px]'>Booked</div>
        </div>
      </div>
      <div className='border border-red-950 xl:w-[600px] mt-[50px] lg:mt-[0px]'> 
        <img src='icons/woman-circle.svg'  width='900' className=''/>
      </div>
    </div>
    </>
  );
}

export default Hero;
