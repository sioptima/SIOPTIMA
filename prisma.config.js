import { defineConfig } from "prisma/config";
import "./src/server/config/envConfig"

export default defineConfig({
  schema: "src/server/db/prisma/schema.prisma",
  migrations: {
    path: "src/server/db/prisma/migrations",
    seed: "node src/server/db/prisma/seed.js",
  },
  engine: "classic",
  datasource: {
    url: process.env.DATABASE_URL,
    directUrl: process.env.DIRECT_URL,
  },
});
