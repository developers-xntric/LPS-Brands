import React from 'react'
import { Button as B } from '../ui/button'
import { ArrowRight } from 'lucide-react'

export const Button = ({ text = "View All Work" }: { text: string }) => {
    return (
        <div className="flex justify-center items-center">
            <B className="bg-green text-black h-[50px] w-[150px] rounded-full flex items-center font-normal transition-all duration-300 hover:bg-[#2054FC] hover:text-white">
                <span className='relative top-[2px]'>{text}</span>
            </B>
            <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center cursor-pointer">
                <ArrowRight className="h-5 w-5" />
            </div>
        </div>
    )
}

