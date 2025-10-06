// src/app/(screens)/blog/sitemap.js
// Optional for type safety, but recommended

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

  // Dynamic URLs – fetch from API
  const dynamicUrls = await fetchBlogPosts();

  // Combine and return
  return [...staticUrls, ...dynamicUrls];
}

/**
 * Helper function to fetch dynamic blog post URLs from the API.
 *
 * @returns {Promise<MetadataRoute.Sitemap>} Promise resolving to an array of sitemap entries.
 */
async function fetchBlogPosts() {
  try {
    // Fetch the list of blogs from the API
    const response = await fetch("https://blog.xntric.me/api/v2/blogs", {
      next: { revalidate: 3600 }, // Revalidate every hour, adjust as needed
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: Failed to fetch blogs`);
    }

    // Assuming the API returns an array of blog objects directly, or { blogs: [...] }
    // Adjust based on actual response structure (e.g., if it's { blogs: [...] }, use data.blogs)
    const data = await response.json();
    const blogs = Array.isArray(data) ? data : data.blogs || [];
    const filteredBlogs = blogs.filter(
      (post) => post.blogCategory?.toLowerCase() === "lps"
    );
    return filteredBlogs.map((blog) => ({
      url: `https://lps-me.com/blog/${blog.slug}`,
      lastModified: new Date(
        blog.updatedAt || blog.publishedDate || blog.createdAt || new Date()
      ),
      changeFrequency: "weekly",
      priority: 0.7,
      // Optional: Add alternates for internationalization, images, etc.
      // alternates: { languages: { 'en': '...', 'es': '...' } },
      // images: [{ loc: blog.bannerImageURL || blog.imageURL }],
    }));
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
    // Return empty array on error to avoid breaking the sitemap
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
