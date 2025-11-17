import type { BlogPost } from "@/types/blog";
import AllBlogs from "@/components/blog/all-blogs";
import BlogHero from "@/components/careers/careers-hero";
import { getPosts } from "@/sanity/groq";
import React from "react";

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
