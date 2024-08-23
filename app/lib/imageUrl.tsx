import imageUrlBuilder from "@sanity/image-url";
import client from "./sanityClient";

// Initialize the image URL builder with the Sanity client
const builder = imageUrlBuilder(client);

export function urlFor(source : any) {
  return builder.image(source);
}
