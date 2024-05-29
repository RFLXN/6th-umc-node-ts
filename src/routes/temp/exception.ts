import { Router } from "express";
import { GetExceptionController } from "../../features/temp/exception/exception.controller";

export const exceptionRouter = Router()
    .get("/:flag", GetExceptionController);
