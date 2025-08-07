import React from 'react'

const Wrapper = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        <div className='2xl:max-w-[1440px] mx-auto w-[95%]'>
            {children}
        </div>
    )
}

export default Wrapper
