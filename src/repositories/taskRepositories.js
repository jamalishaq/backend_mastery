import { task } from "../db/databaseSchema.js";

export const createTaskRepository = async (data, db) => {
    return await db.insert(task).values(data).returning()[0];
};

export const getTasksRepository = async (db) => {
    return db.select().from(task);
};