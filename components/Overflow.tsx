import React from "react";
import Image from "next/image";

export default function Overflow() {
  return (
    <div className="absolute top-[450px] left-[27px] hidden xl:flex">
      <Image alt="dotted" height="20" src="icons/dotted-arrow.svg" width="60" />
    </div>
  );
}
