import { User } from "../../models/entities/user";
import { insertUser } from "../../db/user";
import { ApiError } from "../../configs/error";
import { status } from "../../configs/response.status";
import { BaseApiResponse } from "../../configs/response";

export async function SignUpService(user: Omit<User, "id">) {
    const id = await insertUser(user);

    if (id == -1) {
        throw new ApiError(status.EMAIL_ALREADY_EXIST);
    }

    const body: BaseApiResponse<User> = {
        ...status.SUCCESS.body,
        result: {
            id,
            ...user
        }
    };

    return body;
}
