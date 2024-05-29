import { Router } from "express";
import { GetTestController } from "../../features/temp/test/test.controller";

export const testRouter = Router()
    .get("/", GetTestController);
