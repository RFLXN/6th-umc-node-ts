import { Router } from "express";
import { SignUpController } from "../features/user/user.controller";
import asyncHandler from "express-async-handler";

export const userRouter = Router()
    .post("/signup", asyncHandler(SignUpController));
