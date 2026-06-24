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
const allowedOrigins = [
  "https://interview-ai-m33n.vercel.app",
  "http://localhost:5173",
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, origin);
        return;
      }

      callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
    credentials: true,
  }),
);

app.use("/api/auth", authRouter);
app.use("/api", interviewRouter);

export default app;
