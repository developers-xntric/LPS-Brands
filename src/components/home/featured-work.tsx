import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Wrapper from "../layout/wrapper"
import { projects } from "@/data/home-work"
import WorkTabs from "./work-tabs"

export default function FeaturedWorks() {
    return (
        <Wrapper>
            <section className="bg-[#101820] rounded-3xl py-16 px-4 sm:px-6 lg:px-8 mt-32">
                <div className="max-w-[95%] mx-auto mb-40">
                    {/* Header */}
                    <div className="text-center mb-10 font-['Exo']">
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
                                <div className={`relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg ${(index == 1 || index == 4) && "top-14"}`}>
                                    <div className="aspect-[4/3] relative">
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <WorkTabs />
            </section>
        </Wrapper>
    )
}
