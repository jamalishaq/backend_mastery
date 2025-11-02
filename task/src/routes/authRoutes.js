import express from "express";
import { login, refresh } from "../controllers/authControllers.js";
import { validateLoginCredenails } from "../middlewares/inputValidator.js";

const authRouter = express.Router();

authRouter.route("/login").post(validateLoginCredenails, login);
authRouter.route("/refresh").post(refresh);

export default authRouter;