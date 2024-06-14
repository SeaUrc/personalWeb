// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `myweb_${name}`);

export const posts = createTable(
  "post",
  {
    id: serial("id").primaryKey().notNull(),
    url: varchar("url", { length: 256 }).notNull(),
    description: varchar("description", { length: 256 }).notNull(),
    takenAt: timestamp("taken_at", { withTimezone: true }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.url),
  })
);