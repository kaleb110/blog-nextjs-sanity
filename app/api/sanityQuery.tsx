import client from '../lib/sanityClient';

const sanityQuery = async () => {
  try {
    const query = `
    *[_type == "post"] | order(publishDate desc){
      title,
      slug,
      body,
      mainImage,
      tags,
      publishDate,
      postIntro
    }
  `;
    const filterPosts = await client.fetch(query, { next: { revalidate: 60 } });

    return filterPosts;
  } catch (error: any) {
    throw new Error("error:", error)
    return <div>Post Not Found</div>
  }
  
}

export default sanityQuery