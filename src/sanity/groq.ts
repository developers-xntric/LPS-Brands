// lib/sanity/groq.ts
import { groq } from "next-sanity";
import { client } from "./client";
import { BlogPost } from "@/types/blog";

export const POSTS_QUERY = groq`
*[_type == "lps_blogs"] | order(publishedDate desc){
  _id,
  title,
  description,
  metaTitle,
  metaDescription,
  publishedDate,
  tags,
  category,
  blogCategory,
  "slug": slug.current,

  // Image URLs
  "bannerImageURL": bannerImage.asset->url,
  "imageURL": image.asset->url
}
`;

export async function getPosts(): Promise<BlogPost[]> {
  try {
    const result = await client.fetch<BlogPost[]>(POSTS_QUERY);
    return result;
  } catch (error) {
    console.error("Error fetching Sanity posts:", error);
    return [];
  }
}

// ===============================
// DETAIL PAGE QUERY (single blog)
// ===============================
const BLOG_BY_SLUG_QUERY = groq`
*[_type == "lps_blogs" && slug.current == $slug][0]{
  _id,
  title,
  description,
  metaTitle,
  metaDescription,
  publishedDate,
  category,
  blogCategory,
  tags,
  "slug": slug.current,

  // Banner Image
  "bannerImageURL": bannerImage.asset->url,

  // Full detailed content
  conclusion,
  quotes,
  subsections[]{
    subtitle,
    subdescription[],
    lists[]{
      listTitle,
      listDescription,
      items[]{
        title,
        description
      }
    }
  },
  faqs[]{
    question,
    answer
  }
}
`;

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    return await client.fetch(BLOG_BY_SLUG_QUERY, { slug } , { cache: "no-store" });
  } catch (error) {
    console.error("Error fetching single post:", error);
    return null;
  }
}