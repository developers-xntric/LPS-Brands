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
  const [dragOffset, setDragOffset] = useState(0);

  // responsive measurements
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [itemWidth, setItemWidth] = useState(0);
  const [gapPx, setGapPx] = useState(20); // Tailwind gap-5 = 20px

  // fetch blogs
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://blog.xntric.me/api/v2/blogs", {
          next: { revalidate: 60 },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const { blogs } = await res.json();
        const mappedPosts = blogs.map((blog: any) => ({
          id: blog._id || blog.slug,
          title: blog.title,
          slug: blog.slug,
          image: blog.bannerImageURL || "/default-blog-image.jpg",
          readMore: "Read More",
          _id: blog._id,
          blogCategory: blog.blogCategory,
        }));
        const filtered = mappedPosts.filter(
          (p: BlogPost) => p.blogCategory?.toLowerCase() === "lps"
        );
        setPosts(filtered);
      } catch (e) {
        console.error("Failed to fetch blog posts:", e);
        setPosts([]);
      }
    }
    fetchPosts();
  }, []);

  // set itemsPerView from breakpoints
  useEffect(() => {
    const setByWidth = () => {
      const w = window.innerWidth;
      // <640: 1, 640–1023: 2, 1024–1279: 3, >=1280: 4
      if (w < 640) setItemsPerView(1);
      else if (w < 1024) setItemsPerView(2);
      else if (w < 1280) setItemsPerView(3);
      else setItemsPerView(4);
    };
    setByWidth();
    window.addEventListener("resize", setByWidth);
    return () => window.removeEventListener("resize", setByWidth);
  }, []);

  // measure container width and real gap via ResizeObserver
  useEffect(() => {
    const update = () => {
      const wrapper = wrapperRef.current;
      const track = trackRef.current;
      if (!wrapper || !track) return;

      const rect = wrapper.getBoundingClientRect();
      const styles = getComputedStyle(track);
      const gap =
        parseFloat(styles.columnGap || styles.gap || `${gapPx}`) || gapPx;

      // total horizontal gaps visible = (itemsPerView - 1)
      const totalGaps = Math.max(0, itemsPerView - 1) * gap;
      const widthForCards = Math.max(0, rect.width - totalGaps);
      const perCard = itemsPerView > 0 ? widthForCards / itemsPerView : 0;

      setGapPx(gap);
      setItemWidth(perCard);
    };

    update();

    const ro = new ResizeObserver(update);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, [itemsPerView]);

  // autoplay
  const maxIndex = Math.max(0, posts.length - itemsPerView);
  useEffect(() => {
    if (!isAutoPlaying || isDragging || posts.length <= itemsPerView) return;

    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(id);
  }, [isAutoPlaying, isDragging, posts.length, itemsPerView, maxIndex]);

  // translate calculation
  const step = itemWidth + gapPx;
  const translateX = -(currentIndex * step) + dragOffset;

  // drag handlers (mouse + touch)
  const startDrag = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
    setIsAutoPlaying(false);
  };
  const moveDrag = (clientX: number) => {
    if (!isDragging) return;
    setDragOffset(clientX - startX);
  };
  const endDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = Math.max(60, itemWidth * 0.25); // responsive threshold
    if (dragOffset > threshold && currentIndex > 0) {
      setCurrentIndex((p) => p - 1);
    } else if (dragOffset < -threshold && currentIndex < maxIndex) {
      setCurrentIndex((p) => p + 1);
    }

    setDragOffset(0);
    // small delay so it doesn't immediately jump while user lifts finger
    setTimeout(() => setIsAutoPlaying(true), 1200);
  };

  const handleMouseDown = (e: React.MouseEvent) => startDrag(e.clientX);
  const handleMouseMove = (e: React.MouseEvent) => moveDrag(e.clientX);
  const handleMouseUp = () => endDrag();
  const handleMouseLeave = () => endDrag();

  const handleTouchStart = (e: React.TouchEvent) =>
    startDrag(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) =>
    moveDrag(e.touches[0].clientX);
  const handleTouchEnd = () => endDrag();

  return (
    <div className="mb-16">
      {posts.length > 0 ? (
        <>
          <div
            ref={wrapperRef}
            className="relative overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={trackRef}
              className="flex gap-5 py-2 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: isDragging ? "none" : "transform 0.5s ease-out",
              }}
            >
              {posts.map((post, idx) => {
                // compute which cards are "center-ish" for a taller look
                const midStart = Math.floor(itemsPerView / 2) - 1;
                const midEnd = midStart + 1;
                const rel = idx - currentIndex;
                const centerish =
                  itemsPerView === 1
                    ? rel === 0
                    : rel >= midStart && rel <= midEnd;

                return (
                  <div
                    key={post.id}
                    className={`flex-shrink-0 px-2 transition-transform duration-500 ${centerish ? "z-10" : "z-0"
                      }`}
                    style={{ width: `${itemWidth}px` }}
                  >
                    <div className="rounded-2xl overflow-hidden bg-transparent">
                      <Image
                        src={post.image}
                        alt={post.title}
                        className={`w-full ${centerish ? "h-72" : "h-56"
                          } rounded-2xl object-cover`}
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

          {/* Pagination dots */}
          
        </>
      ) : (
        <p className="text-xl font-bold text-white text-center">No Blogs Found</p>
      )}
    </div>
  );
}
