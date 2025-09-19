import dotenv from "dotenv";
dotenv.config({ quiet: true});

import { Pool } from "pg";

export const pool = new Pool({ connectionString: process.env.DATABASE_URL});

export const initDB = async () => {
    try {
        await pool.connect();
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connecion failed", error);
        throw error;
    }
}