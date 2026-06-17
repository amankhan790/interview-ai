import { useEffect, useState } from "react";
import "../style/Interview.scss";
import { useInterview } from "../hooks/useInterview";
import { useParams } from "react-router-dom";

const sections = [
  { key: "technical", label: "Technical Questions", icon: "<>" },
  { key: "behavioral", label: "Behavioral Questions", icon: "◫" },
  { key: "roadmap", label: "Road Map", icon: "✈" },
];

const Interview = () => {
  const [activeSection, setActiveSection] = useState("roadmap");
  const { report, getAllReportById, loading, getResumePdf } = useInterview();
  const { interviewId } = useParams();

  useEffect(() => {
    if (interviewId) {
      getAllReportById(interviewId);
    }
  }, [interviewId, getAllReportById]);

  if (loading || !report) {
    return (
      <main className="interview">
        <h1>Loading your interview report...</h1>
      </main>
    );
  }

  const renderQuestions = (title, description, items) => (
    <div className="interview__card interview__card--questions">
      <div className="interview__card-heading interview__card-heading--roadmap">
        <div>
          <h2>{title}</h2>
          <p className="interview__section-copy">{description}</p>
        </div>
        <span className="interview__pill interview__pill--subtle">
          {items.length} items
        </span>
      </div>

      <div className="interview__questions-list">
        {items.map((item, index) => (
          <details
            className="interview__question-item"
            key={index}
            open={index === 0}
          >
            <summary className="interview__question-summary">
              <span className="interview__timeline-badge">Q{index + 1}</span>
              <span className="interview__question-summary-text">
                {item.question}
              </span>
            </summary>

            <div className="interview__question-body">
              <div>
                <span className="interview__qa-label">Intention</span>
                <p>{item.intention}</p>
              </div>
              <div>
                <span className="interview__qa-label">Answer</span>
                <p>{item.answer}</p>
              </div>
            </div>
          </details>
        ))}
      </div>
    </div>
  );

  const renderMainSection = () => {
    if (activeSection === "technical") {
      return renderQuestions(
        "Technical questions",
        "Expand any question to inspect the intended signal and the sample answer.",
        report.technicalQuestions,
      );
    }

    if (activeSection === "behavioral") {
      return renderQuestions(
        "Behavioral questions",
        "Use the dropdowns to review the question, the goal behind it, and the suggested answer structure.",
        report.behavioralQuestions,
      );
    }

    return (
      <div className="interview__card interview__card--roadmap">
        <div className="interview__card-heading interview__card-heading--roadmap">
          <h2>Preparation Road Map</h2>
          <span className="interview__pill interview__pill--subtle">
            7-day plan
          </span>
        </div>

        <div className="interview__timeline">
          {report.preparationPlan.map((day) => (
            <details
              className="interview__timeline-item"
              key={day.day}
              open={day.day === 1}
            >
              <summary className="interview__timeline-summary">
                <span className="interview__timeline-dot" aria-hidden="true" />
                <span className="interview__timeline-badge">Day {day.day}</span>
                <span className="interview__timeline-title">{day.focus}</span>
              </summary>
              <ul className="interview__timeline-list">
                {day.tasks.map((task, taskIndex) => (
                  <li key={`${day.day}-${taskIndex}`}>{task}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    );
  };

  return (
    <main className="interview">
      <section className="interview__panel">
        <header className="interview__hero">
          <div>
            <p className="interview__eyebrow">Interview Insight</p>
            <h1>Preparation Road Map</h1>
          </div>
          <span className="interview__pill">7-day plan</span>
        </header>

        <div className="interview__grid">
          <aside className="interview__sidebar">
            <div className="interview__sidebar-title">Sections</div>
            <div className="interview__section-nav">
              {sections.map((section) => (
                <button
                  onClick={() => {
                    setActiveSection(section.key);
                  }}
                  className={`interview__section-item ${activeSection === section.key ? "is-active" : ""}`}
                  type="button"
                  key={section.label}
                >
                  <span className="interview__section-icon">
                    {section.icon}
                  </span>
                  <span>{section.label}</span>
                </button>
              ))}
            </div>

            <button
              className="interview__download-btn"
              type="button"
              onClick={() => {getResumePdf(interviewId)}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                height={"2rem"}
                style={{ marginRight: "0.5rem" }}
              >
                <path d="M10.6144 17.7956 11.492 15.7854C12.2731 13.9966 13.6789 12.5726 15.4325 11.7942L17.8482 10.7219C18.6162 10.381 18.6162 9.26368 17.8482 8.92277L15.5079 7.88394C13.7092 7.08552 12.2782 5.60881 11.5105 3.75894L10.6215 1.61673C10.2916.821765 9.19319.821767 8.8633 1.61673L7.97427 3.75892C7.20657 5.60881 5.77553 7.08552 3.97685 7.88394L1.63658 8.92277C.868537 9.26368.868536 10.381 1.63658 10.7219L4.0523 11.7942C5.80589 12.5726 7.21171 13.9966 7.99275 15.7854L8.8704 17.7956C9.20776 18.5682 10.277 18.5682 10.6144 17.7956ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899Z"></path>
              </svg>
              Download Resume Generated By AI
            </button>
          </aside>

          <article className="interview__roadmap">
            {renderMainSection()}
          </article>

          <aside className="interview__aside">
            <div className="interview__score-card">
              <p>MATCH SCORE</p>
              <div className="interview__score-ring">
                <div className="interview__score-ring-inner">
                  <strong>{report.matchScore}</strong>
                  <span>%</span>
                </div>
              </div>
              <span className="interview__score-note">
                Strong match for this role
              </span>
            </div>

            <div className="interview__card interview__card--gaps">
              <h2>Skill gaps</h2>
              <div className="interview__tag-list">
                {report.skillGaps.map((gap, index) => (
                  <span
                    className="interview__tag"
                    key={index}
                    data-severity={gap.severity}
                  >
                    {gap.skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="interview__card interview__card--plan">
              <h2>Plan at a glance</h2>
              <ul className="interview__plan-list">
                {report.preparationPlan.slice(0, 3).map((day) => (
                  <li className="interview__plan-item" key={day.day}>
                    <span>Day {day.day}</span>
                    <strong>{day.focus}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Interview;
