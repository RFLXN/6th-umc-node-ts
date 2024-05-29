import { StatusCodes } from "http-status-codes";
import { BaseApiResponse } from "./response";

export type ResponseType = "SUCCESS" | "INTERNAL_SERVER_ERROR"
    | "BAD_REQUEST" | "UNAUTHORIZED" | "METHOD_NOT_ALLOWED" | "FORBIDDEN"
    | "MEMBER_NOT_FOUND" | "NICKNAME_NOT_EXIST" | "ARTICLE_NOT_FOUND";


export type ResponseWithStatus = {
    status: StatusCodes,
    body: Omit<BaseApiResponse<unknown>, "result">
};

export const status: Record<ResponseType, ResponseWithStatus> = {
    SUCCESS: {
        status: StatusCodes.OK,
        body: { isSuccess: true, code: "2000", message: "success!" }
    },
    INTERNAL_SERVER_ERROR: {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        body: { isSuccess: false, code: "COMMON000", message: "서버 에러, 관리자에게 문의 바랍니다." }
    },
    BAD_REQUEST: {
        status: StatusCodes.BAD_REQUEST,
        body: { isSuccess: false, code: "COMMON001", message: "잘못된 요청입니다." }
    },
    UNAUTHORIZED: {
        status: StatusCodes.UNAUTHORIZED,
        body: { isSuccess: false, code: "COMMON002", message: "권한이 잘못되었습니다." }
    },
    METHOD_NOT_ALLOWED: {
        status: StatusCodes.METHOD_NOT_ALLOWED,
        body: { isSuccess: false, code: "COMMON003", message: "지원하지 않는 Http Method 입니다." }
    },
    FORBIDDEN: {
        status: StatusCodes.FORBIDDEN,
        body: { isSuccess: false, code: "COMMON004", message: "금지된 요청입니다." }
    },
    MEMBER_NOT_FOUND: {
        status: StatusCodes.BAD_REQUEST,
        body: { isSuccess: false, code: "MEMBER4001", message: "사용자가 없습니다." }
    },
    NICKNAME_NOT_EXIST: {
        status: StatusCodes.BAD_REQUEST,
        body: { isSuccess: false, code: "MEMBER4002", message: "닉네임은 필수입니다." }
    },
    ARTICLE_NOT_FOUND: {
        status: StatusCodes.NOT_FOUND,
        body: { isSuccess: false, code: "ARTICLE4001", message: "게시글이 없습니다." }
    }
};
