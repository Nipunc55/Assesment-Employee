// db.ts

import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const MONGODB_URI =process.env.DB_URL || ''


// if(!MONGODB_URI)throw new Error("please check .env file correctly configured...");



const connection = mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log("connection faild ", error);
  });

export default connection;

// 0PuAq8Scw8KCCBya  nipun
