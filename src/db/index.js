import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectionDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("Connected to Mongo DB" + connectionInstance.connection.host);
  } catch (error) {
    console.log("Connection Failed", error);
  }
};

export default connectionDB;
