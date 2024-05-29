import { ApiError } from "../../../configs/error";
import { status } from "../../../configs/response.status";
import { GetExceptionResponseDto } from "./models/get.response.dto";

export function GetExceptionService(flag: number): GetExceptionResponseDto {
    if (flag == 1) {
        throw new ApiError(status.BAD_REQUEST);
    } else {
        return { flag };
    }
}
