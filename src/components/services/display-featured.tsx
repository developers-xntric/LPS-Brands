"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../common/button";

interface PortfolioItem {
  id: number;
  frontImage: string;
  title: string;
  para: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    frontImage: "/work/1.webp",
    title: "A unified brand presence for a unique three-chamber model",
    para: "Recognizing our expertise in corporate communication strategies, Dubai Chambers partnered with us as a strategic communications agency to strengthen its community-focused initiatives across the Middle East.",
  },
  {
    id: 2,
    frontImage: "/work/2.webp",
    title: "Dubai Economy & Tourism",
    para: "We were entrusted as Social Video Partners for Visit Dubai, helping to create a unified brand presence and engaging video content that highlighted Dubai’s unique experiences.",
  },
  {
    id: 3,
    frontImage: "/work/7.webp",
    title: "Coffee Planet",
    para: "As a homegrown specialty coffee brand in the UAE, Coffee Planet wanted to change consumer perceptions and establish itself as the top choice for coffee lovers in the country. The challenge was to reshape brand messaging while maintaining authenticity.",
  },
  {
    id: 4,
    frontImage: "/work/8.webp",
    title: "Delmonte",
    para: "Del Monte aimed to enhance its product visibility across the MENA region, focusing on generating brand awareness and increasing foot traffic to physical retail stores.",
  },
  {
    id: 5,
    frontImage: "/work/6.webp",
    title: "Create Apps by DC",
    para: "Dubai Chamber of Digital Economy launched the \"Create Apps in Dubai\" initiative to establish itself as a leader in digital innovation. The goal was to create a unified brand presence to position Dubai as a global tech hub.",
  },
  {
    id: 6,
    frontImage: "/work/5.webp",
    title: "London Dairy",
    para: "Premium ice cream brand London Dairy wanted to promote its three new flavors while increasing brand recognition. Our team developed a targeted campaign to drive engagement and sales.",
  },
  {
    id: 7,
    frontImage: "/work/4.webp",
    title: "Mentos",
    para: "Mentos sought to create a multinational awareness campaign linking their brand to the FIFA World Cup—without incurring sponsorship costs. The goal was to associate Mentos with the excitement of the global event.",
  },
  {
    id: 8,
    frontImage: "/work/3.webp",
    title: "Dolby",
    para: "As a long-term client, Dolby wanted to explore the potential of in-stream gaming advertisements to boost brand awareness. The challenge was to create a strategic campaign that leveraged gaming platforms effectively.",
  },
  {
    id: 9,
    frontImage: "/work/9.webp",
    title: "Skechers- Hajj Campain",
    para: "We collaborated with Skechers to create a culturally insightful film specifically for their Hajj campaign. This project aimed to connect deeply with the Arabic audience by focusing on culturally relevant storytelling and visuals.",
  },
  {
    id: 10,
    frontImage: "/work/10.webp",
    title: "Skechers- BTS",
    para: "Skechers aimed to create a visually compelling video that not only told a great story but also showcased the brand’s wide range of designs in a captivating way.",
  },
];

export default function DisplayFeatured({ text }: { text?: string }) {
  const cardsPerView = 6;
  const totalItems = portfolioItems.length;
  const maxIndex = Math.max(0, totalItems - cardsPerView);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 2));
    }, 3000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="bg-[#101820] text-white lg:py-16 pt-16 pb-4 lg:px-8 overflow-hidden">
      <div className="2xl:max-w-[1740px] mx-auto w-[93%]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:mb-12">
          <div className="lg:max-w-2xl text-center lg:text-start">
            <h2 className="text-[30px] leading-[32px] lg:text-5xl font-bold mb-6">
              A Display of Our Work
            </h2>
            <p className="text-white font-medium leading-7 mb-10 lg:mb-0 text-md font-['Exo'] max-w-4xl mx-auto">
              {text ||
                "Our impact speaks through the leaders we’ve shaped. From Fortune 500 executives to disruptive founders, public figures to policy shapers, our leadership branding work has turned personal stories into powerful movements."}
            </p>
          </div>
          <Button text="View All Work" center={true} link="/our-work" />
        </div>

        {/* Carousel */}
        <div className="relative py-16">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${(totalItems * 70) / cardsPerView}%`,
              transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
            }}
          >
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="px-2 flex-shrink-0 "
                style={{ flex: `0 0 ${100 / cardsPerView}%` }}
              >
                <FlipCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface FlipCardProps {
  item: PortfolioItem;
}

function FlipCard({ item }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-[400px] max-w-full h-[280px] mx-auto cursor-pointer perspective-[1000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]"
        style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div className="absolute inset-0 w-full h-full rounded- overflow-hidden [backface-visibility:hidden]">
          <Image
            src={item.frontImage}
            alt={`Portfolio ${item.id}`}
            width={300}
            height={300}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Back */}
        <div
          className="absolute top-[-23px] inset-0 w-full h-80 flex items-center rounded-3xl overflow-hidden bg-[#c5c5c5] [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="p-6 flex flex-col items-center justify-center">
            <h3 className="text-[26px] font-bold text-secondary mb-4 lg:max-w-[90%] leading-[26px] mx-auto">
              {item.title}
            </h3>
            <p className="text-secondary font-medium text-center leading-2 text-sm font-['Exo'] max-w-4xl mx-auto">
              {item.para}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
