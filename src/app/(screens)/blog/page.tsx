import AllBlogs from "@/components/blog/all-blogs";
import BlogHero from "@/components/careers/careers-hero";
import React from "react";

function Blog() {
  return (
    <div>
      <BlogHero heading="Our Blogs" blog={true} bottom={false} />
      <AllBlogs />
    </div>
  );
}

export default Blog;
