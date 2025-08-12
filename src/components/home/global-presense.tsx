import React from 'react'
import Wrapper from '../layout/wrapper'
import Image from 'next/image'

const GlobalPresence = () => {
    return (
        <Wrapper>
            <div className='flex h-screen py-16'>
                <div className='relative w-[65%] bg-[url("/home/bg-grad.png")] bg-cover bg-center rounded-3xl'>
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
                <div></div>
            </div>
        </Wrapper>
    )
}

export default GlobalPresence
