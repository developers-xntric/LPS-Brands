import Image from "next/image"
import Wrapper from "../layout/wrapper"
interface HeadingProps {
    title?: string;
    highlight?: string;
    heading?: string;
    text?: string[];
    images?: string[]
}
export default function ProductionEvolutionSection({ title, highlight, heading, text, images }: HeadingProps) {

    function getHighlightedText(title: string, highlight: string) {
        const parts = title.split(new RegExp(`(${highlight})`, "gi"));
        return parts.map((part, i) =>
            part.toLowerCase() === highlight.toLowerCase() ? (
                <span key={i} className="text-green">
                    {part}
                </span>
            ) : (
                part
            )
        );
    }
    return (
        <Wrapper>
            <div className="mx-auto py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 font-['Exo'] max-w-5xl mx-auto">
                        {getHighlightedText(
                            title || "Let Modern Leadership Branding Shape Your Identity as a Leader",
                            highlight || "Leadership Branding"
                        )}
                    </h2>
                    <div className="inline-block bg-blue mt-4 text-white py-6 w-[970px] rounded-xl font-semibold text-5xl rotate-[2.2deg] font-sans hover:bg-[#00FC09] transition-all duration-300" style={{
                        alignContent: "center",
                        boxShadow: "5px 10px #000000"
                    }}>
                        {heading || "We Help You Build Your Leadership Brand"}
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 items-start">
                    {/* Left Column - Text with Green Circle */}
                    <div className="relative">
                        <div className="relative z-10 p-8 rounded-lg shadow-sm top-14">
                            <p className="text-secondary leading-7 font-medium text-lg font-['Exo']">
                                {(text && text[0]) ? text[0] : "Leadership branding is the cornerstone of how you’re seen, appreciated, and followed in the competitive environment of today, not simply a slogan. Whether your role is changemaker, entrepreneur, or executive, your own leadership brand determines your effect. Establishing a leadership brand requires establishing your beliefs, approach of communication, and special presence you provide to every room."}
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Jewelry Image */}
                    <div className="relative">
                        <div className="rounded-lg shadow-sm overflow-hidden">
                            <Image
                                src={(images && images[0]) ? images[0] : "/services/pe1.webp"}
                                alt="Luxury jewelry packaging display"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="grid lg:grid-cols-2 items-center">
                    {/* Left - Urban Display Image */}
                    <div className="relative">
                        <div className="bg-white shadow-sm overflow-hidden">
                            <Image
                                src={(images && images[1]) ? images[1] : "/services/pe2.webp"}
                                alt="Digital display in urban setting"
                                width={500}
                                height={300}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Right - Text Content */}
                    <div className="relative">
                        <div className="p-8 shadow-sm">
                            <p className="text-secondary font-medium leading-7 text-lg font-['Exo']">
                                {(text && text[1]) ? text[1] : "This goes beyond just leadership. In a society where authority is acquired by authenticity, cultural design for impact, relevance, and influence follows. A leadership brand is the junction between your view of yourself and your professional identity. It’s about regularly and honestly presenting your leadership style, beliefs, strengths, and purpose."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
