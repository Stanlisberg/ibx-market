"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { GoDotFill } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function TopCourses() {
  return (
    <>
      <div className="mt-[60px] mx-2 xl:mt-[90px] sm:mx-[10px] md:mx-[10px] lg:mx-[10px] xl:mx-[80px]">
        <div className="flex justify-between items-center pl-2 pr-2 xl:pr-0">
          <div className="flex justify-center items-center">
            <GoDotFill size="5" color="purple" className="mt-[3px]" />{" "}
            <p className="text-zinc-950 text-[16px] font-semibold uppercase ml-[6px]">
              Top Courses
            </p>
          </div>
          <div className="hidden lg:flex cursor-pointer">
            <div className="p-2 bg-[#f5f5f5] mr-[14px] rounded-[5px] hover:bg-slate-100">
              <IoIosArrowBack className="" />
            </div>
            <div className="p-2 bg-[#f5f5f5] hover:bg-slate-100 rounded-[5px]">
              <IoIosArrowForward className="" />
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-[30px] w-[100%] text-zinc-950 font-medium capitalize text-sm">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              500: {
                spaceBetween: 15,
                slidesPerView: 2,
              },
              800: {
                spaceBetween: 15,
                slidesPerView: 3,
              },
              1000: {
                spaceBetween: 15,
                slidesPerView: 4,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="bg-neutral-100 w-[100%] pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
                <Image
                  alt="first"
                  src="images/first.svg"
                  width="200"
                  height="0"
                  className="w-[100%] rounded-[5px]"
                />
                <p className="text-zinc-950 text-[16px] lg:text-[13px] font-medium capitalize mt-2">
                  Learn Figma - uI/uX Design essential training
                </p>
                <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
                  <div className="flex justify-center items-center">
                    <Image
                      alt="lesson"
                      height="0"
                      src="icons/lesson.svg"
                      width="13"
                    />
                    <p className="ml-[4px] text-[14px] lg:text-[12px]">
                      lesson : 6
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image
                      alt="student"
                      height="0"
                      src="icons/student.svg"
                      width="13"
                    />
                    <p className="ml-[4px] text-[14px] lg:text-[12px]">
                      Student : 168
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image
                      alt="cup"
                      height="0"
                      src="icons/cup.svg"
                      width="16"
                    />
                    <p className="ml-[4px] text-[14px] lg:text-[12px]">
                      Beginner
                    </p>
                  </div>
                </div>
                <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
                  <button className=" hover:bg-zinc-700 cursor-pointer px-[10px] md:px-[6px] md:py-[8px] py-[6px] bg-zinc-950 text-white text-[13px] rounded-[8px] justify-center items-center flex">
                    <p>
                      Start <span className="sm:contents hidden">Course</span>
                    </p>
                    <MdOutlineKeyboardArrowRight className="ml-0.5" size="20" />
                  </button>
                  <Image
                    alt="four"
                    height="0"
                    src="icons/star-four.svg"
                    width="38"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-neutral-100 w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
                <Image
                  alt="second"
                  height="0"
                  src="images/second.svg"
                  width="200"
                  className="w-[100%] rounded-[5px]"
                />
                <p className="text-zinc-950 text-[16px] lg:text-[13px] font-medium capitalize mt-2">
                  python for beginners - Learn programming
                </p>
                <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
                  <div className="flex justify-center items-center">
                    <Image
                      alt="lesson"
                      height="0"
                      src="icons/lesson.svg"
                      width="13"
                    />
                    <p className="ml-[4px] text-[14px] lg:text-[12px]">
                      lesson : 6
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image
                      alt="student"
                      src="icons/student.svg"
                      height="0"
                      width="13"
                    />
                    <p className="ml-[4px] text-[14px] lg:text-[12px]">
                      Student : 168
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image
                      alt="cup"
                      height="0"
                      src="icons/cup.svg"
                      width="16"
                    />
                    <p className="ml-[4px] text-[14px] lg:text-[12px]">
                      Beginner
                    </p>
                  </div>
                </div>
                <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
                  <button className=" hover:bg-zinc-700 cursor-pointer px-[10px] md:px-[6px] md:py-[8px] py-[6px] bg-zinc-950 text-white text-[13px] rounded-[8px] justify-center items-center flex">
                    <p>
                      Start <span className="sm:contents hidden">Course</span>
                    </p>
                    <MdOutlineKeyboardArrowRight className="ml-0.5" size="20" />
                  </button>
                  <Image
                    alt="four"
                    height="0"
                    src="icons/star-four.svg"
                    width="38"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-neutral-100 w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
                <Image
                  alt="third"
                  height="0"
                  src="images/third.svg"
                  width="200"
                  className="w-[100%] rounded-[5px]"
                />
                <p className="text-zinc-950 text-[16px] lg:text-[13px] font-medium capitalize mt-2">
                  acoustic guiter and elextric guitar. Start course..
                </p>
                <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
                  <div className="flex justify-center items-center">
                    <Image
                      alt="lesson"
                      height="0"
                      src="icons/lesson.svg"
                      width="13"
                    />
                    <p className="ml-[4px] text-[14px] lg:text-[12px]">
                      lesson : 6
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image
                      alt="student"
                      height="0"
                      src="icons/student.svg"
                      width="13"
                    />
                    <p className="ml-[4px] text-[14px] lg:text-[12px]">
                      Student : 168
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image
                      alt="cup"
                      height="0"
                      src="icons/cup.svg"
                      width="16"
                    />
                    <p className="ml-[4px] text-[14px] lg:text-[12px]">
                      Beginner
                    </p>
                  </div>
                </div>
                <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
                  <button className=" hover:bg-zinc-700 cursor-pointer px-[10px] md:px-[6px] md:py-[8px] py-[6px] bg-zinc-950 text-white text-[13px] rounded-[8px] justify-center items-center flex">
                    <p>
                      Start <span className="sm:contents hidden">Course</span>
                    </p>
                    <MdOutlineKeyboardArrowRight className="ml-0.5" size="20" />
                  </button>
                  <Image
                    alt="four"
                    height="0"
                    src="icons/star-four.svg"
                    width="38"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-neutral-100 w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
                <Image
                  alt="fourth"
                  height="0"
                  src="images/fourth.svg"
                  width="200"
                  className="w-[100%] rounded-[5px]"
                />
                <p className="text-zinc-950 text-[16px] lg:text-[13px] font-medium capitalize mt-2">
                  mobile app development with fluter & dart
                </p>
                <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
                  <div className="flex justify-center items-center">
                    <Image
                      alt="lesson"
                      height="0"
                      src="icons/lesson.svg"
                      width="13"
                    />
                    <p className="ml-[4px] text-[14px] lg:text-[12px]">
                      lesson : 6
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image
                      alt="student"
                      height="0"
                      src="icons/student.svg"
                      width="13"
                    />
                    <p className="ml-[4px] text-[14px] lg:text-[12px]">
                      Student : 168
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image
                      alt="cup"
                      height="0"
                      src="icons/cup.svg"
                      width="16"
                    />
                    <p className="ml-[4px] text-[14px] lg:text-[12px]">
                      Beginner
                    </p>
                  </div>
                </div>
                <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
                  <button className=" hover:bg-zinc-700 cursor-pointer px-[10px] md:px-[6px] md:py-[8px] py-[6px] bg-zinc-950 text-white text-[13px] rounded-[8px] justify-center items-center flex">
                    <p>
                      Start <span className="sm:contents hidden">Course</span>
                    </p>
                    <MdOutlineKeyboardArrowRight className="ml-0.5" size="20" />
                  </button>
                  <Image
                    alt="four"
                    height="0"
                    src="icons/star-four.svg"
                    width="38"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default TopCourses;
