import { getStoreReview } from "../../../db/store-review";
import { ApiError } from "../../../configs/error";
import { status } from "../../../configs/response.status";
import { BaseApiResponse } from "../../../configs/response";
import { StoreReview } from "../../../models/entities/store-review";
import { User } from "../../../models/entities/user";

export async function GetStoreReviewService(storeId: number, page: number = 1, size: number = 20)  {
    if (isNaN(storeId) || isNaN(page) || isNaN(size) || page < 1 || size < 1) {
        throw new ApiError(status.PARAMETER_IS_WRONG);
    }
    const reviews =  await getStoreReview(storeId, page, size);

    const res: BaseApiResponse<(StoreReview & { user: Omit<User, "password"> })[]> = {
        ...status.SUCCESS.body,
        result: reviews
    };

    return res;
}
