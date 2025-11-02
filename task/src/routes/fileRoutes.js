import express from "express";
import multer from "multer";
import { uploadFile } from "../controllers/fileControllers.js";

const upload = multer({dest: "./uploads"});

const fileRouter = express.Router();

fileRouter.route("/").post(upload.single("file"), uploadFile);

export default fileRouter;