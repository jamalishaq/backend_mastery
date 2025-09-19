import express from "express";
import { validateUser } from "../middlewares/inputValidator.js";
import { createUser, getUsers } from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.route("/")
    .post(validateUser, createUser)
    .get(getUsers)

// userRouter.route("/:id")
//     .get()
//     .patch()
//     .delete()

export default userRouter