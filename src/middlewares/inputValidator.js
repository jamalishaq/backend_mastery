import {
  userSchema,
  taskSchema,
  routeIdSchema,
  loginCredentialsSchema,
} from "../config/inputSchema.js";
import { ValidationError } from "../utils/AppError.js";

const formatJoiError = (error) => {
  return error.details.map((detail) => ({
    field: detail.path.join("."),
    message: detail.message.replace(/["]/g, ""),
  }));
};

export const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const details = formatJoiError(error);
    throw new ValidationError("Validation failed", details);
  } else {
    next();
  }
};

export const validateTask = (req, res, next) => {
  const { error } = taskSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const details = formatJoiError(error);
    throw new ValidationError("Validation failed", details);
  } else {
    next();
  }
};

export const validateRouteId = (req, res, next) => {
  const { id } = req.params;
  console.log(req.params);
  const { error } = routeIdSchema.validate(id);

  if (error) {
    const details = formatJoiError(error);
    throw new ValidationError("Validation failed", details);
  } else {
    next();
  }
};

export const validateLoginCredenails = (req, res, next) => {
  const { error } = loginCredentialsSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const details = formatJoiError(error);
    throw new ValidationError("Validation failed", details);
  } else {
    next();
  }
};
