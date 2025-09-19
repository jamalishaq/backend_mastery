import { createUserRepository, getUsersRepository } from "../repositories/userRepositories.js";

export const createUserService = async (data, db) => {
    const user = createUserRepository(data, db);
    return user;
};

export const getUsersService = async (db) => {
    const users = getUsersRepository(db);
    return users;
}