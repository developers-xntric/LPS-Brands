export default async function sitemap() {
  const res = await fetch("https://blog.xntric.me/api/v2/blog", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    console.error("Failed to fetch blogs for sitemap");
    return [];
  }

const { blogs } = await res.json();

console.log("Blogs fetched for sitemap:", blogs);


  // ✅ Must return array of objects with url keys
  return blogs.map((blog) => ({
    url: `https://lps-me.com/blog/${blog.slug}`,
    lastModified: blog.updatedAt || new Date().toISOString(),
    changefreq: "weekly",
    priority: 0.7,
  }));
}

