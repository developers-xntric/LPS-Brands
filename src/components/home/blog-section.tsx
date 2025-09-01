"use client";
import { instagramVideos } from "@/data/blog-section";
import { Button } from "../common/button";
import BlogCarousel from "./blog-carousel";
import InstagramVideos from "./instagram-videos";

export default function BlogsSection({
  heading,
  isVideos,
}: {
  heading?: string;
  isVideos?: boolean;
}) {
  return (
    <div>
      <div className={`${heading !== "Blogs" ? "md:pb-16 pb-1 py-16": "py-16"}  mx-auto bg-[url('/home/blog-bg.png')] rounded-3xl bg-center bg-cover bg-no-repeat`}>
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row px-4 md:px-12 md:items-center md:justify-between mb-12">
          <h2 className="text-4xl font-bold text-white">
            {heading ? heading : "Blogs"}
          </h2>
          <div className="flex flex-start md:flex-end">
            <Button text="View All Blogs" link="/blog" />
          </div>
        </div>

        {/* Blog Carousel */}
        <BlogCarousel />

        {/* Instagram Videos Section */}
        {isVideos && <InstagramVideos videos={instagramVideos} />}
      </div>
    </div>
  );
}
