"use client"

import { useEffect, useState } from "react"

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
    <span className="font-semibold font-['Exo'] text-4xl md:text-7xl text-blue">
      {count}
      {suffix}
    </span>
  )
}

export default function ImpactSection() {
  return (
    <section className="pb-16 pt-32 px-4 w-[90%] 2xl:max-w-[1740px] mx-auto">
      <div className="flex flex-col gap-12 items-start">
        {/* Left Content */}
        <div className="flex justify-between   w-full space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <p className="text-blue font-bold text-3xl">The Result</p>
            <h2 className="text-4xl md:text-[40px] font-bold text-gray-900 leading-tight">
              We make an impact through our work
            </h2>
          </div>

          {/* Description */}
          <p className="text-secondary font-['Exo'] text- leading-relaxed w-1/2">
            In collaboration with Dubai Chambers for more than six year, we committed to achieving key objectives that
            included cultivating a coherent creative and social media strategy, developing compelling content, and
            enhancing brand awareness. The unification of the entity&apos;s digital experience and identity by seamlessly
            integrating multifaceted campaigns, events, activations, and built engagement with its various targeted
            business groups across its three chambers.
          </p>

          {/* Statistics Grid */}
        </div>
        <div className="w-1/2 items-center ml-auto grid grid-cols-2 gap-5 justify-between">
          {/* Stat 1 */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-1">
              <AnimatedCounter end={200} duration={2500} suffix="+" />
            </div>
            <p className="text-secondary font-normal text-lg uppercase">CAMPAIGNS</p>
          </div>

          {/* Stat 2 */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-1">
              <AnimatedCounter end={240} duration={2800} />
            </div>
            <p className="text-secondary font-normal text-lg uppercase">UNIQUE CREATIVES</p>
          </div>

          {/* Stat 3 */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-1">
              <AnimatedCounter end={25} duration={2200} suffix="+" />
            </div>
            <p className="text-secondary font-normal text-lg uppercase">EVENTS COVERED</p>
          </div>

          {/* Stat 4 */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-1">
              <AnimatedCounter end={800} duration={3000} suffix="+" />
            </div>
            <p className="text-secondary font-normal text-lg uppercase">
              AVERAGE CONVERSIONS
              <br />
              PER CAMPAIGN
            </p>
          </div>
        </div>

      </div>
      <div className="relative">
        <div className="relative overflow-hidden shadow-2xl mt-10">
          <video
            src="/work/v1.webm" 
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            autoPlay
            loop
            muted
            playsInline
            controls
          />
        </div>
      </div>
    </section>
  )
}
