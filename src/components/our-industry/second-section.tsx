"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Card {
  img: string;
  head: string;
  para: string;
  link: string;
}

const lists: Card[] = [
  {
    img: "/work/1.webp",
    head: "A unified brand for unique three-chamber model",
    para: "Recognizing our expertise in corporate communication strategies, Dubai Chambers partnered with us as a strategic communications agency to strengthen its community-focused initiatives across the Middle East.",
    link: "/our-work/a-unified-brand-presence-for-a-unique-three-chamber-model",
  },
  {
    img: "/work/2.webp",
    head: "Dubai Economy & Tourism",
    para: "We were entrusted as Social Video Partners for Visit Dubai, helping to create a unified brand presence and engaging video content that highlighted Dubai’s unique experiences.",
    link: "/our-work/dubai-economy-and-tourism",
  },
  {
    img: "/work/7.webp",
    head: "Coffee Planet",
    para: "As a homegrown specialty coffee brand in the UAE, Coffee Planet wanted to change consumer perceptions and establish itself as the top choice for coffee lovers in the country. The challenge was to reshape brand messaging while maintaining authenticity.",
    link: "/our-work/coffee-planet",
  },
  {
    img: "/work/8.webp",
    head: "Delmonte",
    para: "Del Monte aimed to enhance its product visibility across the MENA region, focusing on generating brand awareness and increasing foot traffic to physical retail stores.",
    link: "/our-work/delmonte",
  },
  {
    img: "/work/6.webp",
    head: "Create Apps by DC",
    para: 'Dubai Chamber of Digital Economy launched the "Create Apps in Dubai" initiative to establish itself as a leader in digital innovation. The goal was to create a unified brand presence to position Dubai as a global tech hub.',
    link: "/our-work/create-apps-by-dc",
  },
  {
    img: "/work/5.webp",
    head: "London Dairy",
    para: "Premium ice cream brand London Dairy wanted to promote its three new flavors while increasing brand recognition. Our team developed a targeted campaign to drive engagement and sales.",
    link: "/our-work/london-dairy",
  },
  {
    img: "/work/4.webp",
    head: "Mentos",
    para: "Mentos sought to create a multinational awareness campaign linking their brand to the FIFA World Cup—without incurring sponsorship costs. The goal was to associate Mentos with the excitement of the global event.",
    link: "/our-work/mentos",
  },
  {
    img: "/work/3.webp",
    head: "Dolby",
    para: "As a long-term client, Dolby wanted to explore the potential of in-stream gaming advertisements to boost brand awareness. The challenge was to create a strategic campaign that leveraged gaming platforms effectively.",
    link: "/our-work/dolby",
  },
  {
    img: "/work/9.webp",
    head: "Skechers- Hajj Campain",
    para: "We collaborated with Skechers to create a culturally insightful film specifically for their Hajj campaign. This project aimed to connect deeply with the Arabic audience by focusing on culturally relevant storytelling and visuals.",
    link: "/our-work/skechers-hajj-campaign",
  },
  {
    img: "/work/7.webp",
    head: "Coffee Planet",
    para: "As a homegrown specialty coffee brand in the UAE, Coffee Planet wanted to change consumer perceptions and establish itself as the top choice for coffee lovers in the country. The challenge was to reshape brand messaging while maintaining authenticity.",
    link: "/our-work/coffee-planet",
  },
];

const SecondSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1); // Show 1 card on mobile
      } else {
        setCardsPerView(2); // Show 2 cards on larger screens
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.ceil(lists.length / cardsPerView) - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <div className="py-20 bg-[#101820] overflow-hidden">
      <div className="w-[90%] mx-auto 2xl:max-w-[1740px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="">
            <h3 className="text-white text-[30px] md:text-[45px] 2xl:text-[64px] font-['Exo'] font-bold">
              A Display of Featured Works
            </h3>
            <p className="text-[#FFFFFF] font-['Exo'] 2xl:text-[20px] font-light pt-6 md:pt-0 md:max-w-[600px]">
              A curated selection of standout developments that reflect our
              commitment to design, innovation, and excellence in Government
            </p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button
              onClick={prevSlide}
              className={`bg-white w-11 h-11 md:w-16 md:h-16 text-black flex items-center justify-center rounded-full opacity-70 hover:opacity-100 transition-opacity ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentIndex === 0}
            >
              <ArrowLeft className="w-52" />
            </button>
            <button
              onClick={nextSlide}
              className={`bg-white text-black w-11 h-11 md:w-16 md:h-16 flex items-center justify-center rounded-full opacity-70 hover:opacity-100 transition-opacity ${
                currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentIndex === maxIndex}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[90%] mx-auto 2xl:max-w-[1740px] mt-14 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {lists.map((card, index) => (
            <div
              key={index}
              className={`flex-none w-full md:w-[50%] ${
                cardsPerView === 1 ? "max-w-full" : "max-w-[80%]"
              } px-6`}
            >
              <Link href={card.link} className="rounded-2xl h-full group">
                <div className="relative">
                  <Image
                    src={card.img}
                    alt={card.head}
                    width={1000}
                    height={200}
                    className="object-contain xl:min-h-[400px] w-full rounded-[30px]"
                  />
                </div>
                <div className="mt-8">
                  <h4 className="text-[25px] md:text-[36px] my-4 font-medium mb-3 text-white leading-[36px] lg:leading-[37px]">
                    {card.head}
                  </h4>
                  <p className="font-['Exo'] text-[13px] xl:text-base 2xl:text-[22px] leading-normal xl:leading-[25px] font-light md:max-w-[90%] text-white opacity-90">
                    {card.para}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
