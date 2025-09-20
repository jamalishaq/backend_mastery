import asyncHandler from "express-async-handler";
import { AuthenticationError, AuthorizationError } from "../utils/AppError.js";
import { verifyJWT } from "../utils/jwt.js";

export const authenticate = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new AuthenticationError("Missing or Invalid Authorization Header");
  }

  const token = authHeader.split(" ")[1];

  const decoded = await verifyJWT(token);

  req.user = decoded;

  next();
});

export const verifyRole = (allowedRoles) => {
  return (req, res, next) => {
    const role = req.user.role;

    if (!allowedRoles.includes(role)) {
      const err = new AuthorizationError(
        "You are not authorized to perform this operation. Reach out to your admin"
      );
      next(err);
    }

    next();
  };
};
