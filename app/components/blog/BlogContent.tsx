import React from "react";
import { urlFor } from "@/app/lib/imageUrl";
import Image from "next/image";
import Link from "next/link";
type Props = {
  post: any;
};

const BlogContent = (props: Props) => {
  const { post } = props;

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const options: any = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div className="flex gap-6 items-start max-sm:flex-wrap justify-between max-sm:justify-center">
      {post.map((post: any, index: number) => (
        <Link key={index} href={`/blog/${post.slug.current}`}>
          <div className="w-full max-w-[320px] cursor-pointer rounded-xl shadow-md hover:bg-slate-100 dark:hover:bg-slate-800 dark:bg-slate-900 transition-all">
            <div className="overflow-visible">
              <Image
                alt="Card background"
                className="object-cover w-full h-auto rounded-t-xl"
                src={urlFor(post.mainImage).url()}
                width={250} // Adjust width based on container size
                height={160} // Adjust height based on container size
                quality={75} // Lower quality slightly to reduce file size
                priority // Prioritize loading for above-the-fold images
              />
            </div>
            <div className="py-4 px-4 flex-col items-start h-[210px] sm:h-[240px] border-1 border-slate-200 dark:border-slate-600 w-full">
              <ul className="text-blue-600 flex gap-3 text-sm">
                {post.tags.map((tag: string, index: number) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
              <h2 className="font-bold max-lg:text-[14px] text-[16px] text-gray-700 dark:text-gray-200  py-2 break-words">
                {post.title}
              </h2>
              <span className="text-gray-400 text-xs pt-1">
                {formatDate(post.publishDate)}
              </span>
              <p className="text-gray-500 text-sm w-full break-all whitespace-normal overflow-hidden">
                {post.postIntro?.substring(0, 60)}...
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogContent;
