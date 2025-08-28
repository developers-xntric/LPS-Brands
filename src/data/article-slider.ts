
interface Article {
    id: number
    title: string
    image: string
    description?: string
    link?: string
}

export const articles: Article[] = [
    {
        id: 1,
        title: "From Design to Deployment: The UX Principles that Drive Engagement in MENA",
        image: "/article/a1.webp",
        link:"https://emiratesinside.net/from-design-to-deployment-the-ux-principles-that-drive-engagement-in-mena/"
    },
    {
        id: 2,
        title: "What Should You Look Out for While Searching for the Best Creative Agency in Dubai?",
        image: "/article/a2.webp",
        link:"https://thearabianpost.com/what-should-you-look-out-for-while-searching-for-the-best-creative-agency-in-dubai/"
    },
    {
        id: 3,
        title: "Content Alone Isn’t Enough: Are GCC Businesses Leveraging Social Media Enough?",
        image: "/article/a3.webp",
        link:"https://latest.thedailyguardian.com/business/content-alone-isnt-enough-are-gcc-businesses-leveraging-social-media-enough/"
    },
    {
        id: 4,
        title: "Ajmal Perfumes narrates ‘The Untold Stories’ with celebrity perfumers",
        image: "/article/a4.webp",
        link:"https://campaignme.com/ajmal-perfumes-narrates-the-untold-stories-with-celebrity-perfumers/"
    },
    {
        id: 5,
        title: "The death knell for subjectivity: Data breeds insights",
        image: "/article/a5.webp",
        link:"https://campaignme.com/data-and-creativity-the-death-knell-for-subjectivity/"
    },
    {
        id: 6,
        title: "LPS wins Wasl Group’s social media and content mandate",
        image: "/article/a6.webp",
        link:"https://campaignme.com/lps-wins-wasl-groups-social-media-and-content-mandate/"
    },
]