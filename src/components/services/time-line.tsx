"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Wrapper from "../layout/wrapper";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const timelineData = [
    {
      title: "Identity Discovery & Strategic Clarity",
      description:
        "We map out your unique leadership DNA—your core values, differentiators, and purpose—and translate it into a compelling brand foundation.",
    },
    {
      title: "Format-Driven Storytelling",
      description:
        "From bite-sized thought leadership to long-form keynote narratives, we craft your voice across scrolls, stages, and screens.",
    },
    {
      title: "Omnichannel Presence",
      description:
        "We build dynamic content ecosystems—tailored for digital, earned, and live platforms—to keep your leadership brand active and aligned.",
    },
    {
      title: "Performance-Driven Evolution",
      description:
        "We continuously optimize your brand's performance through data-driven insights and strategic refinements.",
    },
  ];

  useEffect(() => {
    if (!timelineRef.current || !lineRef.current) return;

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { height: 0 },
        {
          height: "100%",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 40%",
            scrub: 0.5,
          },
        }
      );

      itemsRef.current.forEach((item) => {
        if (!item) return;

        const circle = item.querySelector(".timeline-circle");

        if (!circle) return;

        // Set initial states for circle only
        gsap.set(circle, {
          backgroundColor: "#ffffff",
          borderColor: "#d1d5db",
          borderWidth: "2px",
          scale: 0.8,
        });

        // Create animation timeline for each item
        gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 53%",
            end: "top 27%",
            toggleActions: "play none none reverse",
            onEnter: () => {
              gsap.to(circle, {
                backgroundColor: "#00FF00",
                borderColor: "#00FF00",
                borderWidth: "0px",
                scale: 1,
                duration: 0.6,
                ease: "back.out(1.7)",
              });
            },
            onLeave: () => {
              // Keep active state when scrolling past
            },
            onEnterBack: () => {
              gsap.set(circle, {
                backgroundColor: "#00FF00",
                borderColor: "#00FF00",
                borderWidth: "0px",
                scale: 1,
              });
            },
            onLeaveBack: () => {
              gsap.to(circle, {
                backgroundColor: "#ffffff",
                borderColor: "#d1d5db",
                borderWidth: "2px",
                scale: 0.8,
                duration: 0.4,
              });
            },
          },
        });
      });
    }, timelineRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Wrapper>
      <div className=" bg-white py-16 px-4">
        <div className="mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-secondary mb-6 max-w-2xl mx-auto font-['Asgard']">
              How We Help You Build Your Leadership Brand
            </h2>
            <p className="text-secondary font-medium leading-7 text-lg font-['Exo'] max-w-4xl mx-auto">
              Our area of expertise at LPS is very customised and goal-oriented
              leadership branding techniques. Whether your leadership style is
              visionary entrepreneur, seasoned executive, or rising leader, we
              assist you to create a brand that speaks to your audience and
              represents your leadership DNA.
            </p>
          </div>

          {/* Timeline Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - We deliver this through */}
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="text-4xl md:text-6xl text-black mb-6 font-['Asgard'] font-normal">
                We <span className="text-blue">deliver</span>
                <br />
                this through
              </h2>

              <div className="relative">
                <Image
                  src="/services/lps-logo.webp"
                  alt="Timeline"
                  width={290}
                  height={700}
                />
              </div>
            </div>

            {/* Right Side - Timeline Items */}
            <div ref={timelineRef} className="relative right-10">
              <div className="absolute left-7 top-8 bottom-8 xl:bottom-20 w-0.5 bg-gray-200">
                <div
                  ref={lineRef}
                  className="w-full bg-[#101852] origin-top"
                  style={{ transformOrigin: "top" }}
                ></div>
              </div>

              <div className="space-y-16">
                {timelineData.map((item, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      (itemsRef.current as (HTMLDivElement | null)[])[index] =
                        el;
                    }}
                    className="flex items-start gap-6 relative"
                  >
                    <div className="timeline-circle flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center relative z-10 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 17 12" fill="none"><path d="M0 11.0974L5.80488 0.0974121H16.4784L7.86468 11.0974H0Z" fill="#10181E"></path></svg>
                    </div>
                    <div className="timeline-content flex-1">
                      <h3 className="text-[34px] font-bold text-black mb-3 underline decoration-2 underline-offset-4">
                        {item.title}
                      </h3>
                      <p className="text-secondary font-medium leading-7 text-xl font-['Exo'] max-w-4xl mx-auto">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
