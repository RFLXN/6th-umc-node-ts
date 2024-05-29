import { Router } from "express";
import { testRouter } from "./temp/test";
import { exceptionRouter } from "./temp/exception";

export const tempRouter = Router()
    .use("/test", testRouter)
    .use("/exception", exceptionRouter);
