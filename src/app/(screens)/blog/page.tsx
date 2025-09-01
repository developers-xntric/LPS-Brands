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

function Blog() {
  return (
    <div>
      <BlogHero id="test-ourwork" heading="Our Blogs" blog={true} bottom={false} />
      <AllBlogs />
    </div>
  );
}

export default Blog;
