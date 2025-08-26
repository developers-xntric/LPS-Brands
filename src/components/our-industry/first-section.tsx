import Image from 'next/image'
import React from 'react'

const FirstSection = ({ firstImg, head1, para1,cardHead1,cardPara1,cardImg1,cardHead2,cardPara2,cardImg2 }:{ firstImg: string, head1: string, para1: string, cardHead1: string, cardPara1: string, cardImg1: string, cardHead2: string, cardPara2: string, cardImg2: string }) => {
  return (
    <div className='-mt-24 mb-32'>
        <div className='w-[90%] mx-auto 2xl:max-w-[1740px]' >
            <div>
                <Image src={firstImg} alt="Government" width={1000} height={1000} className='w-full h- rounded-[50px]' />
            </div>
            <div className='flex justify-between items-center my-20 '>
                <h2 className='text-[#101820] text-[55px] font-semibold leading-[55px] max-w-[45%]'>{head1}</h2>
                <p className='font-["Exo"] text-[20px] max-w-[50%] text-[#212121]'>{para1}</p>
            </div>
            <div className='grid grid-cols-2 justify-between items-center gap-5'>
              <div>
                <Image src={cardImg1} alt="Government" width={1000} height={1000} className='w-full h-full rounded-3xl' />
              </div>
              <div className='flex flex-col  justify-end h-full 2xl:p-10 p-5' style={{
                borderRadius: '30px',
                background: 'linear-gradient(118deg, #0653EC -92.65%, rgba(6, 83, 236, 0.00) 106.83%)',
              }}>
                  <h3 className='text-[#101820] text-[28px] xl:text-[32px] font-["Exo"] mb-10 leading-8 max-w-[50%] font-semibold'>{cardHead1}</h3>
                  <p className='font-["Exo"] text-[12px] xl:text-[18px] text-[#101820]'>{cardPara1}</p>
                </div>
              </div>
            <div className='grid grid-cols-2 my-5 justify-between items-center gap-5'>
              <div className='flex flex-col  justify-end h-full 2xl:p-10 p-5' style={{
                borderRadius: '30px',
                background: 'linear-gradient(118deg, #00FC09 -71.37%, rgba(0, 252, 9, 0.00) 106.81%)',
              }}>
                  <h3 className='text-[#101820] text-[28px] xl:text-[32px] font-["Exo"] mb-10 leading-8 max-w-[50%] font-semibold'>{cardHead2}</h3>
                  <p className='font-["Exo"] text-[12px] xl:text-[18px] text-[#101820]'>{cardPara2}</p>
                </div>
                <div>
                  <Image src={cardImg2} alt="Government" width={1000} height={1000} className='w-full h-full rounded-3xl' />
                </div>
              </div>
        </div>
    </div>
  )
}

export default FirstSection
