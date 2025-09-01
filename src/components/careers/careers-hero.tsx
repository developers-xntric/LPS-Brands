import React from "react";
import LogoLPS from "../icons/lps-logo";
import { Button } from "../common/button";
import CareersImageGrid from "./career-image-grid";
import MobileNavbar from "../layout/mobile-navbar";

interface ServiceInnerProps {
  heading?: string;
  highlight?: string;
  bottom?: boolean;
  text?: string;
  button?: boolean;
  image?: "single" | "grid";
  careers?: boolean;
  url?: string;
  blog?: boolean;
  id?: string;
  isOurWork?: boolean;
  ourworkText?: string;

}

function CareersHero({
  heading,
  highlight,
  bottom = true,
  text,
  button,
  image = "grid",
  careers = false,
  blog = false,
  url,
  id,
  isOurWork,
  ourworkText
}: ServiceInnerProps) {
  const renderHeading = () => {
    if (!heading) {
      return (
        <>
          <h1 className="md:text-[65px] text-[40px] font-bold mb-3 md:mb-0 px-3 md:px-0 uppercase">
            Careers with
          </h1>
          <span className="md:text-[65px] text-[40px] font-bold px-3 md:px-0">
            <span className="text-black">— </span>
            <span className="gradient-text uppercase">LPS Brands</span>
          </span>
        </>
      );
    }
    if (blog) {
      return (
        <>
          <h1 className="md:text-[65px] text-[40px] font-bold  pb-5 md:pb-0">
            Our Blogs
          </h1>
          <span className="md:text-[65px] text-[40px] font-bold ">
            <span className="text-black">— </span>
            <span className="gradient-text uppercase">LPS Brands</span>
          </span>
        </>
      );
    }

    if (highlight && heading.includes(highlight)) {
      const parts = heading.split(new RegExp(`(${highlight})`, "gi"));
      return (
        <h1 className="lg:text-[75px] text-[40px] leading-[40px] lg:leading-[70px] font-bold  lg:max-w-[70%] 2xl:leading-[80px]">
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

    return (
      <h1 className="lg:text-[80px] text-[40px] leading-[40px] lg:leading-[80px] font-bold">
        {heading}
      </h1>
    );
  };

  return (
    <div
      id={`${id ? id : "test-all"}`}
      className={`bg-[url('/home/Hero.png') bg-center bg-cover ${
        bottom ? "" : "lg:pb-32 pb-10"
      }`}
    >
      <div
        className={`2xl:max-w-[1700px] mx-auto ${
          careers ? "w-[95%]" : " w-[90%]"
        }`}
      >
        {/* Top Left LPS Logo */}
        <div className="flex justify-between items-center p-4 ">
          <LogoLPS />
          <MobileNavbar />
        </div>

        {/* Heading */}
        <div className="mt-20 flex flex-col items-start -space-y-7 md:-space-y-8">
          {renderHeading()}
        </div>

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          {isOurWork && <p className="text-2xl md:text-3xl font-bold font-['Asgard'] text-[#2054fc] mt-6">{ourworkText}</p>}
          {text && !bottom && (
            <div className="flex flex-col items-start gap-4 mt-4 2xl:max-w-[50%] lg:w-[65%] py-4 lg:py-10">
              <p
                className="text-base md:text-xl font-medium font-['Exo'] leading-tight "
                dangerouslySetInnerHTML={{ __html: text }}
              ></p>
            </div>
          )}
        </div>
        {/* Bottom Section */}
        {bottom && (
          <div
            className={`flex flex-col items-start gap-4 mt-4  ${
              !text
                ? "lg:w-[80%] 2xl:max-w-[90%] "
                : " lg:w-[80%] 2xl:max-w-[65%]"
            }`}
          >
            <p
              className={`lg:text-xl font-medium font-['Exo'] leading-relaxed  ${
                !text && " px-3 md:px-0"
              }`}
            >
              {text
                ? text
                : "Looking for a career that’s all about making shaping, and celebrating the extraordinary?"}
            </p>
            {button && (
              <div className={` ${!text && "px-3 md:px-0"}`}>
                <p
                  className={`text-lg font-['Exo'] leading-relaxed mb-4 md:mb-4`}
                >
                  Then you’re home!
                </p>
                <Button link="/contact-us" text="Join Our Team" bg="bg-black" />
              </div>
            )}
          </div>
        )}

        {bottom && <CareersImageGrid image={image} url={url} />}
      </div>
    </div>
  );
}

export default CareersHero;
