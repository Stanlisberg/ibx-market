import React from "react";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";

function Footer() {
  return (
    <div className="mt-[60px] mx-2 xl:mt-[90px] sm:mx-[10px] md:mx-[10px] lg:mx-[10px] xl:mx-[80px] p-4 pb-4  bg-neutral-50 rounded-tl-[15px] rounded-tr-[15px] lg:rounded-tl-[40px] lg:rounded-tr-[40px]">
      <div className="justify-between items-center hidden xl:flex">
        <Image
          alt="footer image"
          src="images/footer-para.svg"
          width="940"
          height="20"
        />
        <div className=" text-center flex flex-col justify-center items-center">
          <Image alt="logo image" src="icons/logo.svg" width="60" height="20" />
          <h1 className="text-zinc-950 text-[25px] font-black uppercase">
            Academy
          </h1>
        </div>
      </div>

      {/*---------mobile view-----------*/}
      <div className="xl:hidden">
        <div className=" bg-[#F5F2FA] w-full h-[270px] px-3 text-center flex justify-center items-center rounded-tl-[15px] rounded-tr-[15px]">
          <p className="text-zinc-950 text-[14px] font-medium text-start capitalize leading-[30px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            unde maxime quam, aperiam consequatur mollitia aspernatur. Veniam
            voluptatibus veritatis reiciendis est itaque neque delectus harum
            quos, dolor dolore. Quos animi facilis accusantium
            sapiente,voluptatibus veritatis
          </p>
        </div>
      </div>

      {/*---------Main Footer------------*/}
      <div className="mt-[30px] grid grid-cols-1 lg:grid-cols-12 gap-7 whitespace-nowrap text-[12px]">
        <div className="lg:col-span-4 col-span-12">
          <div className="flex items-center">
            <GoDotFill size="5" color="purple" className="mt-[3px]" />{" "}
            <p className="text-zinc-950 text-[16px] font-semibold uppercase ml-[6px]">
              membership category
            </p>
          </div>
          <div className="">
            <Image
              alt="cert image"
              src="images/certificate.svg"
              className="mt-3"
              width="310"
              height="20"
            />
          </div>
        </div>
        <div className="lg:col-span-2 md:col-span-4 col-span-12">
          <div className="flex items-center">
            <GoDotFill size="5" color="purple" className="mt-[3px]" />{" "}
            <p className="text-zinc-950 text-[16px] font-semibold uppercase ml-[6px]">
              categories
            </p>
          </div>
          <ul className="mt-3 ml-3 text-[13.5px] capitalize text-zinc-950 text-opacity-75">
            <li>
              <a href="#">designing</a>
            </li>
            <li>
              <a href="#">programming</a>
            </li>
            <li>
              <a href="#">graphics</a>
            </li>
            <li>
              <a href="#">front end</a>
            </li>
            <li>
              <a href="#">composition</a>
            </li>
            <li>
              <a href="#">tailoring</a>
            </li>
            <li>
              <a href="#">database</a>
            </li>
            <li>
              <a href="#">sports</a>
            </li>
            <li>
              <a href="#">cooking</a>
            </li>
            <li>
              <a href="#">driving</a>
            </li>
            <li>
              <a href="#">photography</a>
            </li>
            <li>
              <a href="#">camerawork</a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-2 md:col-span-4 col-span-12">
          <div className="flex items-center">
            <GoDotFill size="5" color="purple" className="mt-[3px]" />{" "}
            <p className="text-zinc-950 text-[16px] font-semibold uppercase ml-[6px]">
              quick access
            </p>
          </div>
          <ul className="mt-3 ml-3 text-[13.5px] capitalize text-zinc-950 text-opacity-75">
            <li>
              <a href="#">what we offer</a>
            </li>
            <li>
              <a href="#">careers</a>
            </li>
            <li>
              <a href="#">leadership</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">catalog</a>
            </li>
            <li>
              <a href="#">degree</a>
            </li>
            <li>
              <a href="#">for enterprise</a>
            </li>
            <li>
              <a href="#">for government</a>
            </li>
            <li>
              <a href="#">for campus</a>
            </li>
            <li>
              <a href="#">become a partner</a>
            </li>
            <li>
              <a href="#">terms</a>
            </li>
            <li>
              <a href="#">accesssibility</a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-4">
          <div className=" flex items-center">
            <GoDotFill size="5" color="purple" className="mt-[3px]" />{" "}
            <p className="text-zinc-950 text-[16px] font-semibold uppercase ml-[6px]">
              new comment
            </p>
          </div>
          <div className="mt-3 grid gap-2 capitalize text-stone-700 text-opacity-75">
            <div className="w-full p-[10px] pl-3 bg-neutral-100 rounded-xl flex-col justify-start items-start inline-flex">
              <h1 className="text-stone-700 text-[13px] font-medium capitalize">
                ellsmartx
              </h1>
              <p className="text-[10px]">
                how nice does this look 😍 I feel it should be
                <span className="hidden lg:contents">...</span>{" "}
                <span className="lg:hidden">delicious</span>
              </p>
            </div>
            <div className="w-full p-[10px] pl-3 bg-neutral-100 rounded-xl flex-col justify-start items-start inline-flex">
              <h1 className="text-stone-700 text-[13px] font-medium capitalize">
                cassia
              </h1>
              <p className="text-[10px]">
                Take a rest i&apos;ll cheeer you up again
                <span className="hidden lg:contents">...</span>{" "}
                <span className="lg:hidden">in two next game</span>
              </p>
            </div>
            <div className="w-full p-[10px] pl-3 bg-neutral-100 rounded-xl flex-col justify-start items-start  inline-flex">
              <h1 className="text-stone-700  text-[13px] font-medium capitalize">
                amanda
              </h1>
              <p className="text-[10px]">
                you were stunning today, jan! 💗 great match.
                <span className="hidden lg:contents">...</span>{" "}
                <span className="lg:hidden">👍🏽👍🏽</span>
              </p>
            </div>
            <div className="w-full p-[10px] pl-3 bg-neutral-100 rounded-xl flex-col justify-start items-start inline-flex">
              <h1 className="text-stone-700 text-[13px] font-medium capitalize">
                dennis simonassi
              </h1>
              <p className="text-[10px]">
                It was a great match today Janzi!
                <span className="hidden lg:contents">...</span>{" "}
                <span className="lg:hidden">great😉 De</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-stone-700 text-opacity-75 rounded-[10px] flex flex-col md:justify-between md:flex-row bg-neutral-100 px-3 py-4 mt-9 capitalize text-[12px]">
        <div>Privacy Policy | terms & conditions</div>
        <div>all copyright 2022 &#x00A9; reserved </div>
      </div>
    </div>
  );
}

export default Footer;
