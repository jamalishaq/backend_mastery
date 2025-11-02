import { createUserRepository, deleteUserRepository, getSingleUSerRepository, getUsersRepository, updateUserRepository } from "../repositories/userRepositories.js";

export const createUserService = (data) => {
    return createUserRepository(data);
};

export const getUsersService = () => {
    return getUsersRepository();
};

export const getSingleUserService = (userId) => {
    return getSingleUSerRepository(userId);
};

export const updateUseService = (userId, data) => {
    return updateUserRepository(userId, data);
};

export const deleteUserService = (userId) => {
    return deleteUserRepository(userId);
}