import request from "supertest";
import { describe, test } from "@jest/globals";
import app from "../src/app";

describe("[API] GET /", () => {
    test("It should respond \"Hello World!\"", (done) => {
        request(app)
            .get("/")
            .expect(200, "Hello World!", done);
    });
});
