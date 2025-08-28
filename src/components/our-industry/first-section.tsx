import Image from 'next/image'
import React from 'react'

const FirstSection = ({ firstImg, head1, para1,cardHead1,cardPara1,cardImg1,cardHead2,cardPara2,cardImg2 }:{ firstImg: string, head1: string, para1: string, cardHead1: string, cardPara1: string, cardImg1: string, cardHead2: string, cardPara2: string, cardImg2: string }) => {
  return (
    <div className='-mt-24 mb-20 md:mb-32'>
        <div className='w-[90%] mx-auto 2xl:max-w-[1740px]' >
            <div>
                <Image src={firstImg} alt="Government" width={1000} height={1000} className='w-full h-full rounded-[25px] md:rounded-[50px]' />
            </div>
            <div className='flex md:flex-row flex-col justify-between md:items-center my-10 md:my-20 '>
                <h2 className='text-[#101820] text-[30px] xl:text-[40px] 2xl:text-[55px] font-semibold leading-[33px] 2xl:leading-[55px] md:max-w-[45%]'>{head1}</h2>
                <p className='font-["Exo"] text-[15px] 2xl:text-[20px] md:max-w-[50%] text-[#212121] mt-6 md:mt-0'>{para1}</p>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2 justify-between items-center gap-5'>
              <div>
                <Image src={cardImg1} alt="Government" width={1000} height={1000} className='w-full h-full rounded-3xl' />
              </div>
              <div className='flex flex-col  justify-end lg:h-72 xl:h-full 2xl:p-10 p-5' style={{
                borderRadius: '30px',
                background: 'linear-gradient(118deg, #0653EC -92.65%, rgba(6, 83, 236, 0.00) 106.83%)',
              }}>
                  <h3 className='text-[#101820] text-[28px] xl:text-[32px] font-["Exo"] mb-10 leading-8 max-w-[50%] font-semibold'>{cardHead1}</h3>
                  <p className='font-["Exo"] text-[14px] 2xl:text-[18px] text-[#101820]'>{cardPara1}</p>
                </div>
              </div>
            <div className='grid grid-cols-1 xl:grid-cols-2 my-5 justify-between items-center gap-5'>
              <div className='flex flex-col  justify-end lg:h-72 xl:h-full 2xl:p-10 p-5' style={{
                borderRadius: '30px',
                background: 'linear-gradient(118deg, #00FC09 -71.37%, rgba(0, 252, 9, 0.00) 106.81%)',
              }}>
                  <h3 className='text-[#101820] text-[28px] xl:text-[32px] font-["Exo"] mb-10 leading-8 max-w-[80%] 2xl:max-w-[50%] font-semibold'>{cardHead2}</h3>
                  <p className='font-["Exo"] text-[14px] 2xl:text-[18px] text-[#101820]'>{cardPara2}</p>
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
