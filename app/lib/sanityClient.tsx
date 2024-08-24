
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: "production",
  apiVersion: "2022-03-07", // Update to the latest API version
  useCdn: false, // Set to false to always fetch the latest data
  token: process.env.SANITY_API_TOKEN!,
});

export default client;

