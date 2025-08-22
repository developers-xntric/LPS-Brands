import React from "react";
import LogoLPS from "../icons/lps-logo";
import { Button } from "../common/button";
import CareersImageGrid from "./career-image-grid";

interface ServiceInnerProps {
  heading?: string;
  highlight?: string;
  bottom?: boolean;
  text?: string;
  button?: boolean;
  image?: "single" | "grid";
  careers?: boolean;
}

function CareersHero({ heading, highlight, bottom = true, text, button, image = "grid", careers = false }: ServiceInnerProps) {
  const renderHeading = () => {
    if (!heading) {
      return (
        <>
          <h1 className="text-[65px] font-bold">CAREERS WITH</h1>
          <span className="text-[65px] font-bold">
            <span className="text-black">— </span>
            <span className="gradient-text">LPS BRANDS</span>
          </span>
        </>
      );
    }

    if (highlight && heading.includes(highlight)) {
      const parts = heading.split(new RegExp(`(${highlight})`, "gi"));
      return (
        <h1 className="text-[75px] font-bold uppercase max-w-[70%] leading-[80px]">
          {parts.map((part, i) =>
            part.toLowerCase() === highlight.toLowerCase() ? (
              <span key={i} className="gradient-text">
                {part}
              </span>
            ) : (
              part
            )
          )}
        </h1>
      );
    }

    return <h1 className="text-[80px] font-bold">{heading}</h1>;
  };

  return (
    <div
      className={`bg-[url('/home/Hero.png')] bg-center bg-cover ${bottom ? "" : "pb-32"
        }`}
    >
      <div className="2xl:max-w-[1700px] mx-auto w-[90%] ">
        {/* Top Left LPS Logo */}
        <div className="pt-4">
          <LogoLPS />
        </div>

        {/* Heading */}
        <div className="mt-20 flex flex-col items-start -space-y-8">
          {renderHeading()}
        </div>
        {(text && !bottom) && <div className="flex flex-col items-start gap-4 mt-4 max-w-[65%] py-10">
          <p className="text-xl font-medium font-['Exo'] leading-tight">
            {text}
          </p>
        </div>}
        {/* Bottom Section */}
        {bottom && (
          <div className="flex flex-col items-start gap-4 mt-4 max-w-[65%]">
            <p className="text-xl font-normal font-['Exo'] leading-relaxed">
              {text ? text : "Looking for a career that’s all about making shaping, and celebrating the extraordinary?"}
            </p>
            {button && <>
              <p className="text-lg font-['Exo'] leading-relaxed">Then you’re home!</p>
              <Button text="Join Our Team" bg="bg-black" />
            </>}
          </div>
        )}

        {bottom && <CareersImageGrid image={image} />}
      </div>
    </div>
  );
}

export default CareersHero;
