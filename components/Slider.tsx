import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GiCeilingLight } from "react-icons/gi";
import { HiCodeBracket } from "react-icons/hi2";
import { BsCameraVideo } from "react-icons/bs";

function Slider() {
  return (
    <div className="mt-[20px] overflow-hidden relative">
      <div className="lg:hidden arrow-left absolute h-full w-[100px] top-0 flex items-center">
        <IoIosArrowBack size="20" className="" />
      </div>
      <ul className="no-scrollbar gap-[40px] flex whitespace-nowrap overflow-x-scroll items-center text-zinc-950 text-[13px] font-medium capitalize">
        <img
          src="icons/code-dot.svg"
          width="32"
          className="bg-neutral-200 rounded-[5px]"
        />
        {/* <li className='px-2 bg-emerald-100 py-1 rounded-[5px]'><a href='#'>< HiCodeBracket size='22' color='009E68'/></a></li> */}
        <li>
          <a href="#" className="bg-neutral-200 py-1 px-2 rounded-[5px]">
            python
          </a>
        </li>
        <li className="bg-neutral-200 py-1 px-2 rounded-[5px]">
          <a href="#">react</a>
        </li>
        <li className="bg-neutral-200 py-1 px-2 rounded-[5px]">
          <a href="#">unity</a>
        </li>
        {/* <li className='ml-10 bg-neutral-200 py-1 px-2 rounded-[5px]'><a href='#'><GiCeilingLight size='22' color='9E5CF2'/></a></li> */}
        <img
          src="icons/light-dot.svg"
          width="32"
          className="bg-neutral-200 rounded-[5px]"
        />
        <li className="bg-neutral-200 py-1 px-2 rounded-[5px]">
          <a href="#">ui & Ux</a>
        </li>
        <li className="bg-neutral-200 py-1 px-2 rounded-[5px]">
          <a href="#">vector</a>
        </li>
        <img
          src="icons/video-dot.svg"
          width="32"
          className="bg-neutral-200 rounded-[5px]"
        />
        {/* <li className='ml-10 bg-red-50 py-1 px-2'><a href='#'><BsCameraVideo size='22' color='FF3C31'/></a></li> */}
        <li className="bg-neutral-200 py-1 px-2 rounded-[5px]">
          <a href="#">after effects</a>
        </li>
        <li className="bg-neutral-200 py-1 px-2 rounded-[5px]">
          <a href="#">lightroom</a>
        </li>
        <li className="bg-neutral-200 py-1 px-2 rounded-[5px]">
          <a href="#">photography</a>
        </li>
        <li className="hidden lg:contents">
          <a href="#" className="">
            <IoIosArrowForward
              size="20"
              className="mt-[4px] mr-[8px] arrow rounded-[50%] hover:bg-neutral-300 p-[2px]"
            />
          </a>
        </li>
      </ul>
      <div className="lg:hidden arrow-right absolute h-full top-0 flex items-center justify-end w-[100px] right-0">
        <IoIosArrowForward size="20" />
      </div>
    </div>
  );
}

export default Slider;
