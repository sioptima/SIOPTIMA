import { defineConfig } from "prisma/config";
import "./server/config/envConfig"

export default defineConfig({
  schema: "server/db/prisma/schema.prisma",
  migrations: {
    path: "server/db/prisma/migrations",
    seed: "node prisma/seed.js",
  },
  engine: "classic",
  datasource: {
    url: process.env.DATABASE_URL,
    directUrl: process.env.DIRECT_URL,
  },
});
