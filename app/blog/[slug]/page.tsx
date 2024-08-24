import client from "@/app/lib/sanityClient";
import PostContent from "@/app/components/PostPage";

interface PostProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  if (!slug) {
    return {
      title: "Post Not Found",
      description: "The post you are looking for does not exist.",
    };
  }

  try {
    const post = await client.fetch(
      `
      *[_type == "post" && slug.current == $slug][0]{
        title,
        mainImage
      }
      `,
      { slug }
    );

    return {
      title: post.title,
      description: `Read more about ${post.title}`,
      openGraph: {
        title: post.title,
        description: `Read more about ${post.title}`,
        images: [post.mainImage?.asset?.url],
      },
    };
  } catch (error) {
    console.error("Error fetching post data:", error);
    return {
      title: "Error",
      description: "An error occurred while fetching post data.",
    };
  }
}

export default async function PostPage({ params }: PostProps) {
  const { slug } = params;

  if (!slug) {
    return <div>Error: Post slug is missing.</div>; // todo: make this a page
  }

  try {
    const post = await client.fetch(
      `
      *[_type == "post" && slug.current == $slug][0]{
        title,
        body,
        mainImage,
        tags,
        publishDate,
        slug
      }
      `,
      { slug },
      { next: { revalidate: 60 } }
    );

    return <PostContent post={post} />;
  } catch (error) {
    console.error("Error fetching post data:", error);
    return <div>Error: Unable to fetch post data.</div>; // todo: make a new page
  }
}
