/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button as B } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Button = ({
  text = "View All Work",
  center = true,
  bg = "bg-white",
  topT = false,
  onClick,
  link,
  className
}: {
  text: string;
  center?: boolean;
  bg?: string;
  topT?: boolean;
  onClick?: (e?: any) => void;
  link?: string;
  className?: string;
}) => {
  return (
    <div className={`flex items-center ${center ? "justify-center" : ""}`}>
      <Link href={link || ""} className="w-fit">
        <div
          className={`flex items-center  group`}
        >
          <B
            className={`bg-green text-black h-[50px] px-6 rounded-full text-lg flex items-center font-normal transition-all duration-300 hover:bg-[#2054FC] hover:text-white ${className}`}
            onClick={onClick}
          >
            <span className={`relative ${!topT && "top-[2px]"}`}>{text}</span>
          </B>

          {/* Arrow Circle */}
          <div
            className={`w-[50px] h-[50px] ${bg} rounded-full flex justify-center items-center cursor-pointer 
              transition-all duration-500 delay-150 transform group-hover:-translate-x-3`}
          >
            <ArrowRight
              className={`h-6 w-6 font-bold ${bg === "bg-black" ? "text-white" : "text-black"
                }`}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};
