import { GetTestResponseDTO } from "./models/get.response.dto";

export function GetTestService(): GetTestResponseDTO {
    return {
        testString: "This is TEST! >.0"
    };
}
