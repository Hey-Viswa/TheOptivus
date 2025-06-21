import imageUrlBuilder from "@sanity/image-url";
import client from "./sanityClient";

// Create image url builder
const builder = imageUrlBuilder(client);

// Helper function for generating image URLs
export function urlFor(source) {
  return builder.image(source);
}
