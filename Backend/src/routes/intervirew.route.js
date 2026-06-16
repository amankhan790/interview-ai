import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import InterviewReport from "../controller/interviewController.js";
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
  upload.single("resume"),
  InterviewReport.generateInterviewReportController,
);

/**
 * @route GET /api/interviewer/report/:interviewId
 * @description Get the interview report on the basis of interviewId
 * @access private
 */

interviewRouter.get(
  "/interview/:interviewId",
  authMiddleware.authUser,
  InterviewReport.getInterviewReportByIdController,
);

/**
 * @route GET /api/interview/reports
 * @description Get all interview reports for the authenticated user
 * @access private
 */

interviewRouter.get(
  "/interviews",
  authMiddleware.authUser,
  InterviewReport.getAllInterviewReportsController,
);

export default interviewRouter;
