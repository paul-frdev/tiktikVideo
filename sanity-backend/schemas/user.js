export default {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "userName",
      title: "User Name",
      type: "string",
    },
    {
      name: "Image",
      title: "Image",
      type: "file",
      options: {
        hotspot: true,
      },
    },
  ],
};