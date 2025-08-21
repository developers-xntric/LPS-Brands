"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

function AnimatedCounter({ end, duration = 2000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])

  return (
    <span className="font-bold text-4xl md:text-5xl text-blue-600">
      {count}
      {suffix}
    </span>
  )
}

export default function ImpactSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <p className="text-blue-600 font-medium text-lg">The Result</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              We make an impact through our work
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            In collaboration with Dubai Chambers for more than six year, we committed to achieving key objectives that
            included cultivating a coherent creative and social media strategy, developing compelling content, and
            enhancing brand awareness. The unification of the entity's digital experience and identity by seamlessly
            integrating multifaceted campaigns, events, activations, and built engagement with its various targeted
            business groups across its three chambers.
          </p>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-8 pt-8">
            {/* Stat 1 */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-1">
                <AnimatedCounter end={200} duration={2500} suffix="+" />
              </div>
              <p className="text-gray-700 font-medium text-sm uppercase tracking-wide">CAMPAIGNS</p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-1">
                <AnimatedCounter end={240} duration={2800} />
              </div>
              <p className="text-gray-700 font-medium text-sm uppercase tracking-wide">UNIQUE CREATIVES</p>
            </div>

            {/* Stat 3 */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-1">
                <AnimatedCounter end={25} duration={2200} suffix="+" />
              </div>
              <p className="text-gray-700 font-medium text-sm uppercase tracking-wide">EVENTS COVERED</p>
            </div>

            {/* Stat 4 */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-1">
                <AnimatedCounter end={800} duration={3000} suffix="+" />
              </div>
              <p className="text-gray-700 font-medium text-sm uppercase tracking-wide">
                AVERAGE CONVERSIONS
                <br />
                PER CAMPAIGN
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/dubai-chambers-building.png"
              alt="Dubai Chambers building with modern architecture and palm trees"
              width={600}
              height={700}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
