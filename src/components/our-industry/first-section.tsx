import Image from 'next/image'
import React from 'react'

const FirstSection = () => {
  return (
    <div className='-mt-24'>
        <div className='max-w-[90%] mx-auto'>
            <div>
                <Image src="/our-industry/1.png" alt="Government" width={1000} height={1000} className='w-full' />
            </div>
            <div className=''>
                <h2>What’s Trending in Government Communication?</h2>
                <p>Digital transformation is now a necessity, not a luxury.  Citizens expect real-time updates, transparency, and service accessibility. Trust-building, inclusivity, and community-first narratives are driving modern public outreach.</p>
            </div>
        </div>
    </div>
  )
}

export default FirstSection
