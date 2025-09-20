import asyncHandler from "express-async-handler";
import { loginService, refreshService } from "../services/authServices.js";

export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const { accessToken, refreshToken } = await loginService(email, password);

    res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: true});

    return res.status(200).json({status: "success", data: {token: accessToken}});
});

export const refresh = asyncHandler(async (req, res) => {
    const { refreshToken } = req.cookies;
    const accessToken = refreshService(refreshToken);

    res.status(200).json({status: "success", data: {token: accessToken}});
});