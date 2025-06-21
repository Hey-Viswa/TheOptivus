export default {
  name: "contact",
  title: "Contact Info",
  type: "document",
  fields: [
    {
      name: "email",
      type: "string",
      title: "Email Address",
    },
    { name: "phone", type: "string", title: "Phone Number" },
    { name: "address", type: "string", title: "Location or Address" },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", type: "string", title: "Platform" },
            { name: "url", type: "url", title: "URL" },
          ],
        },
      ],
    },
  ],
};
