import { sql } from "drizzle-orm";
import { pgTable, text, serial, check, integer, pgEnum } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["admin", "member"]);

export const user = pgTable(
  "user",
  {
    id: serial().primaryKey(),
    username: text().notNull(),
    email: text().notNull().unique(),
    password: text(),
    role: roleEnum().notNull(),
  },
  (table) => [
    check("passwordLengthCheck", sql`char_length(${table.password}) >= 8`),
  ]
);

export const task = pgTable("task", {
  id: serial().primaryKey(),
  title: text().notNull(),
  description: text().notNull(),
  user_id: integer()
    .references(() => user.id)
    .notNull(),
});
