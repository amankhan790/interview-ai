import "../style/Home.scss";
import { useInterview } from "../hooks/useInterview";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const Home = () => {
  const { loading, generateReport } = useInterview();
  const [jobDescription, setJobDescription] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const resumeRef = useRef(null);

  const navigate = useNavigate();

  const handleGenerateReport = async (event) => {
    event.preventDefault();

    const resume = resumeRef.current.files[0];
    if (!resume) {
      alert("Please upload a resume file.");
      return;
    }

    const interviewReport = await generateReport({
      resume,
      jobDescription,
      selfDescription,
    });

    if (interviewReport?._id) {
      navigate(`/interview/${interviewReport._id}`);
    }
  };

  if (loading) {
    return (
      <main className="home">
        <h1>Generating your interview report...</h1>
      </main>
    );
  }

  return (
    <main className="home">
      <section className="home__panel">
        <header className="home__header">
          <p className="home__eyebrow">Interview report generator</p>
          <h1>
            Build a polished interview summary from your notes and resume.
          </h1>
          <p>
            Add the job description, upload the resume, and write a short self
            description to generate a structured report.
          </p>
        </header>

        <form className="home__form" onSubmit={handleGenerateReport}>
          <div className="home__grid">
            <div className="home__field home__field--description">
              <label htmlFor="jobDescription">Job Description</label>
              <textarea
                name="jobDescription"
                id="jobDescription"
                placeholder="Enter job description here"
                rows="12"
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>

            <div className="home__field-group">
              <div className="home__field">
                <label htmlFor="resume">Upload Resume</label>
                <input
                  type="file"
                  ref={resumeRef}
                  name="resume"
                  id="resume"
                  accept=".pdf"
                />
              </div>

              <div className="home__field home__field--compact">
                <label htmlFor="selfDescription">Self Description</label>
                <textarea
                  onChange={(e) => setSelfDescription(e.target.value)}
                  name="selfDescription"
                  id="selfDescription"
                  placeholder="Describe yourself in a few lines"
                  rows="8"
                />
              </div>

              <button disabled={loading} className="generate-btn" type="submit">
                Generate Interview Report
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Home;
