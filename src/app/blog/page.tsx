import React from "react";
import Image from "next/image";
import { getBlogPosts } from "../../../sanity/lib/utils";
import { BlogPost } from "@/types/BlogPost";
import Link from "next/link";

const BlogPage = async () => {
  const posts = await getBlogPosts();
  console.log(posts)
  const formatDate = (publishedAt: string) => {
    return new Date(publishedAt).toLocaleString();
  };
  return (
    <main className="container text-light-foreground mb-12">
      <header className="py-12">
      <h1 className="large-title">
        <span className="font-outline-2">Our</span> Blog Posts
      </h1>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: BlogPost) => (
          <div key={post._id} className="bg-violet-950 p-8 flex flex-col gap-2 rounded-lg">
            <Image
              className="w-full"
              src={post.mainImage}
              alt={post.title}
              width={300}
              height={375}
            />
            <h3 className="medium-title capitalize">{post.title}</h3>
            <div className="flex items-center gap-2">
            <Image
            className="rounded-full w-[40px] h-[40px]"
            src={post.author.image}
            alt={post.author.image}
            width={30}
            height={20}
          />
            <p>{post.author.name}</p>
            </div>
            <small>{formatDate(post.publishedAt)}</small>
            <Link className="btn btn-blue" href={`/blog/${post.slug}`}>Read Post</Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BlogPage;
