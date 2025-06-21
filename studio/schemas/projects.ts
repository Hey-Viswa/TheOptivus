import { source } from "framer-motion/client";
import { options } from "less";

export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "techStack",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      title: "Tech Stack",
    },
    {
      name: "githubUrl",
      type: "url",
      title: "GitHub URL",
    },
    {
      name: "liveUrl",
      type: "url",
      title: "Live URL",
    },
    {
      name: "image",
      type: "image",
      title: "Project Image",
      options: { hotspot: true },
    },
  ],
};
