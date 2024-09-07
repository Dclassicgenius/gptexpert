import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config({
  path: ".env.local",
});

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schemas/*.ts",
  out: "./db/migrations/drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
