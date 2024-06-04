import { getPool, initPool } from "./configs/db.pool";
import initApp from "./app";
import { config } from "dotenv";

config();
initPool();
const app = initApp();

const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
    console.log("Server is running on port 3000");
});

process.on("exit", () => {
    getPool()?.destroy();
});
