import { loginRepository } from "../repositories/authRepositories.js";
import { generateJWT, verifyJWT } from "../utils/jwt.js";

export const loginService = async (email, password) => {
    const user = await loginRepository(email, password);
    const accessToken = await generateJWT(user, "1h");
    const refreshToken = await generateJWT(user, "10h");

    return { accessToken, refreshToken };
};

export const refreshService = async (token) => {
    const payload = await verifyJWT(token);
    const accessToken = await generateJWT(payload, "1h");

    return accessToken;
}