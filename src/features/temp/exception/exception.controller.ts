import { Request, Response } from "express";
import { BaseApiResponse } from "../../../configs/response";
import { GetExceptionResponseDto } from "./models/get.response.dto";
import { status } from "../../../configs/response.status";
import { GetExceptionService } from "./exception.service";


export function GetExceptionController(req: Request,  res: Response) {
    const flag: number = Number(req.params.flag);

    const body: BaseApiResponse<GetExceptionResponseDto> = {
        ...status.SUCCESS.body,
        result: GetExceptionService(flag)
    };
    res.send(body);
}
