import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "SIOPTIMA API",
      version: "1.0.0",
      description: "API documentation for SIOPTIMA",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },

  apis: [
    `./src/swagger/*.yaml`, 
  ],
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;
