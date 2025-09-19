import dotenv from "dotenv";
dotenv.config();
import { user, task } from "../db/databaseSchema";

async function main() {
  const db = drizzle(process.env.DATABASE_URL);
  await seed(db, { user });
}
main();