"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  textColor: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: "Jollibee",
    description:
      "We took the measured approach of balancing the community equity for the brand's existing assets like Motor City and yet, enabled its foray in the ever-changing real estate space of Dubai.",
    image: "/our-industry/4.png",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "Coffee Planet",
    description:
      "Through seamlessly integrated solutions, we strengthened Wasl’s brand identity, elevated engagement, and solidified its position as a leading real estate and lifestyle brand.",
    image: "/our-industry/5.png",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "Jollibee",
    description:
      "We took the measured approach of balancing the community equity for the brand's existing assets like Motor City and yet, enabled its foray in the ever-changing real estate space of Dubai.",
    image: "/our-industry/4.png",
    textColor: "text-white",
  },
  {
    id: 4,
    title: "Coffee Planet",
    description:
      "Through seamlessly integrated solutions, we strengthened Wasl’s brand identity, elevated engagement, and solidified its position as a leading real estate and lifestyle brand.",
    image: "/our-industry/5.png",
    textColor: "text-white",
  },
];

const SecondSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 2;
  const maxIndex = Math.ceil(cards.length / cardsPerView) - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-20 bg-[#101820] overflow-hidden">
      <div className="w-[90%] mx-auto 2xl:max-w-[1740px]">
        <h3 className='text-white text-[64px] font-["Exo"] font-bold'>
          A Display of Featured Works
        </h3>
        <p className='text-[#FFFFFF] font-["Exo"] text-[20px] max-w-[45%] font-light'>
          A curated selection of standout developments that reflect our
          commitment to design, innovation, and excellence in Goverment
        </p>
      </div>
      <div className="w-[90%] mx-auto 2xl:max-w-[1740px] mt-14 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="min-w-[49%] mx-auto"
              style={{
                display: Math.floor(index / cardsPerView) === currentIndex || 
                        Math.floor((index - 1) / cardsPerView) === currentIndex 
                        ? 'block' : 'block'
              }}
            >
              <div className="rounded-2xl h-full">
                <div className="relative">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={1000}
                    height={200}
                    className="object-contain h-full w-full"
                  />
                </div>
                <div className="">
                  <h4
                    className={`text-[36px] my-4 font-medium mb-3 ${card.textColor}`}
                  >
                    {card.title}
                  </h4>
                  <p
                    className={`text-[22px] leading-normal font-normal max-w-[80%] ${card.textColor} opacity-90`}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;