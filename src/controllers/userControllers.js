import asyncHandler from "express-async-handler";
import {
  createUserService,
  deleteUserService,
  getSingleUserService,
  getUsersService,
  updateUseService,
} from "../services/userServices.js";

export const createUser = asyncHandler(async (req, res,) => {
  const user = await createUserService(req.body);

  return res.status(201).json({status: "success", data: user});
});

export const getUsers = asyncHandler(async (req, res,) => {
  const users = await getUsersService();

  return res.status(200).json({status: "success", data: users});
});

export const getSingleUser = asyncHandler(async (req, res,) => {
  const { id: userId } = req.params;
  const user = await getSingleUserService(userId);

  return res.status(200).json({status: "success", data: user});
});

export const updateUser = asyncHandler(async (req, res,) => {
  const { id: userId } = req.params;
  await updateUseService(userId, req.body);

  return res.status(200).send("User updated successfully");
});

export const deleteUser = asyncHandler(async (req, res,) => {
    const { id: userId } = req.params;
    await deleteUserService(userId);

    return res.status(200).send("User deleted successfully");
})
