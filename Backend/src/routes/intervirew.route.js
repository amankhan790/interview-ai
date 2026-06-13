import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {generateInterviewReportController} from "../controller/interviewController.js";
import upload from "../middlewares/file.middleware.js";

const interviewRouter = express.Router();

/**
 * @route POST /api/interviewer
 * @description Generate an interview report on the basis of users self description, job discription and resume
 * @access private
 */

interviewRouter.post(
  "/interview",
  authMiddleware.authUser,
  upload.single("resume"),generateInterviewReportController,
);

export default interviewRouter;
