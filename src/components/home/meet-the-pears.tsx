"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface TeamMember {
    id: string
    defaultImage: string
    hoverImage: string
}

const teamMembers: TeamMember[] = [
    {
        id: "gareth",
        defaultImage: "/placeholder-9c2k9.png",
        hoverImage: "/confident-creative-director.png",
    },
    {
        id: "hamza",
        defaultImage: "/placeholder-953bo.png",
        hoverImage: "/young-man-presenting.png",
    },
    {
        id: "sharanya",
        defaultImage: "/confident-designer.png",
        hoverImage: "/senior-designer-woman.png",
    },
    {
        id: "mostafa",
        defaultImage: "/young-designer-teal.png",
        hoverImage: "/energetic-designer-jump.png",
    },
    {
        id: "sarvesh",
        defaultImage: "/placeholder-f7uv0.png",
        hoverImage: "/marketing-lead-navy-suit.png",
    },
    {
        id: "riley",
        defaultImage: "/placeholder.svg?height=400&width=300",
        hoverImage: "/placeholder.svg?height=400&width=300",
    },
]

export function MeetThePearsCarousel() {
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
        <section className="w-full">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-6xl font-bold text-foreground">Meet the Pears</h2>

                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        className="rounded-full w-12 h-12 border-2 bg-transparent"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handleNext}
                        disabled={currentIndex >= maxIndex}
                        className="rounded-full w-12 h-12 border-2"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            <div className="overflow-hidden">
                <div
                    className="flex gap-4 transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(${translateX}px)` }}
                >
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className={cn(
                                "relative flex-shrink-0 w-64 h-96 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-out",
                                hoveredCard === member.id ? "transform -translate-y-4 shadow-2xl" : "shadow-lg",
                            )}
                            onMouseEnter={() => setHoveredCard(member.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <img
                                src={hoveredCard === member.id ? member.hoverImage : member.defaultImage}
                                alt={member.id}
                                className="w-full h-full object-cover transition-opacity duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
