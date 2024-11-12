import { createClient } from "contentful";

export const createContentClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
};

const client = createContentClient();

export const getBlogPosts = async () => {
  const response = await client.getEntries({
    content_type: "blog",
  });
  return response.items;
};

export const getNav = async () => {
  const response = await client.getEntries({
    content_type: "websiteNavbar",
  });
  return response.items[0];
};

export const getFeature = async () => {
  const response = await client.getEntries({
    content_type: "featured",
  });
  return response.items;
};
