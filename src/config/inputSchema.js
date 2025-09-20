import Joi from "joi";

export const userSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  role: Joi.string().required(),
});

export const taskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  user_id: Joi.number().integer().required(),
});

export const routeIdSchema = Joi.number().integer().required();

export const loginCredentialsSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});
