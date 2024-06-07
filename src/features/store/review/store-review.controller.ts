import { Request, Response } from "express";
import { GetStoreReviewService } from "./store-review.service";

export async function GetStoreReviewController(req: Request, res: Response) {
    const storeId = Number(req.params.storeId);
    const page = Number(req.query.page);
    const size = Number(req.query.size);
    const result = await GetStoreReviewService(storeId, page, size);
    res.send(result);
}
