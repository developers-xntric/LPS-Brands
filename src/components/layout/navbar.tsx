"use client"

import { ArrowUpRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import BottomArrow from "../icons/bottom-arrow"

const servicesData = {
    "Identity": [
        "Leadership Branding",
        "Corporate Branding",
        "Social Media",
        "Public Relations"
    ],
    "Communication": [
        "Creative",
        "Production",
        "Influencers",
        "Gen AI",
        "Short Form Video"
    ],
    "Experiences": [
        "Digital Marketing",
        "Website App",
        "Events",
        "Gaming"
    ]
}

const menuItems = [
    { name: "Home", link: "/" },
    { name: "Who We Are", link: "/about-us" },
    { name: "Our Industries", link: "/our-industry" },
    { name: "Our Work", link: "/our-work" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blog" },
    { name: "Careers", link: "/careers" }
]

export default function Navbar() {
    const [showServicesDropdown, setShowServicesDropdown] = useState(false)
    const [showMenuDropdown, setShowMenuDropdown] = useState(false)

    return (
        <>
            {/* Services Mega Menu Dropdown */}
            <div
                className={`fixed bottom-16 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ease-out ${showServicesDropdown
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible translate-y-4'
                    }`}
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
            >
                <div className="bg-white shadow-2xl border border-gray-100 py-12 px-16 w-[760px]" style={{
                    borderRadius: "20px 20px 0 0"
                }}>
                    <div className="grid grid-cols-3 gap-12">
                        <div className="absolute top-24 bg-black/20 w-[79%]">
                            <Image src={"/layout/hori-line.svg"} alt="" width={100} height={100} />
                        </div>
                        <div className="absolute top-24 left-[33%] bg-black/20 w-[1.5px] h-[65%]">
                        </div>
                        <div className="absolute top-24 left-[62%] bg-black/20 w-[1.3px] h-[65%]">
                        </div>
                        {Object.entries(servicesData).map(([category, items], categoryIndex) => (
                            <div key={category} className="relative">
                                <h3 className={`text-2xl font-normal text-secondary mb-9 pb-3`}>
                                    {category}
                                </h3>
                                <div className="space-y-3">
                                    {items.map((item, itemIndex) => (
                                        <Link
                                            key={item}
                                            href={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="flex items-center text-secondary gap-2 hover:text-gray-900 transition-all duration-200 group py-1 nav-hover"
                                            style={{
                                                animationDelay: `${(categoryIndex * items.length + itemIndex) * 50}ms`
                                            }}
                                        >
                                            <span className="font-normal tracking-wide text-[16px]">{item}</span>
                                            <ArrowUpRight className="w-4 h-4 text-green group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Menu Simple Dropdown */}
            <div
                className={`fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ease-out ${showMenuDropdown
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible translate-y-4'
                    }`}
                onMouseEnter={() => setShowMenuDropdown(true)}
                onMouseLeave={() => setShowMenuDropdown(false)}
            >
                <div className="bg-white shadow-2xl border border-gray-100 p-8 w-[320px]" style={{
                    borderRadius: "20px 20px 0 0"
                }}>
                    <h3 className="text-2xl font-bold text-secondary mb-4 pb-4 border-b border-black/30">
                        Menu
                    </h3>
                    <div>
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={`${item.link}`}
                                className="flex items-center gap-3 text-secondary transition-all duration-200 group py-2"
                                style={{
                                    animationDelay: `${index * 50}ms`
                                }}
                            >
                                <span className="font-normal text-[16px]">{item.name}</span>
                                <ArrowUpRight className="w-4 h-4 text-green group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
                <div className="bg-white rounded-full shadow-2xl border border-gray-100 w-[760px] px-4 py-2 flex justify-between items-center">
                    <Link
                        href="/"
                        className="text-secondary hover:text-white hover:bg-black transition-colors duration-200 font-semibold px-4 py-2 text-[16px] rounded-full font-['Exo']"
                    >
                        Home
                    </Link>

                    <div className="relative">
                        <button
                            onMouseEnter={() => setShowServicesDropdown(true)}
                            onMouseLeave={() => setShowServicesDropdown(false)}
                            className="flex items-center space-x-3 text-secondary px-6 py-3 font-semibold transition-all duration-200 text-[16px] hover:text-white hover:bg-black rounded-full arrow-main font-['Exo']"
                        >
                            <Link href={"/services"}>Services</Link>
                            <div className="w-5 h-5 bg-green rounded-full flex items-center justify-center arrow-container">
                                <BottomArrow />
                            </div>
                        </button>
                    </div>

                    <Link
                        href="/our-work"
                        className="text-secondary hover:text-white hover:bg-black transition-colors duration-200 font-semibold px-4 py-2 text-[16px] rounded-full font-['Exo']"
                    >
                        Our Work
                    </Link>

                    <Link
                        href="/about-us"
                        className="text-secondary hover:text-white hover:bg-black transition-colors duration-200 font-semibold px-4 py-2 text-[16px] rounded-full font-['Exo']"
                    >
                        Who We Are
                    </Link>

                    <div className="relative">
                        <button
                            onMouseEnter={() => setShowMenuDropdown(true)}
                            onMouseLeave={() => setShowMenuDropdown(false)}
                            className="flex hover:text-white hover:bg-black items-center space-x-3 text-secondary px-6 py-3 font-semibold transition-all duration-200 text-[16px] rounded-full font-['Exo'] arrow-main"
                        >
                            <span>Menu</span>
                            <div className="w-5 h-5 bg-green rounded-full flex items-center justify-center arrow-container">
                                <BottomArrow />
                            </div>
                        </button>
                    </div>

                    <Link
                        href="/contact-us"
                        className="bg-green text-black px-8 py-3 rounded-full transition-all duration-200 font-semibold text-[16px]  shadow-lg hover:shadow-xl transform hover:scale-105 font-['Exo']"
                    >
                        Contact Us
                    </Link>
                </div>
            </nav>

            {/* Background overlay for dropdowns */}
            {(showServicesDropdown || showMenuDropdown) && (
                <div
                    className="fixed inset-0 z-20 transition-all duration-300"
                    onClick={() => {
                        setShowServicesDropdown(false)
                        setShowMenuDropdown(false)
                    }}
                />
            )}
        </>
    )
}
