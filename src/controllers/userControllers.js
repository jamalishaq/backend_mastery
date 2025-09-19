import asyncHandler from "express-async-handler";
import { createUserService, getUsersService } from "../services/userServices.js";

export const createUser = asyncHandler(async (req, res, next) => {
    consoel.log("User conroller")
    const user = await createUserService(req.body, req.db);

    return res.status(201).json(user);
});

export const getUsers = asyncHandler(async (req, res, next) => {
    const users = await getUsersService(req.db);

    return res.status(200).json(users);
});