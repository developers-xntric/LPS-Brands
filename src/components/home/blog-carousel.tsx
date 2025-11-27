"use client";

/* eslint-disable */
import type { BlogCardSummary } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import type React from "react";

interface BlogCarouselProps {
  posts: BlogCardSummary[];
}

export default function BlogCarousel({ posts }: BlogCarouselProps) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // responsive measurements
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [itemsPerView, setItemsPerView] = useState(3.5);
  const [itemWidth, setItemWidth] = useState(0);
  const [gapPx, setGapPx] = useState(20);

  // set itemsPerView from breakpoints
  useEffect(() => {
    const setByWidth = () => {
      const w = window.innerWidth;
      // <640: 1, 640–1023: 2, 1024–1279: 3, >=1280: 3.5
      if (w < 640) setItemsPerView(1);
      else if (w < 1024) setItemsPerView(2);
      else if (w < 1280) setItemsPerView(3);
      else setItemsPerView(3.5);
    };
    setByWidth();
    window.addEventListener("resize", setByWidth);
    return () => window.removeEventListener("resize", setByWidth);
  }, []);

  // measure container width and real gap via ResizeObserver
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    const update = () => {
      const wrapper = wrapperRef.current;
      const track = trackRef.current;
      if (!wrapper || !track) {
        // Retry after a short delay if refs are not ready
        timeoutId = setTimeout(update, 100);
        return;
      }

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

    // Run immediately to ensure initial render
    update();

    // Debounce ResizeObserver to prevent excessive updates
    let debounceTimeout: NodeJS.Timeout | null = null;
    const debouncedUpdate = () => {
      if (debounceTimeout) clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(update, 50);
    };

    const ro = new ResizeObserver(debouncedUpdate);
    if (wrapperRef.current) ro.observe(wrapperRef.current);

    return () => {
      ro.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
      if (debounceTimeout) clearTimeout(debounceTimeout);
    };
  }, [itemsPerView, gapPx]);
  // autoplay
  const maxIndex = Math.max(0, Math.ceil(posts.length - itemsPerView));
  useEffect(() => {
    if (!isAutoPlaying || isDragging || posts.length <= itemsPerView) return;

    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(id);
  }, [isAutoPlaying, isDragging, posts.length, itemsPerView, maxIndex]);

  // translate calculation to center the midpoint of two cards
  const step = itemWidth + gapPx;
  const centerOffset =
    itemsPerView === 3.5
      ? (wrapperRef.current?.getBoundingClientRect().width || 0) / 2 -
      (itemWidth + gapPx / 2)
      : itemsPerView === 2
        ? (wrapperRef.current?.getBoundingClientRect().width || 0) / 2 -
        (itemWidth + gapPx / 2)
        : 0;
  // choose an extra offset depending on itemsPerView (breakpoints)
  let extraOffset = 0;
  if (itemsPerView === 3.5) {
    extraOffset = -500; // large screens
  } else if (itemsPerView === 3) {
    extraOffset = -150; // medium desktops
  } else if (itemsPerView === 2) {
    extraOffset = -50; // tablets
  } else {
    extraOffset = 0; // mobile
  }

  const translateX =
    -(currentIndex * step) + dragOffset + centerOffset + extraOffset;

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
                // compute which cards are centered for scaling
                const rel = idx - currentIndex;
                const centerish =
                  itemsPerView === 3.5
                    ? rel === 1 || rel === 2 // Two middle cards for 3.5 items
                    : itemsPerView === 2
                      ? rel === 0 || rel === 1 // Both cards for 2 items
                      : itemsPerView === 1
                        ? rel === 0 // Single card for mobile
                        : rel === 1; // Middle card for 3 items

                return (
                  <div
                    key={post.id}
                    className={`flex-shrink-0 px-5 md:px-2 transition-all duration-500 ${centerish ? "z-10 scale-105" : "z-0 scale-100"
                      }`}
                    style={{ width: `${itemWidth}px` }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-white text-sm 2xl:text-lg hover:text-[#2054FC] no-underline transition-colors px-2"
                    >
                      <div className="rounded-2xl overflow-hidden bg-transparent">
                        <Image
                          src={post.image}
                          alt={post.title}
                          className={`w-full md:w-full ${centerish
                            ? "h-[200px] md:h-[250px] 2xl:h-[400px]"
                            : "h-56 2xl:h-[350px]"
                            } rounded-2xl object-cover`}
                          draggable={false}
                          width={600}
                          height={600}
                        />
                        <span className="text-sm text-green relative px-2 top-4">
                          Blog
                        </span>
                        <h3 className="text-white font-['Asgard'] text-xl 2xl:text-[23px] font-bold mb-3 line-clamp-2 leading-tight px-2 my-6">
                          {post.title}
                        </h3>

                        <span className="ps-2 hover:underline">{post.readMore}</span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Pagination dots */}
        </>
      ) : (
        <p className="text-xl font-bold text-white text-center">
          No Blogs Found
        </p>
      )}
    </div>
  );
}
