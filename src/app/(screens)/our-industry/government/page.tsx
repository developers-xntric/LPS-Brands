import CareersHero from '@/components/careers/careers-hero'
import FirstSection from '@/components/our-industry/first-section'
import FourSection from '@/components/our-industry/four-section'
import SecondSection from '@/components/our-industry/second-section'
import ThirdSection from '@/components/our-industry/third-section'
import React from 'react'

const FinancialServices = () => {
  return (
    <div>
        <CareersHero heading='Government' text='We communicate policy and craft public trust.  At LPS, we help government institutions connect with citizens, modernize engagement, and inspire collective progress.' highlight='Government' bottom={false} />
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourSection/>
    </div>
  )
}

export default FinancialServices
