import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION, // Update to the latest API version
  useCdn: false, // Set to false to always fetch the latest data
  token: process.env.SANITY_API_TOKEN,
});

export default client;

