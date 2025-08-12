import React from 'react'
import HoverVideoPill from './hover-video-pills'

const HeroAnimatedButtons = () => {
    return (
        <section className="container mx-auto px-4 text-center mt-3">
            <div className="mx-auto max-w-6xl">
                <h1 className="text-3xl sm:text-4xl md:text-[40px] font-medium  text-neutral-900 tracking-wide">
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
                        <span className="inline">that work for you.</span>
                    </div>
                </h1>
            </div>
        </section>
    )
}

export default HeroAnimatedButtons
