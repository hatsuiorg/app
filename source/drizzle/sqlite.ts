import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite/next";

import * as schema from "./schema";
export { default as migrations } from "../../drizzle/migrations";

export const expoDatabase = openDatabaseSync("expo.db");
export const sqlite = drizzle(expoDatabase, { schema });
