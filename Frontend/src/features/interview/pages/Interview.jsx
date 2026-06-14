import { useState } from "react";
import "../style/Interview.scss";

const reportData = {
  matchScore: 78,
  technicalQuestions: [
    {
      question:
        "Given your strong background in React, how would you approach building a responsive page using only HTML and CSS, without relying on any libraries or frameworks?",
      intention:
        "To assess foundational knowledge of responsive design principles (media queries, flexbox/grid, relative units) independent of a specific framework.",
      answer:
        "A strong answer would include using meta viewport, media queries for breakpoints, flexible units like percentages, vw/vh for dimensions, and CSS Flexbox or Grid for layout. Mentioning a mobile-first approach would also be beneficial.",
    },
    {
      question:
        "The job description emphasizes writing custom JavaScript where Webflow's native capabilities need extension. Can you describe a scenario where you've extended functionality on a static or mostly static page using vanilla JavaScript, and how you approached it?",
      intention:
        "To evaluate the candidate's proficiency in vanilla JavaScript for DOM manipulation, event handling, and extending client-side functionality beyond component-based frameworks.",
      answer:
        "The candidate should describe a specific example such as implementing a custom image slider, an interactive form validation, or a dynamic content filter. They should explain how they selected elements, attached event listeners, and manipulated the DOM (e.g., changing styles, adding/removing classes, updating content) using vanilla JS methods.",
    },
    {
      question:
        "The role requires familiarity with Webflow, or a strong willingness to learn quickly. How would you leverage your existing React and modern web development skills to accelerate your learning of Webflow?",
      intention:
        "To gauge the candidate's learning agility, adaptability, and ability to connect new tools with existing knowledge. It also assesses their research and self-learning approach.",
      answer:
        "The candidate should explain that they would map Webflow's visual interface and concepts (e.g., sections, containers, elements) to their understanding of HTML structure and CSS styling. They would leverage their knowledge of responsive design, component thinking, and basic JavaScript to understand and extend Webflow's capabilities, focusing on documentation, tutorials, and practical application.",
    },
  ],
  behavioralQuestions: [
    {
      question:
        "Tell me about a time you had to learn a new tool or technology very quickly for a project. What was your approach, and what was the outcome?",
      intention:
        "To assess the candidate's learning style, adaptability, and proactiveness in acquiring new skills, which is crucial for learning Webflow on the job.",
      answer:
        "The candidate should describe a specific situation (STAR method), outlining the steps they took to learn (e.g., official documentation, online courses, tutorials, hands-on practice), the challenges faced, and the successful outcome or lessons learned.",
    },
    {
      question:
        "The job requires a good eye for design, layout, and typography, with attention to detail for pixel-perfect implementations. Can you share an example from your past projects where you had to ensure a design was implemented with extreme precision?",
      intention:
        "To evaluate the candidate's attention to detail, commitment to visual accuracy, and understanding of UI/UX principles beyond just functional implementation.",
      answer:
        "The candidate should describe a project where they meticulously matched a design (e.g., Figma, Zeplin). They should explain their process for checking spacing, alignment, font sizes, colors, and responsiveness across different viewports, and how they iterated to achieve pixel-perfect accuracy.",
    },
    {
      question:
        "Describe a situation where you received constructive criticism on your code or design implementation. How did you react, and what steps did you take?",
      intention:
        "To assess the candidate's ability to receive and incorporate feedback, collaborate effectively, and continuously improve their work, which is important in a team environment.",
      answer:
        "The candidate should explain a specific instance, demonstrating a professional and open attitude towards feedback. They should describe how they sought clarification, understood the rationale behind the criticism, and implemented changes or discussed alternatives, leading to an improved outcome.",
    },
  ],
  skillGaps: [
    {
      skill: "Webflow",
      severity: "medium",
    },
    {
      skill: "Direct professional experience in a collaborative development team",
      severity: "low",
    },
  ],
  preparationPlan: [
    {
      day: 1,
      focus: "Webflow Fundamentals",
      tasks: [
        "Complete Webflow 101 crash course.",
        "Recreate a simple landing page design in Webflow.",
        "Understand Webflow's Box Model and styling panel.",
      ],
    },
    {
      day: 2,
      focus: "Advanced Webflow & Responsive Design",
      tasks: [
        "Explore Webflow CMS and Interactions basics.",
        "Practice building responsive layouts in Webflow using breakpoints.",
        "Study examples of well-built Webflow sites for structure and styling.",
      ],
    },
    {
      day: 3,
      focus: "HTML/CSS Refresh",
      tasks: [
        "Review advanced CSS topics: Flexbox, Grid, custom properties (variables).",
        "Practice building complex layouts using only HTML/CSS.",
        "Focus on semantic HTML and accessibility best practices.",
      ],
    },
    {
      day: 4,
      focus: "JavaScript for Webflow Extensions",
      tasks: [
        "Review vanilla JavaScript DOM manipulation and event handling.",
        "Practice writing custom JavaScript snippets that could extend Webflow functionality (e.g., dynamic filtering, custom animations).",
        "Understand common JavaScript patterns for web interactivity.",
      ],
    },
    {
      day: 5,
      focus: "Behavioral Interview Practice",
      tasks: [
        "Prepare answers for common behavioral questions (STAR method).",
        "Focus on scenarios demonstrating learning agility, attention to detail, and collaboration.",
        "Practice explaining project challenges and resolutions.",
      ],
    },
    {
      day: 6,
      focus: "Project & Portfolio Review",
      tasks: [
        "Refine explanations of past projects, highlighting transferable skills (responsive design, clean UI, problem-solving).",
        "Prepare to walk through your portfolio, relating your React experience to the requirements of the Webflow role.",
        "Anticipate questions about project architecture and design choices.",
      ],
    },
    {
      day: 7,
      focus: "Final Review & Mindset",
      tasks: [
        "Review all technical and behavioral notes.",
        "Practice explaining how your existing skills translate to a Webflow-centric role.",
        "Ensure a clear understanding of the job description and company.",
      ],
    },
  ],
};

