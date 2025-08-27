"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { X, ChevronDown, ArrowUpRight } from "lucide-react";
import { servicesData, menuItems } from "@/data/navData";

/**
 * Floating green FAB (bottom-right) -> bottom sheet with Menu + Services accordions
 * - ESC to close
 * - Body scroll lock while open
 * - Safe-area padding for iOS
 */
export default function MobileNavbar() {
    const [open, setOpen] = useState(false);
    const [openCats, setOpenCats] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        if (open) document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open]);

    useEffect(() => {
        // lock body scroll when sheet is open
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const toggleCat = (cat: string) => setOpenCats((s) => ({ ...s, [cat]: !s[cat] }));

    return (
        <>
            {/* Floating Action Button */}
            <button
                aria-expanded={open}
                aria-controls="mobile-nav-sheet"
                onClick={() => setOpen(true)}
                className="fixed md:hidden top-8 right-8 z-50 w-14 h-14 rounded-full bg-green shadow-xl flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green"
            >
                <span className="sr-only">Open menu</span>
                <div className="space-y-1.5">
                    <span className="block w-7 h-[2px] bg-black" />
                    <span className="block w-7 h-[2px] bg-black" />
                    <span className="block w-7 h-[2px] bg-black" />
                </div>
            </button>

            {/* Overlay + Bottom Sheet */}
            <div className={`fixed inset-0 z-50 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
                {/* dim background */}
                <div
                    id="mobile-nav-sheet"
                    role="dialog"
                    aria-modal="true"
                    className={`absolute inset-x-0 top-0 bg-white shadow-2xl transition-transform duration-300 will-change-transform ${open ? "translate-y-0" : "-translate-y-full"
                        } h-screen`}
                >
                    <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b">
                        <h2 className="text-3xl font-semibold">Menu</h2>
                        <button
                            onClick={() => setOpen(false)}
                            className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green"
                            aria-label="Close menu"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Main links */}
                    <nav className="px-5 pb-6">
                        <div className="grid grid-cols-1">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.link}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-between py-3 border-b border-black/10 text-secondary"
                                >
                                    <span className="text-2xl">{item.name}</span>
                                    <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>

                        {/* Services accordion */}
                        <div className="mt-4">
                            <h3 className="text-2xl font-semibold mb-2">Services</h3>
                            <div className="rounded-2xl border border-black/10 divide-y divide-black/10">
                                {Object.entries(servicesData).map(([category, items]) => (
                                    <div key={category}>
                                        <button
                                            onClick={() => toggleCat(category)}
                                            className="w-full flex items-center justify-between py-3 px-4"
                                            aria-expanded={!!openCats[category]}
                                        >
                                            <span className="text-xl">{category}</span>
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform ${openCats[category] ? "rotate-180" : ""}`}
                                            />
                                        </button>

                                        <div
                                            className={`overflow-hidden transition-[max-height] duration-300 ${openCats[category] ? "max-h-96" : "max-h-0"
                                                }`}
                                        >
                                            <ul className="px-6 pb-3 space-y-2">
                                                {items.map((item) => (
                                                    <li key={item}>
                                                        <Link
                                                            href={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                                            onClick={() => setOpen(false)}
                                                            className="flex items-center justify-between py-1.5"
                                                        >
                                                            <span className="text-[15px]">{item}</span>
                                                            <ArrowUpRight className="w-4 h-4" />
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-6">
                            <Link
                                href="/contact-us"
                                onClick={() => setOpen(false)}
                                className="inline-flex items-center justify-center w-full bg-green text-black font-semibold py-3 rounded-full shadow-lg"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
