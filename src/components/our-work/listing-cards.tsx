import { lists } from "@/data/our-work";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListingCards = () => {
  return (
    <section className="py-16">
      <div className="2xl:max-w-[1740px] w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {lists.map((item, index) => {
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
                    width={500}
                    height={500}
                    className="w-full h-[500px] object-cover"
                  />
                </div>

                <div className="space-y-3 max-w-[95%]">
                  <h3 className="text-[30px] leading-8 font-bold text-gray-900">
                    {item.head}
                  </h3>
                  <p className="text-secondary text-sm 2xl:text-lg leading-relaxed font-['Exo']">
                    {item.para}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ListingCards;
