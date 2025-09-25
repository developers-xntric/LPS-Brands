import { BlogPost } from "@/app/page";
import AllBlogs from "@/components/blog/all-blogs";
import BlogHero from "@/components/careers/careers-hero";
import React from "react";


export const metadata = {
  title: "Marketing Insights & Trends | LPS Blog Middle East",
  description:
    "Explore expert insights, brand strategies, and digital trends shaping marketing across the Middle East with the LPS.",
  alternates: {
    canonical: "https://lps-me.com/blog",
  },
};

async function Blog() {
  const res = await fetch("https://blog.xntric.me/api/v2/blogs", {
    next: { revalidate: 60 },
  });
  const { blogs } = await res.json();

  const mappedPosts = blogs.filter(
    (post: BlogPost) => post.blogCategory?.toLowerCase() === "lps"
  );

  return (
    <div>
      <BlogHero id="test-ourwork" heading="Our Blogs" blog={true} bottom={false} />
      <AllBlogs posts={mappedPosts} />
    </div>
  );
}

export default Blog;
