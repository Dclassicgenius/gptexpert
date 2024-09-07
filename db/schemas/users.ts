import {
  pgTable,
  serial,
  varchar,
  text,
  date,
  pgEnum,
} from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", ["active", "inactive"]);

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  status: statusEnum("status").notNull().default("active"),
  createdAt: date("created_at").notNull().defaultNow(),
  updatedAt: date("updated_at").notNull().defaultNow(),
  fullName: text("full_name").notNull(),
  phone: varchar("phone", { length: 15 }).notNull().unique(),
  telegram: varchar("telegram", { length: 100 }).unique(),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
