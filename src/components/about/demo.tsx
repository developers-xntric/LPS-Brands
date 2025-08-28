"use client";
import { Home_Section_6_icons } from "@/data/icons";
import Image from "next/image";
import { useRef } from "react";

function IconsSection() {
  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);

  return (
    <div className="relative w-full bg-cover bg-center font-['futuru'] bg-no-repeat flex flex-col md:pb-10 md:pt-10">
      <div className="blur-[100px]">
        <Image
          src="/HomePage/logo-bg.svg"
          alt="Client Background"
          width={1020}
          height={1080}
          className="absolute -top-10 left-1/2 -translate-x-1/2 -z-20"
          priority
        />
      </div>

      <div className="relative -space-y-20 md:space-y-0">
        <div className="carousel-container" ref={carouselRef1}>
          <div className="carousel-track-left perspective: left;">
            {[...Home_Section_6_icons, ...Home_Section_6_icons].map(
              (src, index) => (
                <div
                  key={`left-${index}`}
                  className="carousel-item flex items-center justify-center h-28 md:h-36"
                >
                  <Image
                    src={src}
                    alt={`Client Logo ${index + 1}`}
                    className="w-[100px] h-[100px] sm:w-[70px] sm:h-[70px] md:w-[180px] md:h-[180px] object-contain opacity-[0.9]"
                    width={180}
                    height={180}
                    priority
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="carousel-container" ref={carouselRef2}>
          <div className="carousel-track-right">
            {[...Home_Section_6_icons, ...Home_Section_6_icons].map(
              (src, index) => (
                <div
                  key={`right-${index}`}
                  className="carousel-item flex items-center justify-center h-28 md:h-36"
                >
                  <Image
                    src={src}
                    alt={`Client Logo ${index + 1}`}
                    className="w-[100px] h-[100px] sm:w-[70px] sm:h-[70px] md:w-[180px] md:h-[180px] object-contain opacity-[0.9]"
                    width={180}
                    height={180}
                    priority
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .carousel-container {
          width: 100%;
          overflow-x: hidden;
          overflow-y: hidden; /* Prevent vertical scroll */
          position: relative;
          margin-bottom: 20px;
          min-height: 120px; /* Consistent height */
          pointer-events: none; /* Prevent scroll/hover interference */
        }

        .carousel-track-left,
        .carousel-track-right {
          display: flex;
          position: absolute; /* Lock tracks in place */
          width: 120%; /* Ensure enough content for infinite scroll */
          will-change: transform; /* Optimize for GPU */
        }

        .carousel-track-left {
          animation: scrollLeft 5s linear infinite;
        }

        .carousel-track-right {
          animation: scrollRight 5s linear infinite;
        }

        .carousel-item {
          flex: 0 0 auto;
          width: calc(100% / 3);
          min-height: 120px; /* Consistent height */
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: auto; /* Enable interaction for items */
        }

        .carousel-item img {
          aspect-ratio: 1 / 1; /* Maintain aspect ratio */
          object-fit: contain;
        }

        /* Prevent hover-induced shifts */
        .carousel-item:hover {
          transform: none; /* Explicitly prevent scaling or movement */
        }

        @media (min-width: 768px) {
          .carousel-item {
            width: calc(100% / 4);
          }
        }
        @media (min-width: 320px) {
          .carousel-track-left,
          .carousel-track-right {
            width: 110%;
          }
        }

        @media (min-width: 1024px) {
          .carousel-item {
            width: calc(110% / 6);
          }
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .carousel-container::-webkit-scrollbar {
          display: none;
        }
        .carousel-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default IconsSection;
