import express, { Request, Response, NextFunction } from "express";
import { rootRouter } from "./routes/root";
import { tempRouter } from "./routes/temp";
import { ApiError } from "./configs/error";
import { status } from "./configs/response.status";

const app = express();


app.use("/", rootRouter);
app.use("/temp", tempRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ApiError) {
        res.status(err.data.status).send(err.data.body);
    } else {
        res.status(500).send(status.INTERNAL_SERVER_ERROR.body);
    }
});

export default app;
