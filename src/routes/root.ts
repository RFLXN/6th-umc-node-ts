import { Router } from "express";
import { RootGetController } from "../features/root/root.controller";

export const rootRouter = Router()
    .get("/", RootGetController);
