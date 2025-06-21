export default {
  name: "testimonials", // Unique identifier for the document type
  title: "Testimonials", // Display name in Sanity Studio
  type: "document", // Defines this schema as a document
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      // The name of the person giving the testimonial
    },

    {
      name: "position",
      type: "string",
      title: "Position",
    },
    {
      name: "feedback", // Unique identifier for the document type
      type: "text", // Type of the field, allowing for longer text input
      title: "Feedback", // Display name in Sanity Studio
    },
    {
      name: "avatar",
      type: "image",
      title: "Avatar",
      options: { hotspot: true },
      // Image field for the testimonial giver's avatar, with hotspot cropping enabled
    },
  ],
};
