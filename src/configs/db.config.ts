import { PoolOptions } from "mysql2";

export default function getDbConfig(): PoolOptions {
    return {
        host: process.env.DB_HOST || "localhost",
        port: Number(process.env.DB_PORT) || 3306,
        database: process.env.DB_NAME || "db",
        user: process.env.DB_USER || "user",
        password: process.env.DB_PASSWORD || "password",
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    };
}
