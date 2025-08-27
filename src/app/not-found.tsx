import { Button } from '@/components/common/button'
import LogoLPS from '@/components/icons/lps-logo'
import Wrapper from '@/components/layout/wrapper'
import Link from 'next/link'
import React from 'react'

function NotFound() {
    return (
        <Wrapper>
            <div className="pt-4 pb-10">
                <LogoLPS />
            </div>
            <div className='2xl:max-w-[1740px] min-h-[80vh] w-[90%] text-center font-bold mx-auto text-blue text-[30px] md:text-[70px] flex flex-col items-center justify-center '>
                <div className='flex flex-col md:-space-y-'>
                    <h1>Error <span className='font-["Exo"] '>404!</span></h1>
                    <p className='leading-[40px] md:leading-[70px] lg:leading-[50px]'>Requested Page isn&apos;t found!</p>
                </div>
                <Link href={"/"} className='mt-10 md:mt-20'>
                    <Button text='Go Back To Home' bg='bg-black' />
                </Link>
            </div>
        </Wrapper>
    )
}

export default NotFound
