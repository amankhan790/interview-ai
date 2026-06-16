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
  const { report, getAllReportById, loading } = useInterview();
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
