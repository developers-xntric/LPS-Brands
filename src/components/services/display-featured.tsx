"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../common/button";

interface PortfolioItem {
  id: number;
  frontImage: string;
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, frontImage: "/services/flip-card-bg.webp" },
  { id: 2, frontImage: "/services/flip-card-bg.webp" },
  { id: 3, frontImage: "/services/flip-card-bg.webp" },
  { id: 4, frontImage: "/services/flip-card-bg.webp" },
  { id: 5, frontImage: "/services/flip-card-bg.webp" },
  { id: 6, frontImage: "/services/flip-card-bg.webp" },
  { id: 7, frontImage: "/services/flip-card-bg.webp" },
  { id: 8, frontImage: "/services/flip-card-bg.webp" },
  { id: 8, frontImage: "/services/flip-card-bg.webp" },
  { id: 8, frontImage: "/services/flip-card-bg.webp" },
];

export default function DisplayFeatured() {
  const cardsPerView = 6; // show 3 cards at a time
  const totalItems = portfolioItems.length;
  const maxIndex = Math.max(0, totalItems - cardsPerView); // last *valid* starting index

  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay (loops back to start after the last full view)
 useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 2)); // Fixed: reset to 0 and increment by 1
  }, 3000);
  return () => clearInterval(interval);
}, [maxIndex]);

  return (
    <section className="bg-[#101820] text-white py-16 px-6 lg:px-8 overflow-hidden">
      <div className="2xl:max-w-[1740px] mx-auto w-[93%]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="lg:max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              A Display of Our Work
            </h2>
            <p className="text-white font-medium leading-7 text-md font-['Exo'] max-w-4xl mx-auto">
              Our impact speaks through the leaders we’ve shaped. From Fortune
              500 executives to disruptive founders, public figures to policy
              shapers, our leadership branding work has turned personal stories
              into powerful movements.
            </p>
          </div>
          <Button text="View All Work" />
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
        <div className="absolute top-[-55px] inset-0 w-full h-96 flex items-center rounded-3xl overflow-hidden bg-[#c5c5c5] [backface-visibility:hidden]"
             style={{ transform: "rotateY(180deg)" }}>
          <div className="p-6 flex flex-col items-center justify-center">
            <h3 className="text-[26px] font-bold text-secondary mb-2">
              Skechers - Hajj Campaign
            </h3>
            <p className="text-secondary font-medium text-center leading-2 text-sm font-['Exo'] max-w-4xl mx-auto">
              We collaborated with Skechers to create a culturally insightful
              film specifically for their Hajj campaign. This project aimed to
              connect deeply with the Arabic audience by focusing on culturally
              relevant storytelling and visuals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}