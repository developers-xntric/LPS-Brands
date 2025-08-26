import React from "react";
import { Button } from "../common/button";

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
      <div className={`w-[90%] mx-auto 2xl:max-w-[1740px]  h-screen bg-cover bg-center bg-no-repeat rounded-[30px] flex justify-end items-center`}   style={{ backgroundImage: `url(${bgImage})` }} >
        {/* Glassmorphism Card */}
        <div className="px-10 py-14 2xl:py-20 w-[550px] 2xl:w-[700px] rounded-[25px] bg-black/15 backdrop-blur-2xl shadow-xl mr-20">
          <h3 className="text-[40px] 2xl:text-[50px] text-[#FFFFFF] leading-[40px] 2xl:leading-[50px]">
            {heading}
          </h3>
          <p className="text-[16px] 2xl:text-[24px] text-[#FFFFFF] my-10 font-light">{para1}</p>
          <p className="text-[16px] 2xl:text-[24px] text-[#FFFFFF] my-10 font-light">{para2}</p>
          <Button text="Connect with an expert" center={false} bg="bg-black" />
        </div>
      </div>
    </div>
  );
};

export default FourSection;
