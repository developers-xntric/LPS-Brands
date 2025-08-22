"use client"
import Image from "next/image"
import { useState } from "react"

const brands = [
    { name: "Crocs", logo: "/about/1.webp", popupImage: "/about/11.webp" },
    { name: "Dubai", logo: "/about/2.webp", popupImage: "/about/22.webp" },
    { name: "Mentos", logo: "/about/3.webp", popupImage: "/about/33.webp" },
    { name: "Skechers", logo: "/about/4.webp", popupImage: "/about/44.webp" },
    { name: "Dolby", logo: "/about/5.webp", popupImage: "/about/55.webp" },
    { name: "NYSAA", logo: "/about/6.webp", popupImage: "/about/66.webp" },
]

export function ClientsSection() {
    const [hoveredBrand, setHoveredBrand] = useState<number | null>(null)

    return (
        <section className="py-20 px-8 relative">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-6xl font-bold text-black mb-16">Our Clients</h2>

                <div className="grid grid-cols-6 gap-6 relative">
                    {brands.map((brand, index) => (
                        <div
                            key={`${brand.name}-${index}`}
                            className="relative rounded-2xl h-24 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            onMouseEnter={() => setHoveredBrand(index)}
                            onMouseLeave={() => setHoveredBrand(null)}
                        >
                            <Image
                                src={brand.logo}
                                alt={`${brand.logo} popup`}
                                className="w-full h-full object-cover rounded-xl"
                                width={500}
                                height={500}
                            />
                        </div>
                    ))}

                    {hoveredBrand !== null && (
                        <div
                            className="w-[500px] h-64 absolute z-50 pointer-events-none animate-in fade-in zoom-in-95 duration-200"
                            style={{
                                top: `${Math.floor(hoveredBrand / 6) * (128 + 24) - 200}px`,
                                left: `${(hoveredBrand % 6) * (100 / 6)}%`,
                                transform: "translateX(-50%)",
                                marginLeft: `${100 / 12}%`,
                            }}
                        >
                            <div className="rounded-2xl shadow-2xl">
                                <Image
                                    src={brands[hoveredBrand].popupImage}
                                    alt={`${brands[hoveredBrand].name} popup`}
                                    className="w-full h-full object-cover rounded-xl"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
