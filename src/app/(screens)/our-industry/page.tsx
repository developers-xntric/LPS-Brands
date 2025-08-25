import CareersHero from '@/components/careers/careers-hero'
import IndustryListing from '@/components/our-industry/industry-listing'
import React from 'react'

const Industry = () => {
  return (
    <div>
       <CareersHero heading='Our Industries' text='We collaborate with organizations across various industries, delivering agency solutions that cut through the clutter and go beyond conventional marketing strategies.' highlight='Industries' bottom={false} />
      <IndustryListing/>
    </div>
  )
}

export default Industry
