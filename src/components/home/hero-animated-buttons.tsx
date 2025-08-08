import React from 'react'
import HoverVideoPill from './hover-video-pills'

const HeroAnimatedButtons = () => {
    return (
        <main className="min-h-screen bg-gradient-to-b from-lime-50 to-white">
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="mx-auto max-w-5xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-neutral-900">
                        <span className="inline">We are a full impact agency</span>{" "}
                        <span className="inline-block align-middle">
                            <HoverVideoPill
                                label="Identity"
                                videoSrc="/videos/hover-preview-2.mp4"
                                className="mr-2"
                            />
                        </span>{" "}
                        <span className="inline">that</span>{" "}
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

                    <p className="mt-6 text-neutral-600 max-w-2xl">
                        Hover or tap a pill: it expands into a rounded video preview and the label/icon fade out so the button isn&apos;t visible during preview.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Simple demo block of the pill by itself */}
                    <div className="rounded-2xl border bg-white p-6">
                        <div className="text-sm font-medium text-neutral-500 mb-3">Standalone pill</div>
                        <HoverVideoPill label="Brand Strategy" videoSrc="/videos/hover-preview-2.mp4" />
                    </div>

                    <div className="rounded-2xl border bg-white p-6">
                        <div className="text-sm font-medium text-neutral-500 mb-3">Longer label</div>
                        <HoverVideoPill label="Content & Social Communications" videoSrc="/videos/hover-preview-2.mp4" />
                    </div>

                    <div className="rounded-2xl border bg-white p-6">
                        <div className="text-sm font-medium text-neutral-500 mb-3">Compact</div>
                        <HoverVideoPill label="UX" videoSrc="/videos/hover-preview-2.mp4" compact />
                    </div>
                </div>
            </section>

            <footer className="py-10 text-center text-sm text-neutral-500">
                Tip: We use muted autoPlay and playsInline for reliable autoplay behavior on hover/tap. See Next.js video
                guidance for details. [^1][^2]
            </footer>
        </main>
    )
}

export default HeroAnimatedButtons
