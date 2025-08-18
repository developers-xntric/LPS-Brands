"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Wrapper from "../layout/wrapper"
import { teamMembers } from "@/data/meet-the-pears"
import Image from "next/image"

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
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-6xl font-normal text-foreground">Meet the Pears</h2>

                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        className="rounded-full w-12 h-12 border-2 bg-transparent border-blue"
                    >
                        <ChevronLeft className="h-5 w-5 text-blue" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handleNext}
                        disabled={currentIndex >= maxIndex}
                        className="rounded-full w-12 h-12 border-2 bg-transparent border-blue"
                    >
                        <ChevronRight className="h-5 w-5 text-blue" />
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
