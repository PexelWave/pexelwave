import { groq } from "next-sanity";
import { client } from "./client";
import { BlogPost } from "@/types/BlogPost";

export async function getBlogPosts() {
    return client.fetch(
        groq`*[_type == "post"]{
            _id,
            publishedAt,
            title,
            "slug": slug.current,
            "author": author->{name, "image": image.asset->url},
            "mainImage": mainImage.asset->url,
            body
        }`
    )
}

/**
 * Retrieves a blog post from a Sanity CMS using the provided slug.
 * @param slug - The slug of the blog post to fetch.
 * @returns A promise that resolves to the fetched blog post object.
 * @throws If the blog post fetch fails.
 */
export async function getPost(slug: string): Promise<BlogPost> {
    try {
      const query = groq`
        *[_type == "post" && slug.current == $slug][0]{
          _id,
          "author": author->{name, "image": image.asset->url},
          title,
          publishedAt,
          "mainImage": mainImage.asset->url,
          categories,
          body,
          "slug": slug.current
        }`;
  
      return client.fetch(query, { slug });
    } catch (error) {
      throw new Error(`Failed to fetch blog post`);
    }
  }

export async function getServices() {
  return client.fetch(
    groq`*[_type == "service"]{
      _id,
      title,
      "slug": slug.current,
      description,
      serviceFeatures
    }`
  )
}