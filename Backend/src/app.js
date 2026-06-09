import express from "express";
import cokieParser from "cookie-parser";

/**
 * Importing routes here
 */
import authRouter from "./routes/auth.route.js";

const app = express();
app.use(cokieParser());

app.use(express.json());

app.use("/api/auth", authRouter);

export default app;
