import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Wrapper from "../layout/wrapper"

export default function FeaturedWorks() {
    return (
        <Wrapper>
            <section className="bg-[#101820] rounded-3xl py-16 px-4 sm:px-6 lg:px-8 mt-32">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 font-['Exo']">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">A Display of Featured Works</h2>
                        <p className="text-slate-300 text-md font-[300] mb-8 max-w-lg mx-auto">
                            Our solutions recognize identity in message technologies, filling brand storytelling gap platform expertise.
                        </p>

                        <div className="flex justify-center items-center">
                            <Button className="bg-green text-black h-[50px] w-[150px] rounded-full flex items-center            font-semibold transition-all duration-300 hover:bg-[#2054FC] hover:text-white">
                                View All Work
                            </Button>
                            <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center cursor-pointer">
                                <ArrowRight className="h-5 w-5" />
                            </div>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl ${index === 1 || index === 4 ? "md:col-span-1 lg:col-span-1" : ""
                                    }`}
                            >
                                <div className="relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg">
                                    <div className="aspect-[4/3] relative">
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Project Info Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="text-white font-semibold text-lg mb-1">{project.title}</h3>
                                        <p className="text-slate-300 text-sm">{project.category}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}
