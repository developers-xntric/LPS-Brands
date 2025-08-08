import React from 'react'
import HoverVideoPill from './hover-video-pills'

const HeroAnimatedButtons = () => {
    return (
        <section className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-3xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-neutral-900">
                    <span className="inline">We are a full impact agency</span>{" "}
                    <span className="inline-block align-middle">
                        <HoverVideoPill
                            label="Identity"
                            videoSrc="/videos/hover-preview-2.mp4"
                            className="mr-2"
                        />
                    </span>{" "}
                    <span className="inline-block align-middle">
                        <HoverVideoPill
                            label="Communications"
                            videoSrc="/videos/hover-preview-2.mp4"
                            className="mr-2"
                        />
                    </span>{" "}
                    <span className="inline-block align-middle">
                        <HoverVideoPill
                            label="Experiences"
                            videoSrc="/videos/hover-preview-2.mp4"
                        />
                    </span>{" "}
                    <span className="inline">work for you.</span>
                </h1>
            </div>
        </section>
    )
}

export default HeroAnimatedButtons
