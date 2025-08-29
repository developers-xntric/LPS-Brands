import Image from "next/image";
import React from "react";

function CareersImageGrid({ image,url }: { image: "single" | "grid", url?: string }) {
  return (
    <div className="2xl:max-w-[1700px] w-[90%] md:w-[100%] mx-auto relative 2xl:top-40 top-24 md:top-24">
      {image === "grid" ? <div className="grid md:grid-cols-3 gap-4 ">
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
      </div> : <div className="relative bottom-8 lg:bottom-10 xl:bottom-8 2xl:bottom-20">
        <Image
          src={url || "/work/i1.webp"}
          width={1000}
          height={1000}
          className="w-full lg:h-[800px] object-cover"
          alt="Team Working"
        />
      </div>}
    </div>
  );
}

export default CareersImageGrid;
