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
        image: "/data-tech-blue.png",
        readMore: "Read More",
    },
    {
        id: 2,
        title: "Digital Marketing Agency in Dubai SEO Optimization Strategies for Dubai",
        image: "/digital-marketing-team.png",
        readMore: "Read More",
    },
    {
        id: 3,
        title: "Programmatic SEO Guide: Strategies, Examples, and Tools",
        image: "/seo-analytics-dashboard.png",
        readMore: "Read More",
    },
    {
        id: 4,
        title: "AI-Powered Sales Development (SDR): Introducing AI-SDR",
        image: "/ai-robot-sales-presentation.png",
        readMore: "Read More",
    },
    {
        id: 5,
        title: "Data Transactions More",
        image: "/data-tech-blue.png",
        readMore: "Read More",
    },
    {
        id: 6,
        title: "Digital Marketing Agency in Dubai SEO Optimization Strategies for Dubai",
        image: "/digital-marketing-team.png",
        readMore: "Read More",
    },
]

export const instagramVideos = [
    {
        id: 1,
        thumbnail: "/gaming-colorful.png",
        url: "https://www.instagram.com/reel/C8xYzAbPqRs/",
        title: "Gaming Content",
    },
    {
        id: 2,
        thumbnail: "/tech-talk-green.png",
        url: "https://www.instagram.com/reel/C9mNpQrSdFg/",
        title: "Tech Talk",
    },
    {
        id: 3,
        thumbnail: "/design-tech.png",
        url: "https://www.instagram.com/reel/C7kLmOpRtUv/",
        title: "Design & Technology",
    },
    {
        id: 4,
        thumbnail: "/creative-abstract.png",
        url: "https://www.instagram.com/reel/C6hJkMnQwXy/",
        title: "Creative Content",
    },
]