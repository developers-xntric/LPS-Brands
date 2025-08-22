"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import Wrapper from "../layout/wrapper"
import { articles } from "@/data/article-slider"
import Image from "next/image"

export function ArticlesCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [translateX, setTranslateX] = useState(0)
    const [dragOffset, setDragOffset] = useState(0)
    const carouselRef = useRef<HTMLDivElement>(null)
    const autoplayRef = useRef<NodeJS.Timeout>()

    const itemsPerView = 3
    const maxIndex = Math.max(0, articles.length - itemsPerView)

    // Autoplay functionality
    useEffect(() => {
        const startAutoplay = () => {
            autoplayRef.current = setInterval(() => {
                if (!isDragging) {
                    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
                }
            }, 4000)
        }

        startAutoplay()

        return () => {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current)
            }
        }
    }, [isDragging, maxIndex])

    // Update translateX when currentIndex changes
    useEffect(() => {
        // Approximate card width including gap
        const cardWidth = 400
        setTranslateX(-currentIndex * cardWidth)
    }, [currentIndex])

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true)
        setStartX(e.clientX)
        setDragOffset(0)

        // Pause autoplay during drag
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current)
        }
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true)
        setStartX(e.touches[0].clientX)
        setDragOffset(0)

        // Pause autoplay during drag
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current)
        }
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return

        const currentX = e.clientX
        const diff = currentX - startX
        setDragOffset(diff)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return

        const currentX = e.touches[0].clientX
        const diff = currentX - startX
        setDragOffset(diff)
    }

    const handleDragEnd = () => {
        if (!isDragging) return

        setIsDragging(false)

        // Determine if we should move to next/previous slide
        const threshold = 100
        if (dragOffset > threshold && currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1)
        } else if (dragOffset < -threshold && currentIndex < maxIndex) {
            setCurrentIndex((prev) => prev + 1)
        }

        setDragOffset(0)

        // Resume autoplay after drag ends
        setTimeout(() => {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current)
            }
            autoplayRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
            }, 4000)
        }, 500)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(Math.min(index, maxIndex))
    }

    return (
        <Wrapper>
            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Our Articles</h2>

                <div className="relative overflow-hidden">
                    <div
                        ref={carouselRef}
                        className="flex gap-6 transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing py-10"
                        style={{
                            transform: `translateX(${translateX + dragOffset}px)`,
                            transition: isDragging ? "none" : "transform 0.5s ease-out",
                        }}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleDragEnd}
                        onMouseLeave={handleDragEnd}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleDragEnd}
                    >
                        {articles.map((article) => (
                            <div
                                key={article.id}
                                className="flex-shrink-0 w-[400px] overflow-hidden"
                            >
                                <div className="flex flex-col gap-4 relative overflow-hidden rounded-2xl">
                                    <Image
                                        src={article.image || "/placeholder.svg"}
                                        alt={article.title}
                                        className="w-full h-72 object-cover transition-transform duration-300 hover:scale-105"
                                        draggable={false}
                                        width={1000}
                                        height={1000}
                                    />
                                    <h3 className="text-xl font-['Exo'] font-semibold text-black leading-tight min-h-20">
                                        {article.title}
                                    </h3>

                                    <Button className="bg-[#00FF00] hover:bg-[#2054FC] text-black hover:text-white font-medium text-lg w-32 h-12 rounded-full transition-colors duration-200">
                                        See more
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination dots */}
                <div className="flex justify-center gap-2 mt-8 mb-20">
                    {Array.from({ length: maxIndex + 1 }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "bg-foreground scale-110"
                                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}
