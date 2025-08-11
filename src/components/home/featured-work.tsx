import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const projects = [
    {
        id: 1,
        title: "Fire Dragon Design",
        image: "/abstract-fire-dragon.png",
        category: "Brand Identity",
    },
    {
        id: 2,
        title: "Green Wave Flow",
        image: "/flowing-green-wave-pattern.png",
        category: "Motion Graphics",
    },
    {
        id: 3,
        title: "Mobile App Interface",
        image: "/orange-app-mockup.png",
        category: "UI/UX Design",
    },
    {
        id: 4,
        title: "Valentine's Vibe",
        image: "/valentines-makeup-design.png",
        category: "Campaign Design",
    },
    {
        id: 5,
        title: "Heart Lightning",
        image: "/colorful-heart-lightning.png",
        category: "Icon Design",
    },
    {
        id: 6,
        title: "Cool Treats",
        image: "/blue-dessert-design.png",
        category: "Food & Beverage",
    },
]

export default function FeaturedWorks() {
    return (
        <section className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">A Display of Featured Works</h2>
                    <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                        Our solutions recognize identity in message technologies, filling brand storytelling gap platform expertise.
                    </p>

                    <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                        View All Work
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
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
    )
}
