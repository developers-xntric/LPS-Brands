"use client"
import { useState, useEffect, useRef } from "react"
import type React from "react"

interface BlogPost {
    id: number
    title: string
    image: string
    readMore: string
}

interface BlogCarouselProps {
    posts: BlogPost[]
}

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
                    className="flex transition-transform duration-500 ease-out"
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
                        const scaleClass = isCenter && isInView ? "scale-110" : "scale-100"

                        return (
                            <div
                                key={post.id}
                                className={`flex-shrink-0 w-1/4 px-3 transition-transform duration-500 ${scaleClass} ${isCenter ? "z-10" : "z-0"}`}
                            >
                                <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg">
                                    <div className="relative">
                                        <img
                                            src={post.image || "/placeholder.svg"}
                                            alt={post.title}
                                            className="w-full h-48 object-cover"
                                            draggable={false}
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-white text-sm font-medium mb-3 line-clamp-2 leading-relaxed">{post.title}</h3>
                                        <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                                            {post.readMore}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
