import React from 'react'
import HoverVideoPill from './hover-video-pills'

const HeroAnimatedButtons = () => {
    return (
        <section className="container mx-auto text-center md:px-4 mt-3">
            <div className="mx-auto md:max-w-6xl max-w-full">
                <h1 className="text-sm md:text-[40px] font-medium  text-neutral-900 tracking-wide">
                    <span className="inline">We are a full impact agency</span>{" "}
                    <span className="inline-block align-middle">
                        <HoverVideoPill
                            label="identity"
                            videoSrc="/home/Communications1.webm"
                            className="mr-2 "
                        />
                    </span>{" "}
                    <div className='mt-3'>
                        <span className="inline-block align-middle">
                            <HoverVideoPill
                                label="communications"
                                videoSrc="/home/exper-1.webm"
                                className="mr-2"
                            />
                        </span>{"and "}
                        <span className="inline-block align-middle">
                            <HoverVideoPill
                                label="experiences"
                                videoSrc="/home/IdentityAnimation1.webm"
                            />
                        </span>{" "}
                        <span className="inline-block mt-2 md:mt-0">that work for you.</span>
                    </div>
                </h1>
            </div>
        </section>
    )
}

export default HeroAnimatedButtons
