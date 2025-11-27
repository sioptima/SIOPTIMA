import swaggerJsdoc from "swagger-jsdoc";

const url = process.env.DOMAIN_URL || "http://localhost:3000"

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
        url: url,
      },
    ],
  },

  apis: [
    `./src/swagger/auth.yaml`, 
    `./src/swagger/*.yaml`, 
    `./src/swagger/**/*.yaml`, 
  ],
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;
