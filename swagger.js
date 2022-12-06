const host = "http://localhost:4000";
const swaggerDefinition = {
  openapi: "3.0.1",
  info: {
    title: "AirBnb app Documentation",
    description: "",
    version: "1.0.0",
    contact: {
      email: "kefioubeid@gmail.com",
    },
  },
  servers: [
    {
      url: "http://localhost:4000",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

module.exports = {
  swaggerDefinition,
  host,
  basePath: "/api",
  apis: ["./routes/*.js"],
};
