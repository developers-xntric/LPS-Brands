import { Industries } from "@/data/industries-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const IndustryListing = () => {
  return (
    <section className="py-16">
      <div className="2xl:max-w-[1740px] w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {Industries.map((item, index) => {
            return (
              <Link
                href={item.link}
                key={index}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br mb-6">
                  <Image
                    src={item.img}
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full h-[250px] lg:h-[500px] object-cover"
                  />
                </div>

                <div className="space-y-3 max-w-[95%]">
                  <h3 className="text-[30px] leading-8 font-bold text-gray-900">
                    {item.head}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryListing;
