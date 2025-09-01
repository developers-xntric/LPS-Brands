"use client"

import { Button } from "@/components/ui/button"
import { teamMembers } from "@/data/meet-the-pears"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState, useEffect } from "react"
import Wrapper from "../layout/wrapper"

export function MeetThePears() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)
    const [isMobile, setIsMobile] = useState(false)

    const cardWidth = 290 // w-[290px]
    const gap = 16       // gap-4
    const visibleCards = 5
    const maxIndex = Math.max(0, teamMembers.length - visibleCards)

    const handlePrevious = () => setCurrentIndex((p) => Math.max(0, p - 1))
    const handleNext = () => setCurrentIndex((p) => Math.min(maxIndex, p + 1))

    // screen size watcher
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 1024)
        check()
        window.addEventListener("resize", check)
        return () => window.removeEventListener("resize", check)
    }, [])

    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [dragOffset, setDragOffset] = useState(0)

    const translateX = -(currentIndex * (cardWidth + gap)) + dragOffset

    // helpers to read pointer position
    function getClientX(
        e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
    ) {
        return "touches" in e ? e.touches[0].clientX : e.clientX
    }

    // start drag
    const onDragStart = (
        e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
    ) => {
        setIsDragging(true)
        setStartX(getClientX(e))
        setDragOffset(0)
    }

    // move drag
    const onDragMove = (
        e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
    ) => {
        if (!isDragging) return
        // prevent page scroll while swiping
        e.preventDefault?.()
        const delta = getClientX(e) - startX
        setDragOffset(delta)
    }

    // end drag -> decide slide
    const onDragEnd = () => {
        if (!isDragging) return
        const threshold = Math.min(120, cardWidth * 0.25) // swipe distance to change slide
        if (dragOffset <= -threshold) {
            handleNext()
        } else if (dragOffset >= threshold) {
            handlePrevious()
        }
        setIsDragging(false)
        setDragOffset(0)
    }

    // autoplay (pause while dragging)
    useEffect(() => {
        if (isDragging) return
        const id = setInterval(() => {
            setCurrentIndex((p) => (p >= maxIndex ? 0 : p + 1))
        }, 3000)
        return () => clearInterval(id)
    }, [maxIndex, isDragging])

    return (
        <Wrapper>
            <div className="flex items-center justify-between lg:mb-6 lg:mt-12">
                <h2 className="text-4xl lg:text-6xl font-[400] text-foreground">
                    Meet the Pears
                </h2>

                {!isMobile && (
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={handlePrevious}
                            disabled={currentIndex === 0}
                            className="rounded-full lg:w-12 lg:h-12 w-8 h-8 border-2 bg-transparent border-blue"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4.16663 10H15.8333M4.16663 10L9.16663 15M4.16663 10L9.16663 5" stroke="#0050FF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={handleNext}
                            disabled={currentIndex >= maxIndex}
                            className="rounded-full lg:w-12 lg:h-12 w-8 h-8 border-2 bg-transparent border-blue"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M15.8334 10H4.16671M15.8334 10L10.8334 15M15.8334 10L10.8334 5" stroke="#0050FF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Button>
                    </div>
                )}
            </div>

            <div
                className={cn(
                    "overflow-x-hidden py-10 select-none", // avoid text selection during drag
                )}
            >
                <div
                    // drag listeners
                    onMouseDown={onDragStart}
                    onMouseMove={onDragMove}
                    onMouseUp={onDragEnd}
                    onMouseLeave={onDragEnd}
                    onTouchStart={onDragStart}
                    onTouchMove={onDragMove}
                    onTouchEnd={onDragEnd}
                    className={cn(
                        "flex gap-4 ease-out",
                        isDragging ? "transition-none cursor-grabbing" : "transition-transform duration-500 cursor-grab"
                    )}
                    style={{ transform: `translateX(${translateX}px)` }}
                >
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className={cn(
                                "relative flex-shrink-0 w-[290px] rounded-xl overflow-hidden cursor-pointer transition-all ease-out",
                                hoveredCard === member.id ? "-translate-y-4" : ""
                            )}
                            onMouseEnter={() => setHoveredCard(member.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <Image
                                src={hoveredCard === member.id ? member.hoverImage : member.defaultImage}
                                width={1000}
                                height={1000}
                                alt={member.id}
                                className="w-full h-full object-cover transition-opacity duration-300 pointer-events-none"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}
