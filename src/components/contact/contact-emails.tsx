"use client";
import React from "react";
import Link from "next/link";

export default function ContactEmails() {
    return (
        <section className="py-16 md:py-24">
            <div className="2xl:max-w-[1700px] mx-auto w-[90%]">
                <h2 className="max-w-4xl text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                    Reach out to us via email to explore{" "}
                    <span className="text-[#00FC09]">business</span> collaborations or{" "}
                    <span className="text-[#00FC09]">career</span> opportunities!
                </h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Business / Partnerships */}
                    <div>
                        <a
                            href="mailto:partner@lps-me.com"
                            className="inline-block text-2xl md:text-3xl font-semibold tracking-tight border-b-2 border-[#00FC09] pb-1 hover:opacity-90"
                        >
                            partner@lps-me.com
                        </a>
                        <p className="mt-2 text-sm md:text-base text-black/70">
                            Projects, collaborations and queries.
                        </p>
                    </div>

                    {/* Careers */}
                    <div>
                        <a
                            href="mailto:hrteam@lps-me.com"
                            className="inline-block text-2xl md:text-3xl font-semibold tracking-tight border-b-2 border-[#00FC09] pb-1 hover:opacity-90"
                        >
                            hrteam@lps-me.com
                        </a>
                        <p className="mt-2 text-sm md:text-base text-black/70">
                            Join our dynamic Team
                        </p>

                        <div className="mt-4">
                            <Link href="/careers" className="inline-flex items-center gap-3 group">
                                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-[#00FC09] text-black transition group-hover:opacity-90">
                                    View open positions
                                </span>
                                <span className="grid place-items-center h-9 w-9 rounded-full bg-black text-white transition group-hover:opacity-90">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="M13 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
