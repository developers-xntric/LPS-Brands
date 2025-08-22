export function AboutLPS() {
    return (
        <section className="w-full py-16 px-8" style={{ backgroundColor: "#101820" }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
                    {/* Column 1 - From Social-First to 360 Impact Builders */}
                    <div
                        className="flex flex-col items-start space-y-6 lg:pr-12 lg:border-r border-r-0"
                        style={{ borderColor: "#00FC09" }}
                    >
                        <div
                            className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg border-2"
                            style={{ backgroundColor: "#00FC09", borderColor: "#00FC09", color: "#101820" }}
                        >
                            360
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-white text-2xl font-bold leading-tight">From Social-First to 360 Impact Builders</h2>
                            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                                <p>
                                    LPS Brands began its journey as a social-first marketing agency, pioneering innovative strategies in
                                    the MENA region. Over time, we evolved into a 360-degree impact builder, combining our expertise in
                                    social media with comprehensive marketing strategies to deliver unparalleled value for brands across
                                    verticals.
                                </p>
                                <p>
                                    Our evolution reflects our commitment to redefining marketing in a fast-paced world, with a focus on
                                    creating end-to-end solutions that resonate locally and globally.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 - What We Do */}
                    <div
                        className="flex flex-col items-start space-y-6 lg:px-12 lg:border-r border-r-0"
                        style={{ borderColor: "#00FC09" }}
                    >
                        <div
                            className="w-16 h-16 rounded-full flex items-center justify-center border-2"
                            style={{ backgroundColor: "#00FC09", borderColor: "#00FC09" }}
                        >
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ color: "#101820" }}
                            >
                                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor" />
                                <path d="M19 15L19.5 17.5L22 18L19.5 18.5L19 21L18.5 18.5L16 18L18.5 17.5L19 15Z" fill="currentColor" />
                                <path d="M5 15L5.5 17.5L8 18L5.5 18.5L5 21L4.5 18.5L2 18L4.5 17.5L5 15Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-white text-2xl font-bold leading-tight">What We Do</h2>
                            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                                <p>
                                    We crystallise brand identities and unlock the power of new-age media, building native presence
                                    through our 360° approach, proprietary tech, and cross-industry innovations. We captivate, and we
                                    connect to captivate. Our solutions break silos, bridging gaps imposed by conventional mindsets and
                                    outdated restrictions.
                                </p>
                                <p>
                                    Deep impact is not just a goal—it is our very reason for existence. And to achieve it, we don't rely
                                    on one, but on everyone in the chain of value creation. Our team is a collective of thinkers and
                                    doers, from both agency and non-agency worlds, working toward a singular mission.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 3 - Our Footprint */}
                    <div className="flex flex-col items-start space-y-6 lg:pl-12">
                        <div
                            className="w-16 h-16 rounded-full flex items-center justify-center border-2"
                            style={{ backgroundColor: "#00FC09", borderColor: "#00FC09" }}
                        >
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ color: "#101820" }}
                            >
                                <path
                                    d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9C15 10.1 14.1 11 13 11S11 10.1 11 9V7.5L5 7V9C5 10.1 4.1 11 3 11S1 10.1 1 9V7L7 6.5C7.9 6.4 8.7 7 8.9 7.9L9 8.5V9C9 11.2 10.8 13 13 13S17 11.2 17 9V8.5L17.1 7.9C17.3 7 18.1 6.4 19 6.5L25 7V9C25 10.1 24.1 11 23 11S21 10.1 21 9Z"
                                    fill="currentColor"
                                />
                                <ellipse cx="6" cy="16" rx="3" ry="2" fill="currentColor" />
                                <ellipse cx="18" cy="16" rx="3" ry="2" fill="currentColor" />
                                <ellipse cx="12" cy="20" rx="2" ry="1.5" fill="currentColor" />
                                <ellipse cx="12" cy="12" rx="1.5" ry="1" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-white text-2xl font-bold leading-tight">Our Footprint</h2>
                            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                                <p>Offices in Dubai, Riyadh, London, Cairo And Toronto</p>
                                <p>
                                    Delivered global campaigns for brands like Dolby, Skechers, Crocs, Ajmal Perfumes, Carrefour,
                                    Panasonic and Abbott, extending our impact across Europe, the GCC, South Asia, and the Far East.
                                </p>
                                <p>
                                    Achieved significant growth with a 50% team expansion and a track record of building iconic campaigns
                                    on the global stage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
