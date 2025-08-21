"use client"

import Image from "next/image"

export default function PortfolioSection() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Samsung 990 Card */}
                    <div className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br mb-6">
                            <Image src={"/work/p1.png"} alt="" width={500} height={500} className="w-full object-cover" />
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-gray-900">Chuppa Chups Parties</h3>
                            <p className="text-sm text-secondary font-medium font-['Exo']">2023 - Present</p>
                            <p className="text-secondary leading-relaxed font-['Exo']">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                    </div>

                    {/* Jollibee Card */}
                    <div className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl">
                            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br mb-6">
                                <Image src={"/work/p2.png"} alt="" width={500} height={500} className="w-full object-cover" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-gray-900">Chuppa Chups Parties</h3>
                            <p className="text-sm text-gray-600 font-medium font-['Exo']">2023 - Present</p>
                            <p className="text-secondary leading-relaxed font-['Exo']">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
