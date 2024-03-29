import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import "express-async-errors";

import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import express from "express";
import taskRouter from "./routers/taskroutes.js";
import userRouter from "./routers/userroutes.js";
import { errorHandlerMiddleware } from "./middlewares/ErrorHandlerMiddleware.js";
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cookieParser());
app.use(express.json());
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Your server is alive",
  });
});
app.use("/api/tasks", taskRouter);
app.use("/api/users", userRouter);

const __dirname = path.resolve();
app.use("/uploads", express.static("/var/data/uploads"));
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
);
app.get("*", (req, res) =>
  res.status(404).json({ message: "Route not found" })
);
app.use(errorHandlerMiddleware);
try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("db connected");
  app.listen(PORT, () => {
    console.log(`app is listening at ${PORT}`);
  });
} catch (error) {
  console.error(error);
  process.exit(1);
}
