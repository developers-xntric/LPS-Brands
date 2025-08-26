/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import type React from "react";

interface BlogPost {
  id: string;
  _id?: string;
  title: string;
  image: string;
  readMore: string;
  slug: string;
  blogCategory: string;
}

export default function BlogCarousel() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://blog.xntric.me/api/v2/blogs", {
          next: { revalidate: 60 },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const { blogs } = await res.json();
        // Map dashboard data to match the expected BlogCarouselProps structure
        const mappedPosts = blogs.map((blog: any) => ({
          id: blog._id || blog.slug,
          title: blog.title,
          slug: blog.slug,
          image: blog.bannerImageURL || "/default-blog-image.jpg",
          readMore: "Read More",
          _id: blog._id,
          blogCategory: blog.blogCategory,
        }));
        const filteredPosts = mappedPosts.filter(
          (post: BlogPost) => post.blogCategory.toLowerCase() === "lps"
        );
        setPosts(filteredPosts);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
        setPosts([]);
      }
    }
    fetchPosts();
  }, []);

  useEffect(() => {
    if (isAutoPlaying && !isDragging) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % Math.max(1, posts.length - 3));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isDragging, posts.length]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setIsAutoPlaying(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 100;
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      } else if (translateX < 0 && currentIndex < posts.length - 4) {
        setCurrentIndex((prev) => prev + 1);
      }
    }

    setTranslateX(0);
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  return (
    <div className="mb-16 overflow-hidden">
      {posts.length > 0 ? (
        <div
          ref={containerRef}
          className="relative cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex gap-5 transition-transform duration-500 ease-out relative right-40"
            style={{
              transform: `translateX(calc(-${currentIndex * 25}% + ${
                isDragging ? translateX : 0
              }px))`,
            }}
          >
            {posts.map((post, index) => {
              const visibleStart = currentIndex;
              const visibleEnd = currentIndex + 3;
              const isInView = index >= visibleStart && index <= visibleEnd;
              const relativeIndex = index - currentIndex;
              const isCenter = relativeIndex === 1 || relativeIndex === 2;
              const scaleClass = isCenter && isInView ? "h-72" : "h-56";

              return (
                <div
                  key={post.id}
                  className={`flex-shrink-0 w-[28%] px-3 transition-transform duration-500 rounded-2xl  ${
                    isCenter ? "z-10" : "z-0"
                  }`}
                >
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className={`w-full ${scaleClass} rounded-2xl object-cover`}
                      draggable={false}
                      width={600}
                      height={600}
                    />
                    <span className="text-sm text-green relative px-2 top-4">
                      Blog
                    </span>
                    <h3 className="text-white font-['Exo'] text-xl font-bold mb-3 line-clamp-2 leading-tight px-2 my-6">
                      {post.title}
                    </h3>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-white text-sm hover:text-[#2054FC] transition-colors px-2"
                    >
                      {post.readMore}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p className="text-xl font-bold text-white text-center  ">No Blogs Found</p>
      )}
    </div>
  );
}
