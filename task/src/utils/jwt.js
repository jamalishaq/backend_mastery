import dotenv from "dotenv";
dotenv.config({ quiet: true});
import jwt from "jsonwebtoken";
import { AuthenticationError } from "./AppError.js";

export const generateJWT = (payload, exp) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, process.env.SECRET, {expiresIn: exp}, (err, token) => {
            if (err) {
                reject(new AuthenticationError("Error authenticating"));
            } else {
                resolve(token);
            }
        });
    });
};

export const verifyJWT = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                reject(new AuthenticationError("Error authenticating"));
            } else {
                resolve(decoded);
            }
        });
    });
};