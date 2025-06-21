export default {
  name: "about", // Unique identifier for the document type
  title: "About Section", // Display name in Sanity Studio
  type: "document", // Defines this schema as a document
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      // The main heading text for the about section
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      // Detailed description or content for the about section
    },
    {
      name: "image",
      type: "image",
      title: "About Image",
      options: { hotspot: true },
      // Image displayed in the about section, with hotspot cropping enabled
    },
    {
      name: "skills",
      type: "array", // Array of skills
      title: "Skills",
      of: [
        {
          type: "string", // Each skill is a string
        },
      ],
    },
    {
      name: "ctaText",
      type: "string",
      title: "Call to Action Text",
      // Text for the call-to-action in the about section
    },
    {
      name: "ctaLink",
      type: "url",
      title: "Call to Action Link",
      // URL for the call-to-action in the about section
    },
  ],
};
