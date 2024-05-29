import { Request, Response } from "express";
import { status } from "../../../configs/response.status";
import { GetTestService } from "./test.service";
import { BaseApiResponse } from "../../../configs/response";
import { GetTestResponseDTO } from "./models/get.response.dto";

export function GetTestController(req: Request,  res: Response) {
    const resBody: BaseApiResponse<GetTestResponseDTO> = {
        ...status.SUCCESS.body,
        result: GetTestService()
    };
    res.send(resBody);
}
