import React from "react";
import LogoLPS from "../icons/lps-logo";
import { Button } from "../common/button";
import CareersImageGrid from "./career-image-grid";

function CareersHero() {
  return (
    <div className="bg-[url('/home/Hero.png')] bg-center bg-cover min-h-screen ">
      <div className="2xl:max-w-[1700px] mx-auto w-[95%] ">
        {/* Top Left LPS Logo */}
        <div className="pt-4 ">
          <LogoLPS />
        </div>

        <div className="mt-20 flex flex-col items-start -space-y-8">
          <h1 className="text-[65px] font-bold">CAREERS WITH</h1>{" "}
          <span className="gradient-text text-[65px] font-bold">
            LPS BRANDS
          </span>
        </div>
        <div className="flex flex-col items-start gap-4">
          <p className="text-lg font-['Exo'] leading-relaxed ]">
            Looking for a career that’s all about making, shaping, and
            celebrating the extraordinary?
          </p>
          <p className="text-lg font-['Exo'] leading-relaxed">
            Then you’re home!
          </p>
          <Button text="Join Our Team" bg="bg-black" />
        </div>
      </div>
      <CareersImageGrid />
    </div>
  );
}

export default CareersHero;
