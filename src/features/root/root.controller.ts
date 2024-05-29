import { Request, Response } from "express";
import { HelloWorldService } from "./root.service";

export function RootGetController(req: Request, res: Response) {
    const data = HelloWorldService();

    res.send({ status: 200, code: 200, message: data });
}
