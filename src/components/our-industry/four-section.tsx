import React from 'react'
import { Button } from '../common/button'

const FourSection = () => {
  return (
    <div className='my-20 '>
      <div className='w-[90%] mx-auto 2xl:max-w-[1740px] bg-[url(/our-industry/7.png)] h-screen bg-cover bg-center bg-no-repeat rounded-[30px] flex justify-end items-center'>
        {/* Glassmorphism Card */}
        <div className='px-10 py-20  w-[700px] rounded-[25px] bg-white/10 backdrop-blur-md shadow-xl mr-20'>
          <h3 className='text-[50px] text-[#FFFFFF] leading-[50px]'>
            How we understand the market shift
          </h3>
          <p className='text-[24px] text-[#FFFFFF] my-10 font-light'>
            We examine the changing expectations of a hyperaware, hyperconnected public. 
            From Generation Z voters to retirees, we track digital behaviour patterns among 
            different citizen groups. We examine worldwide civic tech, e-governance, and 
            citizen involvement tools trends.
          </p>
          <p className='text-[24px] text-[#FFFFFF] my-10 font-light'>
            Monitoring the changes in public attitude, trust, and participation across several 
            media, we investigate how behavioural science can be in line with policy 
            communication. We note where people search for information and their expected speed.
          </p>
          <Button text='Connect with an expert' center={false} bg='bg-black' />
        </div>
      </div>
    </div>
  )
}

export default FourSection
