import { sql } from "drizzle-orm";
import { customType, integer, text } from "drizzle-orm/sqlite-core";

export type JsonCompatible =
  | null
  | string
  | number
  | boolean
  | JsonCompatible[]
  | { [key: string]: JsonCompatible };

// Custom Types
// Custom Types
// Custom Types

export const timestamp = customType<{ data: Date; driverData: string }>({
  fromDriver: (driverValues) => new Date(driverValues),
  toDriver: (inputValues) => inputValues.toISOString(),
  dataType: () => "TIMESTAMP",
});

export const array = customType<{ data: string[]; driverData: string }>({
  fromDriver: (driverValues) => driverValues.replace(/{|}/g, "").split(","),
  toDriver: (inputValues) => `{${inputValues.join(",")}}`,
  dataType: () => "ARRAY",
});

export const json = customType<{
  data: JsonCompatible;
  driverData: string;
}>({
  fromDriver: (driverValues) => JSON.parse(driverValues),
  toDriver: (inputValues) => JSON.stringify(inputValues),
  dataType: () => "JSON",
});

// Builded Types
// Builded Types
// Builded Types

export const AUTO_INCREMENT_ID = integer("id")
  .primaryKey({ autoIncrement: true })
  .notNull()
  .unique();

export const CREATED_AT = timestamp("created_at")
  .$default(() => new Date())
  .notNull();

export const UPDATED_AT = timestamp("updated_at")
  .$onUpdate(() => new Date())
  .$default(() => new Date())
  .notNull();

export const COMMON_COLUMNS = {
  id: AUTO_INCREMENT_ID,
  createdAt: CREATED_AT,
  updatedAt: UPDATED_AT,
};
