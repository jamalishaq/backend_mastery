import express from "express";
import { validateRouteId, validateUser } from "../middlewares/inputValidator.js";
import { createUser, deleteUser, getSingleUser, getUsers, updateUser } from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.route("/")
    .post(validateUser, createUser)
    .get(getUsers)

userRouter.route("/:id")
    .get(validateRouteId, getSingleUser)
    .patch(validateRouteId, updateUser)
    .delete(validateRouteId, deleteUser)

export default userRouter