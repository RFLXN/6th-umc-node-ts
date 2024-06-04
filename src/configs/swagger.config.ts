import SwaggerJsdoc, { Options } from "swagger-jsdoc";

const options: Options = {
    definition: {
        info: {
            title: "UMC Study API",
            version: "1.0.0",
            description: "UMC Study API with express, API 설명"
        },
        host: "localhost:3000",
        basePath: "../"
    },
    apis: [ "./swagger/*" ]
};

const specs = SwaggerJsdoc(options);

export default specs;
