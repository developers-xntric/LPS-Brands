"use client"

import { Button } from "@/components/ui/button"
import { teamMembers } from "@/data/meet-the-pears"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"
import Wrapper from "../layout/wrapper"

export function MeetThePears() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)

    const visibleCards = 5
    const maxIndex = Math.max(0, teamMembers.length - visibleCards)

    const handlePrevious = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
    }

    const cardWidth = 256 // w-64 = 256px
    const gap = 16 // gap-4 = 16px
    const translateX = -(currentIndex * (cardWidth + gap))

    return (
        <Wrapper>
            <div className="flex items-center justify-between mb-6 lg:mt-12">
                <h2 className="text-[28px] md:text-4xl lg:text-6xl font-[400] text-foreground">Meet the Pears</h2>

                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        className="rounded-full lg:w-12 lg:h-12 w-8 h-8 border-2 bg-transparent border-blue"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4.16663 10H15.8333M4.16663 10L9.16663 15M4.16663 10L9.16663 5" stroke="#0050FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
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
                            <path d="M15.8334 10H4.16671M15.8334 10L10.8334 15M15.8334 10L10.8334 5" stroke="#0050FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Button>
                </div>
            </div>

            <div className="overflow-x-hidden py-10">
                <div
                    className="flex gap-4 transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(${translateX}px)` }}
                >
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className={cn(
                                "relative flex-shrink-0 w-[290px] rounded-xl overflow-hidden cursor-pointer transition-all ease-out",
                                hoveredCard === member.id ? "transform -translate-y-4" : "",
                            )}
                            onMouseEnter={() => setHoveredCard(member.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <Image
                                src={hoveredCard === member.id ? member.hoverImage : member.defaultImage}
                                width={1000}
                                height={1000}
                                alt={member.id}
                                className="w-full h-full object-cover transition-opacity duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}
