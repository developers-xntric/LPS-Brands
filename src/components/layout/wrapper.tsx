import React from 'react'

const Wrapper = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        <div className='2xl:max-w-[1740px] mx-auto w-[90%]'>
            {children}
        </div>
    )
}

export default Wrapper
