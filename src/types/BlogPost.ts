import { PortableTextBlock } from "sanity";

export type BlogPost = {
    _id: string;
    publishedAt: string;
    title: string;
    slug: string;
    author: {
        name: string,
        image: string
    }
    mainImage: string
    body: PortableTextBlock[];
}