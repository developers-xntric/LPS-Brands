import Image from 'next/image'
import React from 'react'

const FirstSection = () => {
  return (
    <div className='-mt-24 mb-32'>
        <div className='w-[90%] mx-auto 2xl:max-w-[1740px]' >
            <div>
                <Image src="/our-industry/1.png" alt="Government" width={1000} height={1000} className='w-full' />
            </div>
            <div className='flex justify-between items-center my-20 '>
                <h2 className='text-[#101820] text-[60px] font-medium leading-[60px] max-w-[45%]'>What’s Trending in Government Communication?</h2>
                <p className='font-["Exo"] text-[20px] max-w-[50%] text-[#212121]'>Digital transformation is now a necessity, not a luxury.  Citizens expect real-time updates, transparency, and service accessibility. Trust-building, inclusivity, and community-first narratives are driving modern public outreach.</p>
            </div>
            <div className='grid grid-cols-2 justify-between items-center gap-5'>
              <div>
                <Image src="/our-industry/2.png" alt="Government" width={1000} height={1000} className='w-full h-full' />
              </div>
              <div className='flex flex-col  justify-end h-full 2xl:p-10 p-5' style={{
                borderRadius: '30px',
                background: 'linear-gradient(118deg, #0653EC -92.65%, rgba(6, 83, 236, 0.00) 106.83%)',
              }}>
                  <h3 className='text-[#101820] text-[28px] xl:text-[32px] font-["Exo"] mb-16 leading-8'>Industry Specific <br /> Challenges</h3>
                  <p className='font-["Exo"] text-[12px] xl:text-[18px] text-[#101820]'>Public skepticism is high — every message is met with scrutiny. Instead of transparency, bureaucratic terminology distances one. Digital speed of today is not matched by legacy systems. We have to talk to many generations with various expectations. Often lacking emotional resonance are policies and social initiatives. Private-sector criteria define public services. No more optional are trust, clarity, and relevance; they are demanded.</p>
                </div>
              </div>
            <div className='grid grid-cols-2 my-5 justify-between items-center gap-5'>
              <div className='flex flex-col  justify-end h-full 2xl:p-10 p-5' style={{
                borderRadius: '30px',
                background: 'linear-gradient(118deg, #00FC09 -71.37%, rgba(0, 252, 9, 0.00) 106.81%)',
              }}>
                  <h3 className='text-[#101820] text-[28px] xl:text-[32px] font-["Exo"] mb-16 leading-8'>Industry Specific <br /> Challenges</h3>
                  <p className='font-["Exo"] text-[12px] xl:text-[18px] text-[#101820]'>Public skepticism is high — every message is met with scrutiny. Instead of transparency, bureaucratic terminology distances one. Digital speed of today is not matched by legacy systems. We have to talk to many generations with various expectations. Often lacking emotional resonance are policies and social initiatives. Private-sector criteria define public services. No more optional are trust, clarity, and relevance; they are demanded.</p>
                </div>
                <div>
                  <Image src="/our-industry/3.png" alt="Government" width={1000} height={1000} className='w-full h-full' />
                </div>
              </div>
        </div>
    </div>
  )
}

export default FirstSection
