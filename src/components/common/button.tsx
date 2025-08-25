import React from 'react'
import { Button as B } from '../ui/button'
import { ArrowRight } from 'lucide-react'

export const Button = ({ text = "View All Work", center = true, bg = "bg-white", topT = false }: { text: string, center?: boolean, bg?: string, topT?: boolean }) => {
    return (
        <div className={`flex  items-center ${center ? 'justify-center' : ''}`}>
            <B className="bg-green text-black h-[50px] px-6 rounded-full text-lg flex items-center font-normal transition-all duration-300 hover:bg-[#2054FC] hover:text-white">
                <span className={`relative ${!topT && "top-[2px]"}`}>{text}</span>
            </B>
            <div className={`w-[50px] h-[50px] ${bg} rounded-full flex justify-center items-center cursor-pointer`}>
                <ArrowRight className={`h-6 w-6 font-bold ${bg === "bg-black" ? "text-white" : "text-black"}`} />
            </div>
        </div>
    )
}

