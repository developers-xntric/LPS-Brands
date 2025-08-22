"use client"
import { useState } from "react"

const brands = [
    { name: "Crocs", logo: "🐊", popupImage: "/images/crocs-popup.png" },
    { name: "Dubai", logo: "🏙️", popupImage: "/images/dubai-popup.png" },
    { name: "Mentos", logo: "mentos", popupImage: "/images/mentos-popup.png" },
    { name: "Skechers", logo: "SKECHERS", popupImage: "/images/skechers-popup.png" },
    { name: "Dolby", logo: "🔊 Dolby", popupImage: "/images/dolby-popup.png" },
    { name: "NYSAA", logo: "NYSAA", popupImage: "/images/nysaa-popup.png" },
    { name: "NYSAA", logo: "NYSAA", popupImage: "/images/nysaa-popup.png" },
    { name: "Dolby", logo: "🔊 Dolby", popupImage: "/images/dolby-popup.png" },
    { name: "Skechers", logo: "SKECHERS", popupImage: "/images/skechers-popup.png" },
    { name: "Mentos", logo: "mentos", popupImage: "/images/mentos-popup.png" },
    { name: "Dubai", logo: "🏙️", popupImage: "/images/dubai-popup.png" },
    { name: "Crocs", logo: "🐊", popupImage: "/images/crocs-popup.png" },
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
                            className="relative bg-gray-200 rounded-2xl h-32 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            onMouseEnter={() => setHoveredBrand(index)}
                            onMouseLeave={() => setHoveredBrand(null)}
                        >
                            <span className="text-2xl font-bold text-black">{brand.logo}</span>
                        </div>
                    ))}

                    {hoveredBrand !== null && (
                        <div
                            className="absolute z-50 pointer-events-none animate-in fade-in zoom-in-95 duration-200"
                            style={{
                                top: `${Math.floor(hoveredBrand / 6) * (128 + 24) - 200}px`,
                                left: `${(hoveredBrand % 6) * (100 / 6)}%`,
                                transform: "translateX(-50%)",
                                marginLeft: `${100 / 12}%`,
                            }}
                        >
                            <div className="bg-black rounded-2xl p-4 shadow-2xl">
                                <img
                                    src={brands[hoveredBrand].popupImage || "/placeholder.svg"}
                                    alt={`${brands[hoveredBrand].name} popup`}
                                    className="w-80 h-60 object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
