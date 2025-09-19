import dotenv from "dotenv";
dotenv.config({ quiet: true});

import { initDB } from "./src/db/initDb.js";
import app from "./src/app.js";

const startServer = async () => {
    const PORT = process.env.PORT || 4000;

    try {
        await initDB();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
};

startServer();