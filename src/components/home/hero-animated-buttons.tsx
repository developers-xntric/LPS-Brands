import React from 'react'
import HoverVideoPill from './hover-video-pills'

const HeroAnimatedButtons = () => {
    return (
        <section className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-6xl">
                <h1 className="text-3xl sm:text-4xl md:text-[60px] font-medium  text-neutral-900">
                    <span className="inline">We are a full impact agency</span>{" "}
                    <span className="inline-block align-middle">
                        <HoverVideoPill
                            label="identity"
                            videoSrc=""
                            className="mr-2"
                        />
                    </span>{" "}
                    <div className='mt-2'>
                        <span className="inline-block align-middle">
                            <HoverVideoPill
                                label="communications"
                                videoSrc=""
                                className="mr-2"
                            />
                        </span>{"and "}
                        <span className="inline-block align-middle">
                            <HoverVideoPill
                                label="experiences"
                                videoSrc=""
                            />
                        </span>{" "}
                        <span className="inline">work for you.</span>
                    </div>
                </h1>
            </div>
        </section>
    )
}

export default HeroAnimatedButtons
