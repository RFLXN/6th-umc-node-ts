import { getPool } from "../configs/db.pool";
import { SELECT_STORE_REVIEW_BY_STORE_ID } from "../models/sql/store-review";
import { RowDataPacket } from "mysql2/promise";
import { ApiError } from "../configs/error";
import { status } from "../configs/response.status";
import { StoreReview } from "../models/entities/store-review";
import { User } from "../models/entities/user";

export async function getStoreReview(storeId: number, page: number, size: number) {
    try {
        const connection = await getPool().getConnection();

        const [ result ] = await connection.query<RowDataPacket[]>(SELECT_STORE_REVIEW_BY_STORE_ID, [
            storeId, (page - 1) * size, size
        ]);

        connection.release();

        return result.map((raw) => {
            const review: Partial<StoreReview & { user: Omit<User, "password"> }> = {};
            review.id = raw["ID"];
            review.storeId = raw["STORE_ID"];
            review.userId = raw["USER_ID"];
            review.content = raw["CONTENT"];
            review.rating = raw["RATING"];
            review.user = {
                id: raw["USER_ID"],
                username: raw["USER_NAME"],
                email: raw["USER_EMAIL"],
                gender: raw["GENDER"]
            };
            return review as StoreReview & { user: Omit<User, "password"> };
        });
    } catch (e) {
        throw new ApiError(status.PARAMETER_IS_WRONG);
    }
}
