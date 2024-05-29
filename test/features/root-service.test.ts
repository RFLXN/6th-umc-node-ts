import { describe, test, expect } from "@jest/globals";
import { HelloWorldService } from "../../src/features/root/root.service";

describe("[Module] HelloWorldService (features/root/root.service.ts)", () => {
    test("\"Hello World!\"를 반환한다", () => {
        expect(HelloWorldService()).toBe("Hello World!");
    });
});
