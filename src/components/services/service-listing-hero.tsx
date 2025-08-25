import React from "react";
import LogoLPS from "../icons/lps-logo";
import Image from "next/image";

interface ServiceInnerProps {
  heading?: string;
  highlight?: string;
  bottom?: boolean;
  text?: string;
  button?: boolean;
  image?: "single" | "grid";
  careers?: boolean;
}

function ServiceListingHero({
  text,
}: ServiceInnerProps) {
  return (
    <div className={`bg-[url('/home/Hero.png')] bg-center bg-cover `}>
      <div className={`2xl:max-w-[1700px] mx-auto  w-[90%]`}>
        <div className="pt-4">
          <LogoLPS />
        </div>

        {/* Heading */}
        <div className="mt-20 flex flex-col items-start -space-y-8">
          <Image
            src={`/services/service-name.gif`}
            width={500}
            height={1000}
            alt="Careers"
            className="w-"
          />
        </div>
     
          <div className="flex flex-col items-start gap-4 mt-4 max-w-[65%] 2xl:max-w-[900px] py-10 pb-16">
            <h1
              className="text-xl font-medium font-['Exo'] leading-tight"
              
            >{text}</h1>
          </div>
      </div>
    </div>
  );
}

export default ServiceListingHero;
