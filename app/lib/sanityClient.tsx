
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "cmirqaaf",
  dataset: "production",
  apiVersion: "2022-03-07", // Update to the latest API version
  useCdn: false, // Set to false to always fetch the latest data
  token:
    "skruyOxf3HhqMd6zIBGVMd1Xj1dCy7TnBBNKKSx1aRUj9pk12mVYf6kfpmvI07M7Z6pWnoyrQ4DXvkofsJL22cal4ENsAEhPOE532akuBNpzfUZ0UAJxI1zqYb0WzzaFWTvLSSDd6kiSoa1eGLMl5v7MergMDsOQrYZz02P81OK6Epzk3Iby",
});

export default client;

