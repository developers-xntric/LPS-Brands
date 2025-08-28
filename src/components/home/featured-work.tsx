import Image from "next/image";
import Wrapper from "../layout/wrapper";
import { projects } from "@/data/home-work";
import WorkTabs from "./work-tabs";
import { Button } from "../common/button";
import Link from "next/link";

export default function FeaturedWorks() {
  return (
    <Wrapper>
      <section className="bg-[#101820] rounded-3xl lg:rounded-[60px] py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-[95%] mx-auto mb-20 xl:mb-40">
          {/* Header */}
          <div className="text-center mb-10 font-['Exo']">
            <h2 className="text-2xl md:text-4xl xl:text-6xl font-bold text-white text-green mb-4">
              A Display of Featured Works
            </h2>
            <p className="text-white lg:text-xl font-medium mb-8 max-w-3xl mx-auto">
              Our forward-thinking experts, driven by innovation and technology,
              craft brand storytelling with a deep understanding of platform
              expertise.
            </p>

            <Button text="View All Work" link="/our-work" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link
                href={`${project?.link}`}
                key={project.id}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105  ${
                  index === 1 || index === 4
                    ? "md:col-span-1 lg:col-span-1"
                    : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl bg-slate-800 ${
                    (index == 1 || index == 4) && "lg:top-14"
                  }`}
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover h-fit transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <WorkTabs />
      </section>
    </Wrapper>
  );
}
