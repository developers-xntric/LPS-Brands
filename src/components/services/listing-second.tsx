"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

function ListingSecond() {
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="2xl:max-w-[1700px] mx-auto  w-[90%] md:pb-16 pb-6 py-16 space-y-10 md:space-y-20">
      <div>
        <h2 className="text-[30px] md:text-[50px] font-['Asgard'] font font-bold leading-[35px] md:leading-[50px] ">
          New-age is Our Edge, <span className="font-['Exo']">360</span> is Our
          Craft.
        </h2>
      </div>

      {/* Stats */}
      <div
        ref={statsRef}
        className="grid grid-cols-2 md:grid-cols-4 md:place-items-start  gap-4 md:gap-8 font-['Exo']"
      >
        <div className="stat  pb-2">
          <h2 className="text-[38px] md:text-[48px] xl:text-[70px] font-bold font-['Exo'] text-blue">
            {startCount ? (
              <CountUp start={0} end={120} duration={1} separator="," />
            ) : (
              "0"
            )}
            <span className="text-blue font-['Asgard'] ">+</span>
          </h2>
          <p className="text-secondary relative text-[13px] md:text-[18px] bottom-2 leading-[16px] md:leading-[21px] font-['Exo'] font-medium">
            Brand Engagements
          </p>
        </div>

        <div className="stat  pb-2">
          <h2 className="text-[38px] md:text-[48px] xl:text-[70px] font-bold font-['Exo'] text-blue">
            {startCount ? (
              <CountUp start={0} end={200} duration={1} separator="," />
            ) : (
              "0"
            )}
            <span className="text-blue font-['Asgard'] ">+</span>
          </h2>
          <p className="text-secondary relative text-[13px] md:text-[18px] bottom-2 leading-[16px] md:leading-[21px] font-['Exo'] font-medium">
            Monthly Videos Produced
          </p>
        </div>

        <div className="stat  ">
          <h2 className="text-[38px] md:text-[48px] xl:text-[70px] font-bold font-['Exo'] text-blue">
            {startCount ? (
              <CountUp start={0} end={400} duration={1} separator="," />
            ) : (
              "0"
            )}
            <span className="text-blue font-['Asgard'] ">+</span>
          </h2>
          <p className="text-secondary relative text-[13px] md:text-[18px] bottom-2 leading-[16px] md:leading-[21px] font-['Exo'] font-medium">
            Successful Campaigns Executed
          </p>
        </div>
        
        <div className="stat  pb-2">
          <h2 className="text-[38px] md:text-[48px] xl:text-[70px] font-bold font-['Exo'] text-blue">
            {startCount ? (
              <CountUp start={0} end={6000} duration={1} separator="," />
            ) : (
              "0"
            )}
            <span className="text-blue font-['Asgard'] ">+</span>
          </h2>
          <p className="text-secondary relative text-[13px] md:text-[18px] bottom-2 leading-[16px] md:leading-[21px] font-['Exo'] font-medium">
            Short Form Videos and 8 Big Budget Films churned
          </p>
        </div>
      </div>
    </div>
  );
}

export default ListingSecond;
