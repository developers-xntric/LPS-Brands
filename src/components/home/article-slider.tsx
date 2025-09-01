"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Wrapper from "../layout/wrapper"
import { articles } from "@/data/article-slider"
import Link from "next/link"

export function ArticlesCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [translateX, setTranslateX] = useState(0)
    const [dragOffset, setDragOffset] = useState(0)
    const [itemsPerView, setItemsPerView] = useState(3)
    const [itemWidth, setItemWidth] = useState(0)
    const [gapPx, setGapPx] = useState(24) // tailwind gap-6 = 24px
    const trackRef = useRef<HTMLDivElement>(null)
    const autoplayRef = useRef<NodeJS.Timeout>()

    const maxIndex = Math.max(0, articles.length - itemsPerView)

    // Derive itemsPerView from breakpoints
    useEffect(() => {
        const calcItemsPerView = () => {
            const w = window.innerWidth
            // sm: <640 => 1, md: 640-1023 => 2, lg+: >=1024 => 3
            if (w < 640) setItemsPerView(1)
            else if (w < 1024) setItemsPerView(2)
            else setItemsPerView(3)
        }
        calcItemsPerView()
        window.addEventListener("resize", calcItemsPerView)
        return () => window.removeEventListener("resize", calcItemsPerView)
    }, [])

    // Measure container width + computed gap using ResizeObserver
    useEffect(() => {
        const updateMeasurements = () => {
            const el = trackRef.current?.parentElement // the overflow-hidden wrapper
            if (!el) return
            const rect = el.getBoundingClientRect()
            const styles = getComputedStyle(trackRef.current!)
            // gap applies horizontally in our flex row
            const gap = parseFloat(styles.columnGap || styles.gap || "24")
            setGapPx(Number.isFinite(gap) ? gap : 24)
            setItemWidth(rect.width / itemsPerView)
        }

        updateMeasurements()

        const ro = new ResizeObserver(() => updateMeasurements())
        if (trackRef.current?.parentElement) {
            ro.observe(trackRef.current.parentElement)
        }
        return () => ro.disconnect()
    }, [itemsPerView])

    // Autoplay
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
            if (autoplayRef.current) clearInterval(autoplayRef.current)
        }
    }, [isDragging, maxIndex])

    // Update translateX when index/measurements change
    useEffect(() => {
        const step = itemWidth + gapPx
        setTranslateX(-currentIndex * step)
    }, [currentIndex, itemWidth, gapPx])

    const pauseAutoplay = () => {
        if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
    const resumeAutoplay = () => {
        if (autoplayRef.current) clearInterval(autoplayRef.current)
        autoplayRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
        }, 4000)
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true)
        setStartX(e.clientX)
        setDragOffset(0)
        pauseAutoplay()
    }
    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true)
        setStartX(e.touches[0].clientX)
        setDragOffset(0)
        pauseAutoplay()
    }
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return
        setDragOffset(e.clientX - startX)
    }
    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return
        setDragOffset(e.touches[0].clientX - startX)
    }
    const handleDragEnd = () => {
        if (!isDragging) return
        setIsDragging(false)

        const threshold = Math.max(60, itemWidth * 0.25)
        if (dragOffset > threshold && currentIndex > 0) {
            setCurrentIndex((p) => p - 1)
        } else if (dragOffset < -threshold && currentIndex < maxIndex) {
            setCurrentIndex((p) => p + 1)
        }
        setDragOffset(0)
        setTimeout(resumeAutoplay, 400)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(Math.min(Math.max(index, 0), maxIndex))
    }

    return (
        <Wrapper>
            <div className="mt-8 mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Articles</h2>

                <div className="relative overflow-hidden">
                    <div
                        ref={trackRef}
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
                                className="flex-shrink-0 overflow-hidden"
                                // Make each card exactly fill the viewport fraction
                                style={{ width: `${100 / itemsPerView}%` }}
                            >
                                <Link href={article.link || ""} className="flex flex-col gap-4  relative overflow-hidden rounded-2xl h-full">
                                    <Image
                                        src={article.image || "/placeholder.svg"}
                                        alt={article.title}
                                        className="w-full h-72 2xl:h-[350px] object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
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
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination dots */}
                <div className="flex justify-center gap-2 mt-8 lg:mb-20">
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
