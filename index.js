import dotenv from "dotenv";
dotenv.config({ quiet: true});

import https from "https";
import fs from "fs";
import { initDB } from "./src/db/initDb.js";
import app from "./src/app.js";

const startServer = async () => {
    const PORT = process.env.PORT;
    const privateKey = fs.readFileSync("server.key");
    const certificate = fs.readFileSync("server.cert");

    const credentials = {key: privateKey, cert: certificate}
    const server = https.createServer(credentials, app)

    try {
        await initDB();

        server.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
};

startServer();