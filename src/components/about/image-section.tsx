import React from 'react'
import Wrapper from '../layout/wrapper'
import Image from 'next/image'

const ImageSection = () => {
    return (
        <Wrapper>
            <div className='w-full py-16 pt-0'>
                <Image src={"/about/s2.webp"} alt='' width={1500} height={700} className='w-[90%] rounded-3xl mx-auto' />
                <p className='lg:text-xl font-["Exo"] max-w-5xl text-center mx-auto font-medium mt-14'>In an ever-changing world, we stay ahead by embracing change, challenging conventions, and constantly innovating across platforms, industries, and technologies. In a world dominated by sameness, where agencies often replicate the familiar, LPS Brands breaks free—crafting narratives and strategies that are as memorable, bold, and unique as the pear itself.
                </p>
            </div>
        </Wrapper>
    )
}

export default ImageSection
