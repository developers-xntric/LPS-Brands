"use client";
import React, { useState } from "react";
import Image from "next/image";

interface HoverImage {
    defaultSrc: string
    hoverSrc: string
    alt: string
    width: number
    height: number
    className: string
}

const HoverImage = ({ defaultSrc, hoverSrc, alt, width, height, className }: HoverImage) => {
    const [hover, setHover] = useState(false);

    return (
        <Image
            src={hover ? hoverSrc : defaultSrc}
            alt={alt}
            width={width}
            height={height}
            className={className + " cursor-pointer"}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        />
    );
};

export default HoverImage;
