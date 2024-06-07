import { Router } from "express";
import asyncHandler from "express-async-handler";
import { GetStoreReviewController } from "../../features/store/review/store-review.controller";

export const storeReviewRouter = Router({ mergeParams: true })
    .get("/", asyncHandler(GetStoreReviewController));
