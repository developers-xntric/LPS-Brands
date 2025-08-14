import Image from "next/image";
import React from "react";

function CareersImageGrid() {
  return (
    <div className="2xl:max-w-[1700px] w-[95%] mx-auto relative 2xl:top-72 top-52">
      <div className="grid grid-cols-3 gap-4 ">
        <div className="relative">
          <Image
            src={"/careers/careers-3.webp"}
            width={1500}
            height={1500}
            alt="Team Working"
            className="rounded-tr-[70px]"
          />
        </div>
        <div className="relative">
          <Image
            src={"/careers/careers-1.webp"}
            width={1500}
            height={1500}
            alt="Team Working"
            className="rounded-t-[70px]"
          />
        </div>
        <div className="relative">
          <Image
            src={"/careers/careers-2.webp"}
            width={1500}
            height={1500}
            alt="Team Working"
            className="rounded-tl-[70px]"
          />
        </div>
      </div>
    </div>
  );
}

export default CareersImageGrid;
