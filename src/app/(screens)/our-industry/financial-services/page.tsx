import CareersHero from '@/components/careers/careers-hero'
import FirstSection from '@/components/our-industry/first-section'
import React from 'react'

const FinancialServices = () => {
  return (
    <div>
        <CareersHero heading='Government' text='We communicate policy and craft public trust.  At LPS, we help government institutions connect with citizens, modernize engagement, and inspire collective progress.' highlight='Government' bottom={false} />
        <FirstSection/>
    </div>
  )
}

export default FinancialServices
