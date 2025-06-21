import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "xlt7ms1e",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
});

export default client;
