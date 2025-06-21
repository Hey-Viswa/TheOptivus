// Importing necessary types from Sanity
// Used to configure the hero section content in the CMS
export default {
  name: "hero", // Unique identifier for the document type
  title: "Hero Section", // Display name in Sanity Studio
  type: "document", // Defines this schema as a document
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      // The main heading text for the hero section
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
      // Supporting subheading text for the hero section
    },
    {
      name: "image",
      type: "image",
      title: "Hero Background Image",
      options: { hotspot: true },
      // Background image displayed in the hero section, with hotspot cropping enabled
    },
    {
      name: "cta",
      type: "string",
      title: "Call to Action",
      // Call-to-action message or label
    },
    {
      name: "buttonText",
      type: "string",
      title: "Button Text",
      // Text displayed on the call-to-action button
    },
    {
      name: "buttonLink",
      type: "url",
      title: "Button Link",
      // URL the button will navigate to
    },
  ],
};
