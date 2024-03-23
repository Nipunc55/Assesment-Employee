// db.ts

import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://nipun:0PuAq8Scw8KCCBya@cluster0.1p7nvk2.mongodb.net";

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
