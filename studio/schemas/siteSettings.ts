export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    { name: "siteTitle", type: "string", title: "Site Title" },
    { name: "metaDescription", type: "text", title: "Meta Description" },
    {
      name: "favicon",
      type: "image",
      title: "Favicon",
      options: { hotspot: true },
    },
    { name: "footerText", type: "string", title: "Footer Text" },
  ],
};
