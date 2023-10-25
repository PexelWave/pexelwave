import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { getPost } from "../../../../sanity/lib/utils";

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);
  return (
    <main className="prose text-white container py-16">
      <header>
        <Image
          src={post.mainImage}
          alt={post.title}
          className="w-full h-[50vh] object-cover"
          width={1080}
          height={420}
        />
        <div className="my-6 flex items-center gap-6 max-w-5xl mx-auto">
          <Image
            className="rounded-full w-[40px] h-[40px] md:w-20 md:h-20"
            src={post.author.image}
            alt={post.author.image}
            width={30}
            height={20}
            unoptimized
          />
          <div>
              <h4>{post.author.name}</h4>
            <p>
              {new Date(post.publishedAt).toDateString()}
            </p>
          </div>
        </div>
      </header>
      <section style={{ color: 'white' }} className="text-white max-w-5xl mx-auto">
        <PortableText value={post.body}/>
      </section>
    </main>
  );
};

export default BlogPost;
