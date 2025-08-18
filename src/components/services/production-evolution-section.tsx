import Image from "next/image"

export default function ProductionEvolutionSection() {
    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-secondary mb-6 font-['Exo'] max-w-5xl mx-auto">
                        Let Modern 
                        <span className="text-green"> Leadership Branding</span> Shape Your Identity as a Leader
                    </h2>
                    <div className="inline-block bg-blue-400 text-white px-6 py-3 rounded-full font-medium">
                        A Smarter, More Impactful Approach
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Text with Green Circle */}
                    <div className="relative">
                        {/* Green Circle Background */}
                        <div className="absolute -left-8 -top-8 w-32 h-32 bg-green-100 rounded-full opacity-60"></div>

                        <div className="relative z-10 bg-white p-8 rounded-lg shadow-sm">
                            <p className="text-gray-700 leading-relaxed text-base">
                                In today's dynamic marketing world, production isn't just about creating content—it's about making smart
                                decisions that unlock creative value at every budget level at the speed development demands. We've
                                developed a strategic approach that transforms constraints into creative springboards. Whether it's a
                                full-scale shoot or a lean content sprint, we tailor our strategy to maximize platform relevance,
                                cultural resonance, and ROI.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Jewelry Image */}
                    <div className="relative">
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <Image
                                src="/images/jewelry-packaging.png"
                                alt="Luxury jewelry packaging display"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
                    {/* Left - Urban Display Image */}
                    <div className="relative">
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <Image
                                src="/urban-digital-display.png"
                                alt="Digital display in urban setting"
                                width={500}
                                height={300}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Right - Text Content */}
                    <div className="relative">
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <p className="text-gray-700 leading-relaxed text-base">
                                Our strength lies in designing for efficiency—refining scripts, selecting media wisely, and optimizing
                                every frame for impact. It's how we deliver scroll-stopping content that not only looks premium, but
                                performs like it too—proving that budget boundaries don't limit ideas, they elevate them.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
