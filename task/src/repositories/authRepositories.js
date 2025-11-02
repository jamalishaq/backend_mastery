import { eq } from "drizzle-orm";
import { user } from "../db/databaseSchema.js"
import { db } from "../db/initDb.js"
import { AuthenticationError } from "../utils/AppError.js";

export const loginRepository = async (email, password) => {
    const rows = await db.select().from(user).where(eq(user.email, email));

    if (rows.length === 0) {
        throw new AuthenticationError("User not registered");
    } else {
        if (rows[0].password !== password) {
            throw new AuthenticationError("Incorrect password");
        } else {
            return rows[0];
        }
    }
};