import {
  generateInterview,
  getAllInterviewsReports,
  getInterviewReportById,
} from "../services/interview.api.js";
import { useContext } from "react";
import { InterviewContext } from "../interview.context.jsx";

export const useInterview = () => {
  const context = useContext(InterviewContext);

  if (!context) {
    throw new Error("useInterview must be used within an InterviewProvider");
  }

  const { loading, setLoading, report, setReport, reports, setReports } =
    context;

  const generateReport = async ({
    resume,
    jobDescription,
    selfDescription,
  }) => {
    setLoading(true);
    let response = null;
    try {
      response = await generateInterview({
        resume,
        jobDescription,
        selfDescription,
      });
      setReport(response.interviewReport);
    } catch (error) {
      console.error("Error generating interview report:", error);
      throw error;
    } finally {
      setLoading(false);
    }
    return response.interviewReport;
  };

  const getAllReportById = async (interviewId) => {
    let response = null;
    setLoading(true);
    try {
      response = await getInterviewReportById(interviewId);
      setReport(response.interviewReport);
    } catch (error) {
      console.error("Error fetching interview report by ID:", error);
      throw error;
    } finally {
      setLoading(false);
    }
    return response.interviewReport;
  };

  const getAllReports = async () => {
    setLoading(true);
    let response = null;
    try {
      response = await getAllInterviewsReports();
      setReports(response.interviewReport);
    } catch (error) {
      console.error("Error fetching all interview reports:", error);
      throw error;
    } finally {
      setLoading(false);
    }
    return response.interviewReport;
  };

  return {
    loading,
    report,
    reports,
    generateReport,
    getAllReportById,
    getAllReports,
  };
};
