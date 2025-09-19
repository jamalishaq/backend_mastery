import { user } from "../db/databaseSchema.js";

export const createUserRepository = async (data, db) => {
    const row = await db.insert(user).values(data).returning();
    return row[0];
};

export const getUsersRepository = async (db) => {
    return await db.select().from(user);
}