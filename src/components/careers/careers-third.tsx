"use client";

import { useState, useEffect } from "react";
import Wrapper from "../layout/wrapper";
import Image from "next/image";

export function CareersThird() {
  // Original images
  const images = [
    "/careers/card-1.webp",
    "/careers/card-2.webp",
    "/careers/card-3.webp",
    "/careers/card-4.webp",
    "/careers/card-5.webp",
    "/careers/card-3.webp",
  ];

  // Duplicate images for seamless loop
  const imagePaths = [...images, ...images];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 256; // w-64
  const gap = 16; // gap-4
  const translateX = -(currentIndex * (cardWidth + gap));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // When we’ve scrolled halfway (end of first set), reset without visible jump
  useEffect(() => {
    if (currentIndex >= images.length) {
      setTimeout(() => {
        setCurrentIndex(0);
      }, 500); // slight delay so transition completes
    }
  }, [currentIndex, images.length]);

  return (
    <Wrapper>
      <div className="py-10">
        <div
          className="flex gap-4 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {imagePaths.map((src, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[170px] md:w-fit xl:w-[300px] 2xl:w-[350px] rounded-[20px] md:rounded-[30px] overflow-hidden"
            >
              <Image
                src={src}
                width={500}
                height={500}
                alt={`Career image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
     
    </Wrapper>
  );
}
