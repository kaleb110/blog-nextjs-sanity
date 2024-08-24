import CodeBlock from "./CodeBlock";
import Image from "next/image";
import { urlFor } from "../lib/imageUrl";

export const portableTextComponents = {
  types: {
    code: ({
      value,
    }: {
      value: {
        code: string;
        language: string;
        highlightedLines?: number[];
      };
    }) => {
      return <CodeBlock language={value.language}>{value.code}</CodeBlock>;
    },
    image: ({ value }: any) => (
      <Image
        src={urlFor(value).url() || "/default-image.jpg"}
        alt={value.alt || "Image"}
        width={600}
        height={400}
        quality={100}
        className="w-full my-4"
        priority
      />
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold pt-3 pb-2">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-xl  font-semibold pt-3 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-lg  font-medium pt-3 pb-2">
        {children}
      </h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="italic border-l-4 border-gray-300 dark:border-gray-600 pl-4 py-2 mt-4 mb-4 text-lg">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="text-lg  py-2">
        {children}
      </p>
    ),
    ul: ({ children }: any) => (
      <ul className="list-disc pl-5 py-2">
        {children}
      </ul>
    ),
    ol: ({ children }: any) => (
      <ol className="list-decimal pl-5 py-2 ">
        {children}
      </ol>
    ),
    li: ({ children }: any) => (
      <li className="py-1">{children}</li>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const href =
        value.href.startsWith("http://") || value.href.startsWith("https://")
          ? value.href
          : `https://${value.href}`;

      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700 dark:hover:text-blue-400"
        >
          {children}
        </a>
      );
    },
  },
};
