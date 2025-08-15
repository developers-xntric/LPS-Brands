"use client"
import { BlogCarouselProps } from "@/data/blog-section"
import { useState, useEffect, useRef } from "react"
import type React from "react"

export default function BlogCarousel({ posts }: BlogCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [translateX, setTranslateX] = useState(0)
    const [slideWidth, setSlideWidth] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<any>(null)

    const calculateSlideWidth = () => {
        if (innerRef.current) {
            const gap = parseFloat(getComputedStyle(innerRef.current).gap) || 0
            const cards = innerRef.current.children
            if (cards.length > 0) {
                const cardWidth = cards[0].offsetWidth
                setSlideWidth(cardWidth + gap)
            }
        }
    }

    useEffect(() => {
        calculateSlideWidth()
        window.addEventListener("resize", calculateSlideWidth)
        return () => window.removeEventListener("resize", calculateSlideWidth)
    }, [posts])

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

        const threshold = slideWidth ? slideWidth / 2 : 100
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
                    ref={innerRef}
                    className="flex gap-5 transition-transform duration-500 ease-out"
                    style={{
                        transform: `translateX(${-(currentIndex * slideWidth) + (isDragging ? translateX : 0)}px)`,
                    }}
                >
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="flex-shrink-0 w-[30%] px-3 h-96 rounded-2xl"
                        >
                            <div className="rounded-2xl h-96 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-64 rounded-2xl"
                                    draggable={false}
                                />
                                <h3 className="text-white text-sm font-medium mb-3 line-clamp-2 leading-relaxed px-2">{post.title}</h3>
                                <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors px-2">
                                    {post.readMore}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}