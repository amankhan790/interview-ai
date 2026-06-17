import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const generateInterview = async ({
  resume,
  jobDescription,
  selfDescription,
}) => {
  const formData = new FormData();

  formData.append("resume", resume);
  formData.append("jobDescription", jobDescription);
  formData.append("selfDescription", selfDescription);

  const response = await api.post("/api/interview/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const getInterviewReportById = async (interviewId) => {
  const response = await api.get(`/api/interview/${interviewId}`);
  return response.data;
};

export const getAllInterviewsReports = async () => {
  const response = await api.get("/api/interviews/");
  return response.data;
};

export const generateResumePdf = async ({ interviewReportId }) => {
  const response = await api.post(
    `/api/interview/resume/pdf/${interviewReportId}`,
    null,
    {
      responseType: "blob",
    },
  );

  return response.data;
};
