"use client";
import React from "react";
import Wrapper from "../layout/wrapper";
import globalPresenceAwards from "@/data/global-presence-awards";
import YearsAwwards from "./city-slider";
import Image from "next/image";
import HoverImage from "./hover-image";

const GlobalPresence = () => {
    return (
        <Wrapper>
            <div className="flex flex-col xl:flex-row gap-10 xl:justify-between py-16 relative">
                <div className="relative md:h-[630px] lg:h-[760px] xl:w-[65%] bg-[url('/home/bg-grad.png')] bg-cover bg-center rounded-3xl md:rounded-[50px]">
                    <HoverImage
                        defaultSrc="/home/zig-zag.png"
                        hoverSrc="/home/zig-zag.png"
                        alt=""
                        width={170}
                        height={200}
                        className="hidden lg:block absolute top-12 -right-14"
                    />

                    <div className="relative w-[85%] mx-auto h-[65%] mt-20 flex gap-10 md:flex-row flex-col">
                        <div className="w-[170px] space-y-4 relative left-[7.4%]">
                            <h2 className="text-5xl">Global Presence</h2>
                            <p className="text-lg leading-6 font-medium">
                                We proudly serve clients across multiple regions
                            </p>
                        </div>

                        <div className="md:block hidden w-[100%] left-[40%] lg:left-[33%] md:absolute inset-0 mt-10 lg:mt-0">
                            <div>
                                <HoverImage
                                    defaultSrc="/home/Egypt.webp"
                                    hoverSrc="/home/cairo.webp"
                                    alt="Cities"
                                    width={165}
                                    height={150}
                                    className="inline-block w-[110px] lg:w-[170px]"
                                />
                                <HoverImage
                                    defaultSrc="/home/Canada.webp"
                                    hoverSrc="/home/toronto.webp"
                                    alt="Cities"
                                    width={220}
                                    height={250}
                                    className="inline-block md:w-[175px] lg:w-[235px] md:relative top-[26px] lg:top-[50px]"
                                />
                            </div>
                            <div className="md:relative right-[23.5%] xl:right-[26%] 2xl:right-[19.75%]">
                                <HoverImage
                                    defaultSrc="/home/Saudi.webp"
                                    hoverSrc="/home/riyadh.webp"
                                    alt="Cities"
                                    width={190}
                                    height={200}
                                    className="inline-block w-[142px] lg:w-[190px] md:relative bottom-[50px] lg:bottom-[75px] 2xl:bottom-[75px]"
                                />
                                <HoverImage
                                    defaultSrc="/home/UAE.webp"
                                    hoverSrc="/home/dubai.webp"
                                    alt="Cities"
                                    width={275}
                                    height={250}
                                    className="inline-block w-[200px] lg:w-[290px]"
                                />
                                <HoverImage
                                    defaultSrc="/home/UK.webp"
                                    hoverSrc="/home/adlz.webp"
                                    alt="Cities"
                                    width={185}
                                    height={200}
                                    className="inline-block md:relative bottom-10 lg:bottom-[66px] w-[160px] lg:w-[210px]"
                                />
                            </div>
                        </div>

                        <div className="md:hidden w-[100%]">
                            <div className="flex">
                                <HoverImage
                                    defaultSrc="/home/Egypt.webp"
                                    hoverSrc="/home/cairo.webp"
                                    alt="Cities"
                                    width={80}
                                    height={100}
                                    className="inline-block w-[90px]"
                                />
                                <HoverImage
                                    defaultSrc="/home/UK.webp"
                                    hoverSrc="/home/adlz.webp"
                                    alt="Cities"
                                    width={240}
                                    height={150}
                                    className="inline-block w-[180px]"
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex">
                                    <HoverImage
                                        defaultSrc="/home/UAE.webp"
                                        hoverSrc="/home/dubai.webp"
                                        alt="Cities"
                                        width={120}
                                        height={250}
                                        className="inline-block w-[100px]"
                                    />
                                    <HoverImage
                                        defaultSrc="/home/Saudi.webp"
                                        hoverSrc="/home/riyadh.webp"
                                        alt="Cities"
                                        width={250}
                                        height={200}
                                        className="inline-block w-[170px]"
                                    />
                                </div>
                                <HoverImage
                                    defaultSrc="/home/Canada.webp"
                                    hoverSrc="/home/toronto.webp"
                                    alt="Cities"
                                    width={300}
                                    height={250}
                                    className="inline-block w-[270px]"
                                />
                            </div>
                        </div>
                    </div>
                    <YearsAwwards />
                </div>

                <div className="xl:w-[30%]">
                    <h2 className='text-center mb-6 text-5xl font-["Exo"] font-[700]'>Awards</h2>
                    <div className="space-y-3">
                        {globalPresenceAwards.map((item, i) => (
                            <div key={i} className="flex gap-5 items-center">
                                <div className="md:min-w-[30%] xl:min-w-[39%]">
                                    <Image
                                        src={item.image}
                                        alt="Awards"
                                        width={200}
                                        height={200}
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className='space-y-1 font-["Exo"]'>
                                    <h3 className="text-2xl">{item.heading}</h3>
                                    <p className="text-sm font-medium leading-4">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default GlobalPresence;
