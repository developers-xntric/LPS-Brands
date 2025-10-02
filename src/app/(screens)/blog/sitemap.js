export default async function sitemap() {
  const res = await fetch("https://blog.xntric.me/api/v2/blog", {
    next: { revalidate: 60 }, // revalidate every 60s
  });

  if (!res.ok) {
    console.error("Failed to fetch blogs for sitemap");
    return [];
  }

  const { blogs } = await res.json();

  return blogs.map((blog) => ({
    url: `https://lps-me.com/blog/${blog.slug}`, // same slug you use in BlogPage
    lastModified: blog.updatedAt || new Date().toISOString(),
    changefreq: "weekly",
    priority: 0.7,
  }));
}
