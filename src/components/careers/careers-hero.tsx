import React from "react";
import LogoLPS from "../icons/lps-logo";
import { Button } from "../common/button";
import CareersImageGrid from "./career-image-grid";

interface ServiceInnerProps {
  heading?: string;
  bottom?: boolean
}

function CareersHero({ heading, bottom = true }: ServiceInnerProps) {
  return (
    <div className={`bg-[url('/home/Hero.png')] bg-center bg-cover ${bottom ? 'min-h-screen' : 'min-h-96'}`}>
      <div className="2xl:max-w-[1700px] mx-auto w-[95%] ">
        {/* Top Left LPS Logo */}
        <div className="pt-4 ">
          <LogoLPS />
        </div>

        <div className="mt-20 flex flex-col items-start -space-y-8">
          {heading ? <h1 className="text-[80px] font-bold gradient-text">{heading}</h1> : <>
            <h1 className="text-[65px] font-bold">CAREERS WITH</h1>{" "}
            <span className="text-[65px] font-bold">
              <span className="text-black">— </span> <span className="gradient-text">LPS BRANDS</span>
            </span>
          </>}
        </div>
        {bottom && <div className="flex flex-col items-start gap-4">
          <p className="text-lg font-['Exo'] leading-relaxed ]">
            Looking for a career that’s all about making, shaping, and
            celebrating the extraordinary?
          </p>
          <p className="text-lg font-['Exo'] leading-relaxed">
            Then you’re home!
          </p>
          <Button text="Join Our Team" bg="bg-black" />
        </div>}
        {bottom && <CareersImageGrid />}
      </div>
    </div>
  );
}

export default CareersHero;
