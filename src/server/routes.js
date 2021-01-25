export default [
  {
    method: "GET",
    url: "/customers",
    schema: {
      response: {
        200: {
          type: "array",
        },
      },
    },
    handler: () => import("./handlers/customers/index.js"),
  },
  {
    method: "POST",
    url: "/customers",
    schema: {
      response: {
        201: {
          type: "object",
        },
      },
    },
    handler: () => import("./handlers/customers/create.js"),
  },
];
