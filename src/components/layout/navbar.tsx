"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, ArrowUpRight } from 'lucide-react'

const servicesData = {
    Identity: [
        "Leadership Branding",
        "Corporate Branding",
        "Social Media",
        "Public Relations"
    ],
    Communication: [
        "Creative",
        "Production",
        "Influencers",
        "Gen AI",
        "Short Form Video"
    ],
    Experiences: [
        "Digital",
        "Website & Apps",
        "Events",
        "Gaming"
    ]
}

const menuItems = [
    "Home",
    "Who We Are",
    "Our Industries",
    "Our Work",
    "Services",
    "Blog",
    "Careers"
]

export default function Navbar() {
    const [showServicesDropdown, setShowServicesDropdown] = useState(false)
    const [showMenuDropdown, setShowMenuDropdown] = useState(false)

    return (
        <>
            {/* Services Mega Menu Dropdown */}
            <div
                className={`fixed bottom-24 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ease-out ${showServicesDropdown
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible translate-y-4'
                    }`}
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
            >
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 w-[820px] max-w-[90vw]">
                    <div className="grid grid-cols-3 gap-12">
                        {Object.entries(servicesData).map(([category, items], categoryIndex) => (
                            <div key={category} className="relative">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                                    {category}
                                </h3>
                                <div className="space-y-4">
                                    {items.map((item, itemIndex) => (
                                        <Link
                                            key={item}
                                            href={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="flex items-center justify-between text-gray-700 hover:text-gray-900 transition-all duration-200 group py-1"
                                            style={{
                                                animationDelay: `${(categoryIndex * items.length + itemIndex) * 50}ms`
                                            }}
                                        >
                                            <span className="font-medium text-[15px]">{item}</span>
                                            <ArrowUpRight className="w-4 h-4 text-green-500 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </Link>
                                    ))}
                                </div>
                                {/* Vertical divider */}
                                {categoryIndex < 2 && (
                                    <div className="absolute top-0 right-0 w-px h-full bg-gray-200"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Menu Simple Dropdown */}
            <div
                className={`fixed bottom-24 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ease-out ${showMenuDropdown
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible translate-y-4'
                    }`}
                onMouseEnter={() => setShowMenuDropdown(true)}
                onMouseLeave={() => setShowMenuDropdown(false)}
            >
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 w-[320px]">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
                        Menu
                    </h3>
                    <div className="space-y-6">
                        {menuItems.map((item, index) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="flex items-center justify-between text-gray-700 hover:text-gray-900 transition-all duration-200 group py-2"
                                style={{
                                    animationDelay: `${index * 50}ms`
                                }}
                            >
                                <span className="font-medium text-[16px]">{item}</span>
                                <ArrowUpRight className="w-4 h-4 text-green-500 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
                <div className="bg-white rounded-full shadow-2xl border border-gray-100 w-[920px] px-4 py-3 flex justify-between items-center">
                    <Link
                        href="/"
                        className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium px-4 py-2 text-[20px]"
                    >
                        Home
                    </Link>

                    <div className="relative">
                        <button
                            onMouseEnter={() => setShowServicesDropdown(true)}
                            onMouseLeave={() => setShowServicesDropdown(false)}
                            className="flex items-center space-x-3 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-200 text-[20px]"
                        >
                            <span>Services</span>
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                <Plus className="w-3 h-3 text-white" />
                            </div>
                        </button>
                    </div>

                    <Link
                        href="/work"
                        className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium px-4 py-2 text-[20px]"
                    >
                        Our Work
                    </Link>

                    <Link
                        href="/about"
                        className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium px-4 py-2 text-[20px]"
                    >
                        Who We Are
                    </Link>

                    <div className="relative">
                        <button
                            onMouseEnter={() => setShowMenuDropdown(true)}
                            onMouseLeave={() => setShowMenuDropdown(false)}
                            className="flex items-center space-x-3 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-200 text-[20px]"
                        >
                            <span>Menu</span>
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                <Plus className="w-3 h-3 text-white" />
                            </div>
                        </button>
                    </div>

                    <Link
                        href="/contact"
                        className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-all duration-200 font-medium text-[20px] shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        Contact Us
                    </Link>
                </div>
            </nav>

            {/* Background overlay for dropdowns */}
            {(showServicesDropdown || showMenuDropdown) && (
                <div
                    className="fixed inset-0 z-20 bg-black bg-opacity-5 backdrop-blur-sm transition-all duration-300"
                    onClick={() => {
                        setShowServicesDropdown(false)
                        setShowMenuDropdown(false)
                    }}
                />
            )}
        </>
    )
}
