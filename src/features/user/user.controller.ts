import { Request, Response } from "express";
import { SignUpService } from "./user.service";

export async function SignUpController(req: Request, res: Response) {
    const result = await SignUpService(req.body);
    res.send(result);
}
