"use client"
import { blogPosts, instagramVideos } from "@/data/blog-section"
import { Button } from "../common/button"
import Wrapper from "../layout/wrapper"
import BlogCarousel from "./blog-carousel"
import InstagramVideos from "./instagram-videos"

export default function BlogsSection() {
    return (
        <Wrapper>
            <div className="py-16 mx-auto bg-[url('/home/blog-bg.png')] rounded-3xl bg-center bg-cover bg-no-repeat">
                {/* Header */}
                <div className="flex px-12 items-center justify-between mb-12">
                    <h1 className="text-4xl font-bold text-white">Blogs</h1>
                    <Button text=" View All Blogs" />
                </div>

                {/* Blog Carousel */}
                <BlogCarousel posts={blogPosts} />

                {/* Instagram Videos Section */}
                <InstagramVideos videos={instagramVideos} />
            </div>
        </Wrapper>
    )
}
