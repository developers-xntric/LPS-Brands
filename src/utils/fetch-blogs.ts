export interface BlogPost {
    id: string;
    _id?: string;
    title: string;
    image: string;
    readMore: string;
    slug: string;
    blogCategory: string;
}
export const getPosts = async () => {
    try {
        const res = await fetch("https://blog.xntric.me/api/v2/blogs", {
            next: { revalidate: 60 }, // This ensures ISR
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch blog posts: ${res.status}`);
        }

        const data = await res.json();
        const mappedPosts = data.map((blog: any) => ({
            id: blog._id || blog.slug,
            title: blog.title,
            slug: blog.slug,
            image: blog.bannerImageURL || "/default-blog-image.jpg",
            readMore: "Read More",
            _id: blog._id,
            blogCategory: blog.blogCategory,
        }));
        return mappedPosts.filter(
            (p: BlogPost) => p.blogCategory?.toLowerCase() === "lps"
        );
    } catch (error) {
        console.error("Failed to fetch blog posts:", error);
        return [];
    }
};
