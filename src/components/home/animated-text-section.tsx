"use client"

import { useState, useEffect } from "react"

const phrases = [
    "are unique but relevant",
    "innovate in a world of flux",
    "do not solve for the brand but for its communities",
    "blend right brain storytelling with left brain execution",
    "are not a specialist agency but a collective of specialists",
]

export default function AnimatedTextSection() {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
    const [isTranslating, setIsTranslating] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTranslating(true)

            setTimeout(() => {
                setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)

                setTimeout(() => {
                    setIsTranslating(false)
                }, 100) // Brief pause at bottom
            }, 400) // Time to translate down
        }, 3000) // Change every 3 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex items-center gap-4 text-4xl font-bold overflow-hidden">
            <span className="text-blue text-6xl">We</span>
            <span
                className={`bg-green text-blue px-4 py-2 transition-transform duration-400 ease-in-out ${isTranslating ? "transform translate-y-full" : "transform translate-y-0"
                    }`}
            >
                {phrases[currentPhraseIndex]}
            </span>
        </div>
    )
}
