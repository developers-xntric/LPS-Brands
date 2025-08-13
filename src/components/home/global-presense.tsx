import React from 'react'
import Wrapper from '../layout/wrapper'
import Image from 'next/image'

const data = [{
    image: "/home/a1.webp",
    heading: "2024",
    text: "Campaign Middle East Influencer Management Team of the Year"
}, {
    image: "/home/a2.webp",
    heading: "2023",
    text: "Shortlisted amongst the Top Five Social Media Agencies in the globe; the sole MENA agency to be included in the category"
}, {
    image: "/home/a3.webp",
    heading: "2023",
    text: "Social content partners for Visit Dubai; Created global virality for the brand with CGI video storytelling"
}, {
    image: "/home/a4.webp",
    heading: "2023",
    text: "Registered Successes for strategic brand organizations like Dubai Chambers, Liva Insurance, Dubai SIlicon Oasis"
}, {
    image: "/home/a5.webp",
    heading: "2023",
    text: "An award-winning video production team from idea to execution to last mile adaptations; with experience across BtoC and BtoB sectors"
}, {
    image: "/home/a6.webp",
    heading: "2022",
    text: "Built products for new age platforms - game streaming, short form videos and live commerce with successful brand adoption"
}]

const GlobalPresence = () => {
    return (
        <Wrapper>
            <div className='flex justify-between py-16'>
                <div className='relative w-[61%] bg-[url("/home/bg-grad.png")] bg-cover bg-center h-[650px] rounded-3xl'>
                    <Image src={'/home/zig-zag.png'} alt='' width={200} height={200} className='absolute top-10 -right-14' />
                    <div className='relative w-[85%] mx-auto h-[65%] mt-20 flex gap-10'>
                        <div className='w-[200px]'>
                            <h2 className='text-5xl'>
                                Global Presence
                            </h2>
                            <p className='text-xl font-medium'>
                                We proudly serve clients across multiple regions
                            </p>
                        </div>
                        <div className='w-[100%] left-[33%] absolute inset-0'>
                            <div>
                                <Image src={'/home/Egypt.webp'} alt='Cities' width={150} height={150} className='inline-block' />
                                <Image src={'/home/Canada.webp'} alt='Cities' width={220} height={250} className='inline-block relative top-10' />
                            </div>
                            <div className='relative right-[26.8%]'>
                                <Image src={'/home/Saudi.webp'} alt='Cities' width={200} height={200} className='inline-block relative bottom-14' />
                                <Image src={'/home/UAE.webp'} alt='Cities' width={230} height={250} className='inline-block' />
                                <Image src={'/home/UK.webp'} alt='Cities' width={200} height={200} className='inline-block relative bottom-10' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[32%]'>
                    <h2 className='text-center text-5xl font-["Exo"] font-[700]'>Awards</h2>
                </div>
            </div>
        </Wrapper>
    )
}

export default GlobalPresence
