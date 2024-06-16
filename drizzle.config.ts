import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  driver: "expo",
  out: "./drizzle",
  schema: "./source/drizzle/schema.ts",
});
