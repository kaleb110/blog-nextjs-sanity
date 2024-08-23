"use client"
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/app/lib/imageUrl";
import PostList from "./PostList";
import { portableTextComponents } from "./PortableTextComponents";
import { inter } from "./fonts/fonts";
import useSearchStore from "./additions/Zustand";
interface PostContentProps {
  post?: {
    title?: string;
    body?: any;
    mainImage?: any;
    tags?: Array<String>;
    publishDate?: string;
    slug?: {
      current: any
    }
  };
}

export default function PostContent ({ post }: PostContentProps) {
  const {filteredPosts}: any = useSearchStore()

  const imageUrl = post?.mainImage
    ? urlFor(post.mainImage).url()
    : "/default-image.jpg";
  const title = post?.title || "Untitled Post";
  const publishDate = post?.publishDate || ""
  const tags = post?.tags || [];
  const currentFilterPost = post?.slug?.current || [];
  const totalPosts = filteredPosts
    .filter(
      (currentPost: any) => currentFilterPost !== currentPost.slug.current
    )
    .slice(0, 2);

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const options: any = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div className="flex gap-4 flex-col mx-auto max-sm:px-8 sm:max-w-[60%] pb-4">
      <h1
        className={`${inter.className} text-slate-700 dark:text-slate-100 text-xl sm:text-3xl font-bold pt-3 sm:pt-6 pb-2`}
      >
        {title}
      </h1>
      <span className="text-gray-400 text-xs">{formatDate(publishDate)}</span>
      <ul className="text-blue-600 flex gap-3 text-sm">
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <Image
        src={imageUrl}
        alt={title}
        width={610}
        height={400}
        quality={75}
        priority 
        className="w-full"
      />

      <div className="text-slate-700 dark:text-slate-300 w-full max-w-full overflow-hidden break-words whitespace-normal">
        <PortableText
          value={post?.body || []}
          components={portableTextComponents}
        />
      </div>
      <div className="flex flex-col gap-4 items-center py-8">
        <div className="border-gray-400 border w-1/2"></div>
        <h1
          className={`${inter.className} dark:text-gray-300 text-gray-700 text-2xl pt-6 pb-2`}
        >
          More Posts
        </h1>
        <div className="flex justify-center gap-6">
          <PostList posts={totalPosts} />
        </div>
      </div>
    </div>
  );
}
