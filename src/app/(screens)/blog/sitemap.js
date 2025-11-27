import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const ALL_BLOG_SLUGS_QUERY = groq`
  *[_type == "lps_blogs" && defined(slug.current)]{
    slug,
    updatedAt,
    publishedDate,
    createdAt,
    blogCategory
  }
`;

export default async function sitemap() {
  const staticUrls = [
    {
      url: "https://lps-me.com/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];

  const dynamicUrls = await fetchBlogPosts();
  return [...staticUrls, ...dynamicUrls];
}

async function fetchBlogPosts() {
  try {
    const blogs = await client.fetch(ALL_BLOG_SLUGS_QUERY);

    return blogs.map((blog) => ({
      url: `https://lps-me.com/blog/${blog.slug.current}`,
      lastModified: new Date(
        blog.updatedAt ||
        blog.publishedDate ||
        blog.createdAt ||
        new Date()
      ),
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  } catch (error) {
    console.error("Sitemap error:", error);
    return [];
  }
}

// For large sitemaps (>50,000 URLs), optionally implement this to split into multiple files
// export async function generateSitemaps() {
//   const totalUrls = await getTotalUrlCount(); // Your logic
//   const chunks = Math.ceil(totalUrls / 50000);
//   return Array.from({ length: chunks }, (_, i) => ({ id: i }));
// }

// Then modify the default export to accept { id }
// export default async function sitemap({ id }) {
//   const start = id * 50000;
//   const urls = await fetchUrls(start, start + 50000); // Your paginated fetch
//   return urls;
// }
