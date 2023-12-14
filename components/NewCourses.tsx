"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { fetchBooks } from "../redux/bookSlice";
import ReactPaginate from "react-paginate";

function NewCourses() {
  const { bookData } = useSelector((state: RootState) => state.book);
  const dispatch: AppDispatch = useDispatch();
  const data = bookData;

  //-----Pagination States------
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  //----Pagination Function-----
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    setItemOffset(newOffset);
  };

  //----Pagination effect------
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  console.log(bookData);
  return (
    <>
      <div className="flex justify-between items-center mt-[60px]">
        <div className="flex justify-center items-center px-1 xl:px-2">
          <GoDotFill size="5" color="purple" className="mt-[3px]" />{" "}
          <p className="text-zinc-950 text-[16px] font-semibold uppercase ml-[6px]">
            New Courses(Book)
          </p>
        </div>
        <ul className="text-[12px] cursor-pointer justify-center items-center hidden md:flex">
          <li className="mx-[2px] px-3 py-[6px] font-medium inline-flex bg-neutral-100 rounded-[10px] justify-center items-center capitalize text-zinc-950">
            All course
          </li>
          <li className="mx-[2px] hover:bg-neutral-100 hover:rounded-[10px] px-3 py-[6px] font-medium">
            Design
          </li>
          <li className="mx-[2px] hover:bg-neutral-100 hover:rounded-[10px] px-3 py-[6px] font-medium">
            Development
          </li>
          <li className="mx-[2px] hover:bg-neutral-100 hover:rounded-[10px] px-3 py-[6px] font-medium">
            Photography
          </li>
          <li className="mx-[2px] hover:bg-neutral-100 hover:rounded-[10px] px-3 py-[6px] font-medium">
            Music
          </li>
          <li className="bg-neutral-100 rounded-[5px] px-2 py-[6px]">
            {" "}
            <img src="icons/funnel.svg" className="" width="15" />{" "}
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-[30px] w-[100%] text-zinc-950 font-medium capitalize text-sm">
        {currentItems &&
          currentItems?.map((item: any, index: any) => (
            <div
              className="bg-neutral-50 w-[100%] pt-[8px] pb-[20px] px-[8px] rounded-[5px] leading-[22px] 
              "
              key={index}
            >
              <Image
                alt="cover"
                src={item.cover_image}
                width="100"
                height="20"
                className="w-[100%] rounded-[5px]"
              />

              <p className="text-zinc-950 text-[16px] font-bold capitalize">
                Author:{" "}
                <span className="text-[13px] font-medium">{item.author}</span>
              </p>
              <p className="text-zinc-950 text-[16px]] font-bold capitalize">
                Title:{" "}
                <span className="text-[13px] font-medium">{item.title}</span>
              </p>
              <p className="text-zinc-950 text-[16px] font-bold capitalize">
                Desc:{" "}
                <span className="text-[13px] font-medium">
                  {item.description}
                </span>
              </p>
              <p className="text-zinc-950 text-[16px] font-bold capitalize">
                Year:{" "}
                <span className="text-[13px] font-medium">
                  {item.publication_year}
                </span>
              </p>
              <p className="text-zinc-950 text-[16px] font-bold capitalize">
                Book Id:{" "}
                <span className="text-[13px] font-medium"> {item.id}</span>
              </p>
              <p className="text-zinc-950 text-[16px] font-bold capitalize">
                Genre:{" "}
                <span className="text-[13px] font-medium">{item.genre[0]}</span>
              </p>
              <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
                <div className="flex justify-center items-center">
                  <Image
                    alt="lesson"
                    height="20"
                    src="icons/lesson.svg"
                    width="13"
                  />
                  <p className="ml-[4px] text-[12px]">lesson : 6</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    alt="student"
                    height="12"
                    src="icons/student.svg"
                    width="13"
                  />
                  <p className="ml-[4px] text-[12px]">Student : 168</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image alt="cup" height="20" src="icons/cup.svg" width="16" />
                  <p className="ml-[4px] text-[12px]">Beginner</p>
                </div>
              </div>
              <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
                <div className="hover:bg-zinc-700 w-[70px] sm:w-[110px] pl-[10px] cursor-pointer py-[6px] bg-zinc-950 text-white text-[13px] rounded-[10px] justify-center items-center inline-flex">
                  start <span className="sm:contents hidden">course</span>
                  <MdOutlineKeyboardArrowRight
                    className="ml-0.5 mt-1"
                    size="20"
                  />
                </div>
                <img src="icons/star-four.svg" width="30" />
              </div>
            </div>
          ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page"
        nextLinkClassName="page"
        activeLinkClassName="page-active"
        breakLinkClassName="break"
      />
    </>
  );
}

export default NewCourses;










//------------Initial structure--------------
{
  /* <div>
        <div className="flex justify-between items-center mt-[60px]">
          <div className="flex justify-center items-center px-1 xl:px-2">
            <GoDotFill size="5" color="purple" className="mt-[3px]" />{" "}
            <p className="text-zinc-950 text-[16px] font-semibold uppercase ml-[6px]">
              New Courses(Book)
            </p>
          </div>
          <ul className="text-[12px] cursor-pointer justify-center items-center hidden md:flex">
            <li className="mx-[2px] px-3 py-[6px] font-medium inline-flex bg-neutral-100 rounded-[10px] justify-center items-center capitalize text-zinc-950">
              All course
            </li>
            <li className="mx-[2px] hover:bg-neutral-100 hover:rounded-[10px] px-3 py-[6px] font-medium">
              Design
            </li>
            <li className="mx-[2px] hover:bg-neutral-100 hover:rounded-[10px] px-3 py-[6px] font-medium">
              Development
            </li>
            <li className="mx-[2px] hover:bg-neutral-100 hover:rounded-[10px] px-3 py-[6px] font-medium">
              Photography
            </li>
            <li className="mx-[2px] hover:bg-neutral-100 hover:rounded-[10px] px-3 py-[6px] font-medium">
              Music
            </li>
            <li className="bg-neutral-100 rounded-[5px] px-2 py-[6px]">
              {" "}
              <img src="icons/funnel.svg" className="" width="15" />{" "}
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[30px] w-[100%] text-zinc-950 font-medium capitalize text-sm">
          <div className="bg-neutral-50 w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
            <img
              src="images/first.svg"
              width="200"
              className="w-[100%] rounded-[5px]"
            />
            <p className="text-zinc-950 text-[13px] font-medium capitalize">
              Learn Figma- uI/uX Design essential training
            </p>
            <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
              <div className="flex justify-center items-center">
                <img src="icons/lesson.svg" width="13" />
                <p className="ml-[4px] text-[12px]">lesson : 6</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/student.svg" width="13" />
                <p className="ml-[4px] text-[12px]">Student : 168</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/cup.svg" width="16" />
                <p className="ml-[4px] text-[12px]">Beginner</p>
              </div>
            </div>
            <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
              <div className="hover:bg-zinc-700 w-[70px] sm:w-[120px] pl-[10px] cursor-pointer py-[6px] bg-zinc-950 text-white text-sm rounded-[10px] justify-center items-center inline-flex">
                start <span className="sm:contents hidden">course</span>
                <MdOutlineKeyboardArrowRight
                  className="ml-0.5 mt-1"
                  size="20"
                />
              </div>
              <img src="icons/star-four.svg" width="30" />
            </div>
          </div>
          <div className="bg-neutral-50  w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
            <img
              src="images/second.svg"
              width="200"
              className="w-[100%] rounded-[5px]"
            />
            <p className="text-zinc-950 text-[13px] font-medium capitalize">
              Learn Figma- uI/uX Design essential training
            </p>
            <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
              <div className="flex justify-center items-center">
                <img src="icons/lesson.svg" width="13" />
                <p className="ml-[4px] text-[12px]">lesson : 6</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/student.svg" width="13" />
                <p className="ml-[4px] text-[12px]">Student : 168</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/cup.svg" width="16" />
                <p className="ml-[4px] text-[12px]">Beginner</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-[18px] flex-wrap">
              <div className="hover:bg-zinc-700 w-[70px] sm:w-[110px] pl-[10px] cursor-pointer py-[6px] bg-zinc-950 text-white text-[13px] rounded-[10px] justify-center items-center inline-flex">
                start <span className="sm:contents hidden">course</span>
                <MdOutlineKeyboardArrowRight
                  className="ml-0.5 mt-1"
                  size="20"
                />
              </div>
              <img src="icons/star-three.svg" width="30" />
            </div>
          </div>
          <div className="bg-neutral-50  w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
            <img
              src="images/third.svg"
              width="200"
              className="w-[100%] rounded-[5px]"
            />
            <p className="text-zinc-950 text-[13px] font-medium capitalize">
              Learn Figma- uI/uX Design essential training
            </p>
            <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
              <div className="flex justify-center items-center">
                <img src="icons/lesson.svg" width="13" />
                <p className="ml-[4px] text-[12px]">lesson : 6</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/student.svg" width="13" />
                <p className="ml-[4px] text-[12px]">Student : 168</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/cup.svg" width="16" />
                <p className="ml-[4px] text-[12px]">Beginner</p>
              </div>
            </div>
            <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
              <div className="hover:bg-zinc-700 w-[70px] sm:w-[110px] pl-[10px] cursor-pointer py-[6px] bg-zinc-950 text-white text-[13px] rounded-[10px] justify-center items-center inline-flex">
                start <span className="sm:contents hidden">course</span>
                <MdOutlineKeyboardArrowRight
                  className="ml-0.5 mt-1"
                  size="20"
                />
              </div>
              <img src="icons/star-five.svg" width="30" />
            </div>
          </div>
          <div className="bg-neutral-50  w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
            <img
              src="images/fourth.svg"
              width="200"
              className="w-[100%] rounded-[5px]"
            />
            <p className="text-zinc-950 text-[13px] font-medium capitalize">
              Learn Figma- uI/uX Design essential training
            </p>
            <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
              <div className="flex justify-center items-center">
                <img src="icons/lesson.svg" width="13" />
                <p className="ml-[4px] text-[12px]">lesson : 6</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/student.svg" width="13" />
                <p className="ml-[4px] text-[12px]">Student : 168</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/cup.svg" width="16" />
                <p className="ml-[4px] text-[12px]">Beginner</p>
              </div>
            </div>
            <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
              <div className="hover:bg-zinc-700 w-[70px] sm:w-[110px] pl-[10px] cursor-pointer py-[6px] bg-zinc-950 text-white text-[13px] rounded-[10px] justify-center items-center inline-flex">
                start <span className="sm:contents hidden">course</span>
                <MdOutlineKeyboardArrowRight
                  className="ml-0.5 mt-1"
                  size="20"
                />
              </div>
              <img src="icons/star-two.svg" width="30" />
            </div>
          </div>
          <div className="bg-neutral-50  w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
            <img
              src="images/fifth.svg"
              width="200"
              className="w-[100%] rounded-[5px]"
            />
            <p className="text-zinc-950 text-[13px] font-medium capitalize">
              Learn Figma- uI/uX Design essential training
            </p>
            <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
              <div className="flex justify-center items-center">
                <img src="icons/lesson.svg" width="13" />
                <p className="ml-[4px] text-[12px]">lesson : 6</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/student.svg" width="13" />
                <p className="ml-[4px] text-[12px]">Student : 168</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/cup.svg" width="16" />
                <p className="ml-[4px] text-[12px]">Beginner</p>
              </div>
            </div>
            <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
              <div className="hover:bg-zinc-700 w-[70px] sm:w-[110px] pl-[10px] cursor-pointer py-[6px] bg-zinc-950 text-white text-[13px] rounded-[10px] justify-center items-center inline-flex">
                start <span className="sm:contents hidden">course</span>
                <MdOutlineKeyboardArrowRight
                  className="ml-0.5 mt-1"
                  size="20"
                />
              </div>
              <img src="icons/star-five.svg" width="30" />
            </div>
          </div>
          <div className="bg-neutral-50  w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
            <img
              src="images/sixth.svg"
              width="200"
              className="w-[100%] rounded-[5px]"
            />
            <p className="text-zinc-950 text-[13px] font-medium capitalize">
              Learn Figma- uI/uX Design essential training
            </p>
            <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
              <div className="flex justify-center items-center">
                <img src="icons/lesson.svg" width="13" />
                <p className="ml-[4px] text-[12px]">lesson : 6</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/student.svg" width="13" />
                <p className="ml-[4px] text-[12px]">Student : 168</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/cup.svg" width="16" />
                <p className="ml-[4px] text-[12px]">Beginner</p>
              </div>
            </div>
            <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
              <div className="hover:bg-zinc-700 w-[70px] sm:w-[110px] pl-[10px] cursor-pointer py-[6px] bg-zinc-950 text-white text-[13px] rounded-[10px] justify-center items-center inline-flex">
                start <span className="sm:contents hidden">course</span>
                <MdOutlineKeyboardArrowRight
                  className="ml-0.5 mt-1"
                  size="20"
                />
              </div>
              <img src="icons/star-one.svg" width="30" />
            </div>
          </div>
          <div className="bg-neutral-50  w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
            <img
              src="images/seventh.svg"
              width="200"
              className="w-[100%] rounded-[5px]"
            />
            <p className="text-zinc-950 text-[13px] font-medium capitalize">
              Learn Figma- uI/uX Design essential training
            </p>
            <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
              <div className="flex justify-center items-center">
                <img src="icons/lesson.svg" width="13" />
                <p className="ml-[4px] text-[12px]">lesson : 6</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/student.svg" width="13" />
                <p className="ml-[4px] text-[12px]">Student : 168</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/cup.svg" width="16" />
                <p className="ml-[4px] text-[12px]">Beginner</p>
              </div>
            </div>
            <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
              <div className="hover:bg-zinc-700 w-[70px] sm:w-[110px] pl-[10px] cursor-pointer py-[6px] bg-zinc-950 text-white text-[13px] rounded-[10px] justify-center items-center inline-flex">
                start <span className="sm:contents hidden">course</span>
                <MdOutlineKeyboardArrowRight
                  className="ml-0.5 mt-1"
                  size="20"
                />
              </div>
              <img src="icons/star-three.svg" width="30" />
            </div>
          </div>
          <div className="bg-neutral-50  w-full pt-[8px] pb-[20px] px-[8px] rounded-[5px] ">
            <img
              src="images/eighth.svg"
              width="200"
              className="w-[100%] rounded-[5px]"
            />
            <p className="text-zinc-950 text-[13px] font-medium capitalize">
              Learn Figma- uI/uX Design essential training
            </p>
            <div className="flex justify-between mt-4 flex-wrap gap-[1px] text-zinc-950 text-opacity-75 text-[12px] font-medium capitalize">
              <div className="flex justify-center items-center">
                <img src="icons/lesson.svg" width="13" />
                <p className="ml-[4px] text-[12px]">lesson : 6</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/student.svg" width="13" />
                <p className="ml-[4px] text-[12px]">Student : 168</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="icons/cup.svg" width="16" />
                <p className="ml-[4px] text-[12px]">Beginner</p>
              </div>
            </div>
            <div className="flex justify-between text-sm items-center mt-[18px] flex-wrap">
              <div className="hover:bg-zinc-700 w-[70px] sm:w-[110px] pl-[10px] cursor-pointer py-[6px] bg-zinc-950 text-white text-[13px] rounded-[10px] justify-center items-center inline-flex">
                start <span className="sm:contents hidden">course</span>
                <MdOutlineKeyboardArrowRight
                  className="ml-0.5 mt-1"
                  size="20"
                />
              </div>
              <img src="icons/star-four.svg" width="30" />
            </div>
          </div>
        </div>
      </div> */
}
