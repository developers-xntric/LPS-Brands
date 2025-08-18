export interface InstagramVideo {
    id: number
    thumbnail: string
    url: string
    title: string
}

export interface InstagramVideosProps {
    videos: InstagramVideo[]
}
export interface BlogPost {
    id: number
    title: string
    image: string
    readMore: string
}

export interface BlogCarouselProps {
    posts: BlogPost[]
}

export const blogPosts = [
    {
        id: 1,
        title: "Data Transactions More",
        image: "/blogs/b1.webp",
        readMore: "Read More",
    },
    {
        id: 2,
        title: "Digital Marketing Agency in Dubai SEO Optimization Strategies for Dubai",
        image: "/blogs/b2.webp",
        readMore: "Read More",
    },
    {
        id: 3,
        title: "Programmatic SEO Guide: Strategies, Examples, and Tools",
        image: "/blogs/b3.webp",
        readMore: "Read More",
    },
    {
        id: 4,
        title: "AI-Powered Sales Development (SDR): Introducing AI-SDR",
        image: "/blogs/b4.webp",
        readMore: "Read More",
    },
    {
        id: 5,
        title: "Data Transactions More",
        image: "/blogs/b5.webp",
        readMore: "Read More",
    },
    {
        id: 6,
        title: "Digital Marketing Agency in Dubai SEO Optimization Strategies for Dubai",
        image: "/blogs/b6.webp",
        readMore: "Read More",
    },
    {
        id: 7,
        title: "Digital Marketing Agency in Dubai SEO Optimization Strategies for Dubai",
        image: "/blogs/b7.webp",
        readMore: "Read More",
    },
]

export const instagramVideos = [
    {
        id: 1,
        thumbnail: "/blogs/i1.webp",
        url: "https://www.instagram.com/reel/DJjRMBaNbyX/",
        title: "Gaming Content",
    },
    {
        id: 2,
        thumbnail: "/blogs/i2.webp",
        url: "https://www.instagram.com/reel/DJbKw0QxSb1/",
        title: "Tech Talk",
    },
    {
        id: 3,
        thumbnail: "/blogs/i3.webp",
        url: "https://www.instagram.com/p/DJV5zK0z4Vt/",
        title: "Design & Technology",
    },
    {
        id: 4,
        thumbnail: "/blogs/i4.webp",
        url: "https://www.instagram.com/reel/DJBWuxvTwhX/",
        title: "Creative Content",
    },
]