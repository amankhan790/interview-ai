import express from "express";
import cokieParser from "cookie-parser";
import cors from "cors";

/**
 * Importing routes here
 */
import authRouter from "./routes/auth.route.js";
import interviewRouter from "./routes/intervirew.route.js";

const app = express();

app.use(express.json());
app.use(cokieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api/auth", authRouter);
app.use("/api", interviewRouter)

export default app;
