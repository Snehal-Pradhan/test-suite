import {
  integer,
  pgTable,
  uuid,
  varchar,
  pgEnum,
  index,
} from "drizzle-orm/pg-core";

export const UserRole = pgEnum("userRole", ["ADMIN", "BASIC"]);

export const UserTable = pgTable(
  "user",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name").notNull(),
    age: integer("age").notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    role: UserRole("userRole").default("BASIC").notNull(),
  },
  (table) => {
    return {
      emailIndex: index("emailIndex").on(table.email),
    };
  }
);