const sections = [
  { key: "technical", label: "Technical Questions", icon: "<>" },
  { key: "behavioral", label: "Behavioral Questions", icon: "◫" },
  { key: "roadmap", label: "Road Map", icon: "✈" },
];

const Interview = () => {
  const [activeSection, setActiveSection] = useState("roadmap");

  const renderQuestions = (title, description, items) => (
    <div className="interview__card interview__card--questions">
      <div className="interview__card-heading interview__card-heading--roadmap">
        <div>
          <h2>{title}</h2>
          <p className="interview__section-copy">{description}</p>
        </div>
        <span className="interview__pill interview__pill--subtle">{items.length} items</span>
      </div>

      <div className="interview__questions-list">
        {items.map((item, index) => (
          <details className="interview__question-item" key={index} open={index === 0}>
            <summary className="interview__question-summary">
              <span className="interview__timeline-badge">Q{index + 1}</span>
              <span className="interview__question-summary-text">{item.question}</span>
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
        reportData.technicalQuestions,
      );
    }

    if (activeSection === "behavioral") {
      return renderQuestions(
        "Behavioral questions",
        "Use the dropdowns to review the question, the goal behind it, and the suggested answer structure.",
        reportData.behavioralQuestions,
      );
    }

    return (
      <div className="interview__card interview__card--roadmap">
        <div className="interview__card-heading interview__card-heading--roadmap">
          <h2>Preparation Road Map</h2>
          <span className="interview__pill interview__pill--subtle">7-day plan</span>
        </div>

        <div className="interview__timeline">
          {reportData.preparationPlan.map((day) => (
            <details className="interview__timeline-item" key={day.day} open={day.day === 1}>
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
                  <span className="interview__section-icon">{section.icon}</span>
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
                  <strong>{reportData.matchScore}</strong>
                  <span>%</span>
                </div>
              </div>
              <span className="interview__score-note">Strong match for this role</span>
            </div>

            <div className="interview__card interview__card--gaps">
              <h2>Skill gaps</h2>
              <div className="interview__tag-list">
                {reportData.skillGaps.map((gap, index) => (
                  <span className="interview__tag" key={index} data-severity={gap.severity}>
                    {gap.skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="interview__card interview__card--plan">
              <h2>Plan at a glance</h2>
              <ul className="interview__plan-list">
                {reportData.preparationPlan.slice(0, 3).map((day) => (
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
