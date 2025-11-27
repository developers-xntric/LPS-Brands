import { getPosts } from "@/sanity/groq";
export const dynamic = "force-dynamic";
export const revalidate = 0;

/**
 * Generates the sitemap for the blog section.
 * This uses Next.js's metadata route convention to automatically create /blog/sitemap.xml.
 * An array of sitemap entries.
 */
export default async function sitemap() {
  // Static URLs – replace with your actual logic if needed
  const staticUrls = [
    {
      url: "https://lps-me.com/blog", // Homepage of blog
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: "https://lps-me.com/blog/",
      lastModified: new Date("2023-01-01"), // Or fetch from your data source
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic URLs – fetch from Sanity
  const dynamicUrls = await fetchBlogPosts();

  return [...staticUrls, ...dynamicUrls];
}

/**
 * Helper function to fetch dynamic blog post URLs from the API.
 *
 * @returns {Promise<MetadataRoute.Sitemap>} Promise resolving to an array of sitemap entries.
 */
async function fetchBlogPosts() {
  try {
    const blogs = await getPosts();

    return blogs
      .filter(
        (blog) =>
          blog.blogCategory?.toLowerCase() === "lps" &&
          typeof blog.slug === "string" &&
          blog.slug.length > 0
      )
      .map((blog) => ({
        url: `https://lps-me.com/blog/${blog.slug}`,
        lastModified: new Date(
          blog.publishedDate || blog.updatedAt || blog.createdAt || Date.now()
        ),
        changeFrequency: "weekly",
        priority: 0.7,
      }));
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
    return [];
  }
}
