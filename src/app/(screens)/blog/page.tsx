import type { BlogPost } from "@/types/blog";
import AllBlogs from "@/components/blog/all-blogs";
import BlogHero from "@/components/careers/careers-hero";
import { getPosts } from "@/sanity/groq";
import React from "react";

// ⛔ Disable all caching globally for this page
export const dynamic = "force-dynamic";
export const revalidate = 0;
// OR use this instead:
// export const revalidate = 0;

export const metadata = {
  title: "Marketing Insights & Trends | LPS Blog Middle East",
  description:
    "Explore expert insights, brand strategies, and digital trends shaping marketing across the Middle East with the LPS.",
  alternates: {
    canonical: "https://lps-me.com/blog",
  },
};

export default async function Blog() {
  let mappedPosts: BlogPost[] = [];

  try {
    // This will now ALWAYS be fresh because caching is disabled
    const sanityBlogs = await getPosts();

    mappedPosts = sanityBlogs.filter(
      (post: BlogPost) => post.blogCategory?.toLowerCase() === "lps"
    );
  } catch (error) {
    console.error("Sanity Fetch Error:", error);
  }

  return (
    <div>
      <BlogHero id="test-ourwork" heading="Our Blogs" blog={true} bottom={false} />
      <AllBlogs posts={mappedPosts} />
    </div>
  );
}
