"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const awwards = ["/home/i1.png", "/home/i2.png", "/home/i3.png", "/home/i4.png", "/home/i5.png"]

function YearsAwwards() {
    const [duration, setDuration] = useState(20);

    const duplicatedAwards = useMemo(() => [...awwards, ...awwards], [awwards]);

    useEffect(() => {
        const handleResize = () => {
            setDuration(window.innerWidth < 768 ? 0 : 10);
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
        <div id="YearsAwwards" className="relative gap-12 2xl:gap-16 font-['Futuru'] flex flex-col justify-between items-center overflow-hidden text-white py-20">
            <div className="flex flex-col items-center justify-center gap-20 ">
                {/* Scrolling Awards */}
                <div className=" overflow-hidden w-full">
                    <motion.div
                        key={duration}
                        className="flex gap-16 whitespace-nowrap"
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            duration,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {duplicatedAwards.map((award, index) => (
                            <div key={index} className="flex flex-col min-w-[16%] md:min-w-[20%]">
                                <div>
                                    <Image
                                        width={140}
                                        height={500}
                                        src={award}
                                        alt={`Award ${index}`}
                                        className="md:w-[160px] w-[120px]"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default YearsAwwards;