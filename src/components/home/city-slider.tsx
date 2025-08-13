"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";


function YearsAwwards({
    title = "While deeply honored by industry recognition, we remain grounded in our core principles and research-driven approach",
    bgImage,
    awwards,
}: {
    title?: string;
    bgImage?: boolean;
    awwards: { year?: string; icon: string }[];
}) {
    const [duration, setDuration] = useState(20);

    const duplicatedAwards = useMemo(() => [...awwards, ...awwards], [awwards]);

    useEffect(() => {
        const handleResize = () => {
            setDuration(window.innerWidth < 768 ? 10 : 20);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        return () => window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <div id="YearsAwwards" className="relative gap-12 2xl:gap-16 font-['Futuru'] flex flex-col justify-between items-center overflow-hidden bg-black text-white py-16">
            {/* Background Image */}
            {bgImage && (
                <Image
                    width={100}
                    height={500}
                    alt="img"
                    src="/HomePage/global-desktop-heading.svg"
                    className="w-full object-cover hidden"
                    priority
                />
            )}

            <div className="flex flex-col items-center justify-center gap-20 ">
                {title && <div className="w-[95%] 2xl:max-w-[1740px] mx-auto z-10 md:py-8">
                    <p className="text-center text-[14px] leading-[22px] lg:leading-normal lg:text-[20px] font-light tracking-widest opacity-[0.7] lg:w-[700px] w-[310px] mx-auto font-futuru">
                        {title}
                    </p>
                </div>}
                {/* Scrolling Awards */}
                <div className=" overflow-hidden w-full">
                    <motion.div
                        key={duration}
                        className="flex gap-24 whitespace-nowrap"
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            duration,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {duplicatedAwards.map((award, index) => (
                            <div key={index} className="flex flex-col min-w-[16%] md:min-w-[20%] gap-3">
                                <div className="border-b border-[#5B5B5B] pb-2">
                                    <Image
                                        width={140}
                                        height={500}
                                        src={award.icon}
                                        alt={`Award ${index}`}
                                        className="md:w-[140px] w-[100px]"
                                    />
                                </div>
                                {award.year && <p className="md:text-[22px] text-[16px] font-normal tracking-widest font-['Futuru']">YEAR {award.year}</p>}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default YearsAwwards;