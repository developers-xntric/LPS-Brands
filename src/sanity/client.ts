// lib/sanity/client.ts
import { createClient, type ClientConfig, type SanityClient } from "next-sanity";

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: true, // Faster for public content
};

export const client: SanityClient = createClient(config);
