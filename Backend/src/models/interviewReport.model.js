import mongoose, { model } from "mongoose";

/**
 * - Job discripion schema
 * - resume text
 * - self discripion
 *
 * - Technical question: [{
 *                     question: "",
 *                     intention: "",
 *                     answer: ""
 *                        }]
 * - behavioral question: [{
 *                     question: "",
 *                     intention: "",
 *                     answer: ""
 *                        }]
 *
 * - skills gap: [{
 *                     skills: "",
 *                     severity: {
 *                          type: stirng
 *                          enum: ["low", "medium", "high"]
 *                        }]
 * - prepration plan: [{
 *                     day: "",
 *                     focus: "",
 *                     tasks: ""
 *                        }]
 */

const technicalQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Technical question is required"],
    },
    intention: {
      type: String,
      required: [true, "Intention question is required"],
    },
    answer: {
      type: String,
      required: [true, "Answer question is required"],
    },
  },
  {
    _id: false,
  },
);

const behavioralQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Technical question is required"],
    },
    intention: {
      type: String,
      required: [true, "Intention question is required"],
    },
    answer: {
      type: String,
      required: [true, "Answer question is required"],
    },
  },
  {
    _id: false,
  },
);

const skillsSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      required: [true, "Skill is required"],
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high"],
      required: [true, "Severity is required"],
    },
  },
  {
    _id: false,
  },
);

const preprationPlanSchema = new mongoose.Schema(
  {
    day: {
      type: Number,
      required: [true, "Day is required"],
    },
    focus: {
      type: String,
      required: [true, "Focus is required"],
    },
    tasks: [
      {
        type: String,
        required: [true, "Task is required"],
      },
    ],
  },
  {
    _id: false,
  },
);

const interviewReportSchema = new mongoose.Schema(
  {
    jobDescription: {
      type: String,
      required: [true, "jobDiscription is required"],
    },
    resume: {
      type: String,
    },
    selfDescription: {
      type: String,
    },
    matchScore: {
      type: Number,
      min: 0,
      max: 100,
    },
    technicalQuestions: [technicalQuestionSchema],
    behavioralQuestions: [behavioralQuestionSchema],
    skillGaps: [skillsSchema],
    preparationPlan: [preprationPlanSchema],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
  },
  {
    timestamps: true,
  },
);

const interviewReportModel = new mongoose.model(
  "interviewReport",
  interviewReportSchema,
);

export default interviewReportModel;
