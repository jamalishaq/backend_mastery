import { userSchema, taskSchema } from "../config/inputSchema.js";
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
  const { error } = taskSchema.validate(req.body);

  if (error) {
    const details = formatJoiError(error);
    throw new ValidationError(details);
  } else {
    next();
  }
};