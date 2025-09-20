import { eq } from "drizzle-orm";
import { task } from "../db/databaseSchema.js";
import { db } from "../db/initDb.js";
import { NotFoundError } from "../utils/AppError.js";

export const createTaskRepository = async (data) => {
  const rows = await db.insert(task).values(data).returning();

  return rows[0];
};

export const getTasksRepository = async () => {
  return await db.select().from(task);
};

export const getSingleTaskRepository = async (taskId) => {
  const rows = await db.select().from(task).where(eq(task.id, taskId));

  if (rows.length > 0) {
    return rows[0];
  } else {
    throw new NotFoundError("Task not found");
  }
};

export const updateTaskRepository = async (taskId, data) => {
  const rows = await db.select().from(task).where(eq(task.id, taskId));

  if (rows.length > 0) {
    return await db.update(task).set(data).where(eq(task.id, taskId));
  } else {
    throw new NotFoundError("Task not found");
  }
};

export const deleteTaskRepository = async (taskId) => {
  const rows = await db.select().from(task).where(eq(task.id, taskId));

  if (rows.length > 0) {
    return await db.delete(task).where(eq(task.id, taskId));
  } else {
    throw new NotFoundError("Task not found");
  }
};
