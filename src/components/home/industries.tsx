'use client'
import React, { useState } from 'react'
import { Button as B } from '../ui/button'
import { Button } from "../common/button";
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const industries = [
  {
    name: "FMCG",
    img: "/home/1.png"
  },
  {
    name: "Food & Beverage",
    img: "/home/4.png"
  },
  {
    name: "Retail & e-commerce",
    img: "/home/2.png"
  },
  {
    name: "Beauty and Fashion",
    img: "/home/5.png"
  },
  {
    name: "Financial Services",
    img: "/home/3.png"
  },
  {
    name: "Government",
    img: "/home/6.png"
  },
  {
    name: "Travel & Transportation",
    img: "/home/10.png"
  },
  {
    name: "Entertainment and Leisure",
    img: "/home/7.png"
  },
  {
    name: "Healthcare",
    img: "/home/8.png"
  },
  {
    name: "Real Estate",
    img: "/home/9.png"
  },
]
const Industries = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  return (
    <div className='my-20'>
      <div className='2xl:max-w-[1740px] w-[95%] mx-auto'>
        <h2 className='text-[60px] 2xl:max-w-[40%] max-w-[55%] leading-[60px]'>Empowering Growth Across Diverse Industries</h2>
        <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-5 mt-20 mb-10'>
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden break-inside-avoid mb-5`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"

              />
              <Image src={industry.img} alt={industry.name} width={1000} height={1000} className='max-w-full h-auto' />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-white font-semibold text-2xl  text-center relative top-[40px]  transition-transform duration-300 group-hover:translate-y-[-50px]">
                  {industry.name}
                </h3>

                {/* Hover Button */}
                <div
                  className={`transition-all justify-center flex duration-300 ${hoveredCard === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
                    }`}
                >
                  <B
                    variant="secondary"
                    className="bg-[#FFFFFF1A] backdrop-blur-sm w-full justify-between text-white border-white/30 hover:bg-white/30 rounded-full px-6 py-5 flex items-center gap-2 "
                  >
                    <span className="text-white text-lg">Explore More</span>
                    <div className="w-6 h-6 bg-[#00FC09] rounded-full flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-white" />
                    </div>
                  </B>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button text="Connect with an expert" center={false} bg="bg-black" />
      </div>
    </div>
  )
}

export default Industries