import { Router } from "express";
import { storeReviewRouter } from "./store/review";

export const storeRouter = Router()
    .use("/:storeId/review", storeReviewRouter);
