import React from "react";
import { Button as B } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FourSection = ({
  heading,
  para1,
  para2,
  bgImage,
}: {
  heading: string;
  para1: string;
  para2: string;
  bgImage: string;
}) => {
  return (
    <div className="my-20 ">
      <div
        className={`w-[95%] md:w-[90%] mx-auto 2xl:max-w-[1740px]  h-screen bg-cover bg-center bg-no-repeat rounded-[30px] flex justify-end items-center`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Glassmorphism Card */}
        <div className="px-5 md:px-10 py-10 md:py-14 2xl:py-20 w-[280px] md:w-[550px] 2xl:w-[700px] rounded-[25px] bg-black/15 backdrop-blur-2xl shadow-xl mx-auto md:mr-10">
          <h3 className="text-[25px] md:text-[40px] 2xl:text-[50px] text-[#FFFFFF] leading-[30px] md:leading-[40px] 2xl:leading-[50px]">
            {heading}
          </h3>
          <p className="text-[13px] md:text-[16px] 2xl:text-[24px] text-[#FFFFFF] my-10 font-light">
            {para1}
          </p>
          <p className="text-[13px] md:text-[16px] 2xl:text-[24px] text-[#FFFFFF] my-10 font-light">
            {para2}
          </p>
          <div className={`flex items-center md:justify-start w-fit justify-center group`}>
            <Link href="/contact-us" className="flex ">
            <B className="bg-green text-black h-[50px] px-6 rounded-full text-lg flex items-center font-normal transition-all duration-300 hover:bg-[#2054FC] hover:text-white">
              <span className={`relative `}>Connect to our expert</span>
            </B>
            </Link>
            <Link
            href='/contact-us'
              className={` rounded-full flex justify-center items-center cursor-pointer 
              transition-all duration-500 delay-150 transform group-hover:-translate-x-3`}
            >
              <div className="w-10 h-10 rounded-full items-center flex justify-center bg-black ">
              <ArrowRight className={`h-6 w-6  font-bold rounded-full text-white `} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourSection;
