import dotenv from "dotenv";
import db from "./db/index.js";

dotenv.config({ path: "./.env" });
db();
