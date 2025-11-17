export interface BlogPost {
  _id: string;
  title: string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  category?: string;
  blogCategory?: string;
  publishedDate?: string;
  tags?: string[];
  slug: string;

  // Images
  bannerImageURL?: string;
  imageURL?: string; // main image

  // Optional for future
  quotes?: string;
  conclusion?: string;

  subsections?: {
    subtitle: string;
    subdescription?: string[];
    lists?: {
      listTitle?: string;
      listDescription?: string;
      items?: {
        title: string;
        description?: string;
      }[];
    }[];
  }[];

  faqs?: {
    question: string;
    answer: string;
  }[];
}
