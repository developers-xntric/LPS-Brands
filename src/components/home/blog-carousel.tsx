"use client"
import { BlogCarouselProps } from "@/data/blog-section"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import type React from "react"

export default function BlogCarousel({ posts }: BlogCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [translateX, setTranslateX] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isAutoPlaying && !isDragging) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % Math.max(1, posts.length - 3))
            }, 4000)
            return () => clearInterval(interval)
        }
    }, [isAutoPlaying, isDragging, posts.length])

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true)
        setStartX(e.clientX)
        setIsAutoPlaying(false)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return
        const diff = e.clientX - startX
        setTranslateX(diff)
    }

    const handleMouseUp = () => {
        if (!isDragging) return
        setIsDragging(false)

        const threshold = 100
        if (Math.abs(translateX) > threshold) {
            if (translateX > 0 && currentIndex > 0) {
                setCurrentIndex((prev) => prev - 1)
            } else if (translateX < 0 && currentIndex < posts.length - 4) {
                setCurrentIndex((prev) => prev + 1)
            }
        }

        setTranslateX(0)
        setTimeout(() => setIsAutoPlaying(true), 2000)
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true)
        setStartX(e.touches[0].clientX)
        setIsAutoPlaying(false)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return
        const diff = e.touches[0].clientX - startX
        setTranslateX(diff)
    }

    const handleTouchEnd = () => {
        handleMouseUp()
    }

    return (
        <div className="mb-16 overflow-hidden">
            <div
                ref={containerRef}
                className="relative cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex gap-5 transition-transform duration-500 ease-out relative right-40"
                    style={{
                        transform: `translateX(calc(-${currentIndex * 25}% + ${isDragging ? translateX : 0}px))`,
                    }}
                >
                    {posts.map((post, index) => {
                        const visibleStart = currentIndex
                        const visibleEnd = currentIndex + 3
                        const isInView = index >= visibleStart && index <= visibleEnd
                        const relativeIndex = index - currentIndex
                        const isCenter = relativeIndex === 1 || relativeIndex === 2
                        const scaleClass = isCenter && isInView ? "h-72" : "h-56"

                        return (
                            <div
                                key={post.id}
                                className={`flex-shrink-0 w-[28%] px-3 transition-transform duration-500 rounded-2xl  ${isCenter ? "z-10" : "z-0"}`}
                            >
                                <div className="rounded-2xl overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        className={`w-full ${scaleClass} rounded-2xl object-cover`}
                                        draggable={false}
                                        width={600}
                                        height={600}
                                    />
                                    <h3 className="text-white text-xl font-medium mb-3 line-clamp-2 leading-tight px-2 my-6">{post.title}</h3>
                                    <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors px-2">
                                        {post.readMore}
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
