import React from "react";

function Newsletter() {
  return (
    <>
      <div className="w-full border border-green-700 mt-[80px] pr-20 relative hidden xl:grid">
        <div className="absolute left-[84px] top-12 ">
          <h1 className="text-zinc-950 text-[26px] font-black capitalize leading-[50px]">
            Find out about the latest courses with the
          </h1>
          <h1 className="text-zinc-950 text-[26px] font-black capitalize">
            <span className="text-indigo-500 text-[26px] font-black capitalize">
              academy
            </span>{" "}
            newsletter
          </h1>
        </div>
        <img src="images/news-background.svg" />
        <div className="absolute right-[194px] top-[70px] w-[306px] py-2 px-6 bg-white rounded-xl shadow border border-zinc-100 justify-start items-center gap-4 inline-flex">
          <input
            type="text"
            placeholder="Email Address..."
            className="outline-none w-[286px] text-zinc-950 text-opacity-25 text-[13px] font-medium "
          />
          <button className=" hover:scale-90 ease-in-out duration-300 text-center cursor-pointer text-white text-[12px] uppercase font-medium leading-tight bg-zinc-950 py-[6px] px-[14px] rounded-[8px] justify-start items-center gap-2 flex">
            Submit
          </button>
        </div>
      </div>

      {/* ------------------Mobile view------------------ */}
      <div className='xl:hidden'>
        <div className=" bg-[#F6F7FE] w-full h-[220px] mt-[60px] px-3 text-center flex justify-center items-center">
          <h1 className="text-zinc-950 text-[26px] font-black capitalize leading-[40px]">
            Find out about the latest courses with the
            <span className="text-indigo-500 text-[26px] font-black capitalize">
              {" "}
              academy
            </span>{" "}
            newsletter
          </h1>
        </div>
        <div className="bg-[#5A69F2] w-full h-[90px] flex justify-center items-center">
          <div className="w-[320px] py-2 px-6 bg-white rounded-xl shadow border border-zinc-100 justify-start items-center gap-4 inline-flex">
            <input
              type="text"
              placeholder="Email Address..."
              className="outline-none w-[286px] text-zinc-950 text-opacity-25 text-[13px] font-medium "
            />
            <button className="hover:scale-90 ease-in-out duration-300 text-center cursor-pointer text-white text-[12px] uppercase font-medium leading-tight bg-zinc-950 py-[6px] px-[14px] rounded-[8px] justify-start items-center gap-2 flex">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
