import { eq } from "drizzle-orm";
import { user } from "../db/databaseSchema.js";
import { db } from "../db/initDb.js";
import { NotFoundError } from "../utils/AppError.js";

export const createUserRepository = async (data) => {
  const rows = await db.insert(user).values(data).returning();
  return rows[0];
};

export const getUsersRepository = async () => {
  return await db.select().from(user);
};

export const getSingleUSerRepository = async (userId) => {
  const rows = await db.select().from(user).where(eq(user.id, userId));
  if (rows.length > 0) {
    return rows[0];
  } else {
    throw new NotFoundError("User not found");
  }
};

export const updateUserRepository = async (userId, data) => {
  const rows = await db.select().from(user).where(eq(user.id, userId));
  if (rows.length > 0) {
    return await db.update(user).set(data).where(eq(user.id, userId));
  } else {
    throw new NotFoundError("User not found");
  }
};

export const deleteUserRepository = async (userId) => {
  const rows = await db.select().from(user).where(eq(user.id, userId));
  if (rows.length > 0) {
    return await db.delete(user).where(eq(user.id, userId));
  } else {
    throw new NotFoundError("User not found");
  }
};
