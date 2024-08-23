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
    const filterPosts = await client.fetch(query);

    return filterPosts;
  } catch (error) {
    
  }
  
}

export default sanityQuery