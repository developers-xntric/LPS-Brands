import Image from "next/image";
import Wrapper from "../layout/wrapper";

export function AboutLPS() {
    return (
        <Wrapper>
            <div className="pb-1 lg:px-4">
                <div className="w-full lg:px-10 px-4 rounded-3xl" style={{ backgroundColor: "#101820" }}>
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        {/* Column 1 - From Social-First to 360 Impact Builders */}
                        <div
                            className="flex flex-col items-start space-y-6 lg:pr-14 lg:border-r border-r-0 lg:py-12 pt-10 font-['Exo'] border-[#00FC09]/70"
                        >
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg"
                                style={{ backgroundColor: "rgba(0, 252, 9, 0.10)", color: "#101820" }}
                            >
                                <Image src={"/about/i1.png"} alt="i1" width={40} height={40} />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-white text-2xl font-bold leading-tight font-['Asgard']">From Social-First to <span className="font-['Exo']">360</span> Impact Builders</h2>
                                <div className="space-y-4 text-white lg:text-md tracking-wide font-['Exo'] leading-tight font-medium">
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
                            className="flex flex-col items-start space-y-6 lg:px-8 lg:border-r border-r-0 lg:py-12 pt-10 border-[#00FC09]/70"
                        >
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg"
                                style={{ backgroundColor: "rgba(0, 252, 9, 0.10)", color: "#101820" }}
                            >
                                <Image src={"/about/i2.png"} alt="i2" width={40} height={40} />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-white text-2xl font-bold leading-tight">What We Do</h2>
                                <div className="space-y-4 text-white lg:text-md tracking-wide font-['Exo'] leading-tight font-medium">
                                    <p>
                                        We crystallise brand identities and unlock the power of new-age media, building native presence
                                        through our 360° approach, proprietary tech, and cross-industry innovations. We captivate, and we
                                        connect to captivate. Our solutions break silos, bridging gaps imposed by conventional mindsets and
                                        outdated restrictions.
                                    </p>
                                    <p>
                                        Deep impact is not just a goal—it is our very reason for existence. And to achieve it, we don&apos;t rely
                                        on one, but on everyone in the chain of value creation. Our team is a collective of thinkers and
                                        doers, from both agency and non-agency worlds, working toward a singular mission.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Column 3 - Our Footprint */}
                        <div className="flex flex-col items-start space-y-6 lg:pl-10 lg:py-12 py-10">
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg"
                                style={{ backgroundColor: "rgba(0, 252, 9, 0.10)", color: "#101820" }}
                            >
                                <Image src={"/about/i3.png"} alt="i3" width={40} height={40} />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-white text-2xl font-bold leading-tight">Our Footprint</h2>
                                <div className="space-y-4 text-white lg:text-md tracking-wide font-['Exo'] leading-tight font-medium">
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
            </div>
        </Wrapper>
    )
}
