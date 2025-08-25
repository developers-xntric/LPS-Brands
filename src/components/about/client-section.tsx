"use client"
import Image from "next/image"
import Wrapper from "../layout/wrapper"

const brands = [
    { name: "Crocs", logo: "/about/1.webp", popupImage: "/about/11.webp" },
    { name: "Dubai", logo: "/about/2.webp", popupImage: "/about/22.webp" },
    { name: "Mentos", logo: "/about/3.webp", popupImage: "/about/33.webp" },
    { name: "Skechers", logo: "/about/4.webp", popupImage: "/about/44.webp" },
    { name: "Dolby", logo: "/about/5.webp", popupImage: "/about/55.webp" },
    { name: "NYSAA", logo: "/about/6.webp", popupImage: "/about/66.webp" },
    { name: "NYSAA", logo: "/about/6.webp", popupImage: "/about/66.webp" },
    { name: "Dolby", logo: "/about/5.webp", popupImage: "/about/55.webp" },
    { name: "Skechers", logo: "/about/4.webp", popupImage: "/about/44.webp" },
    { name: "Mentos", logo: "/about/3.webp", popupImage: "/about/33.webp" },
    { name: "Dubai", logo: "/about/2.webp", popupImage: "/about/22.webp" },
    { name: "Crocs", logo: "/about/1.webp", popupImage: "/about/11.webp" },
]

export function ClientsSection() {
    return (
        <Wrapper>
            <section className="py-16">
                <h2 className="text-4xl md:text-6xl font-bold text-black mb-10 md:mb-16">
                    Our Clients
                </h2>

                {/* allow previews to overflow outside the grid cells */}
                <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 overflow-visible">
                    {brands.map((b, i) => (
                        <div
                            key={`${b.name}-${i}`}
                            className="group relative h-24 md:h-28 rounded-2xl flex items-center justify-center"
                            tabIndex={0} /* keyboard focus also shows preview */
                        >
                            <Image
                                src={b.logo}
                                alt={`${b.name} logo`}
                                className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                                width={300}
                                height={120}
                                sizes="(max-width: 1024px) 25vw, 16vw"
                                priority={i < 6}
                            />

                            {/* Hover/Foucus preview anchored to this tile */}
                            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-3 opacity-0 scale-95 transition duration-200 z-50
                              group-hover:opacity-100 group-hover:scale-100
                              focus-within:opacity-100 focus-within:scale-100
                              group-focus-visible:opacity-100 group-focus-visible:scale-100">
                                <div className="relative w-96 max-w-[90vw] h-64 rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={b.popupImage}
                                        alt={`${b.name} showcase`}
                                        width={1000}
                                        height={1000}
                                        className="h-full w-full object-cover"
                                        sizes="500px"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Wrapper>
    )
}
