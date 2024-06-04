import express, { Request, Response, NextFunction, json, urlencoded } from "express";
import { rootRouter } from "./routes/root";
import { tempRouter } from "./routes/temp";
import { ApiError } from "./configs/error";
import { status } from "./configs/response.status";
import { userRouter } from "./routes/user";
import { serve, setup } from "swagger-ui-express";
import specs from "./configs/swagger.config";

export default function initApp() {
    const app = express();

    app.use(json());
    app.use(urlencoded({ extended: true }));

    app.use("/api-specs", serve, setup(specs));

    app.use("/", rootRouter);
    app.use("/temp", tempRouter);
    app.use("/user", userRouter);

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof ApiError) {
            res.status(err.data.status).send(err.data.body);
        } else {
            res.status(500).send(status.INTERNAL_SERVER_ERROR.body);
        }
    });

    return app;
}
