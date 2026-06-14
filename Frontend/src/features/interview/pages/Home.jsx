import "../style/Home.scss"

const Home = () => {
  return (
    <main className="home">
      <section className="home__panel">
        <header className="home__header">
          <p className="home__eyebrow">Interview report generator</p>
          <h1>Build a polished interview summary from your notes and resume.</h1>
          <p>
            Add the job description, upload the resume, and write a short self description to
            generate a structured report.
          </p>
        </header>

        <form className="home__form">
          <div className="home__grid">
            <div className="home__field home__field--description">
              <label htmlFor="jobDescription">Job Description</label>
              <textarea
                name="jobDescription"
                id="jobDescription"
                placeholder="Enter job description here"
                rows="12"
              />
            </div>

            <div className="home__field-group">
              <div className="home__field">
                <label htmlFor="resume">Upload Resume</label>
                <input type="file" name="resume" id="resume" accept=".pdf" />
              </div>

              <div className="home__field home__field--compact">
                <label htmlFor="selfDescription">Self Description</label>
                <textarea
                  name="selfDescription"
                  id="selfDescription"
                  placeholder="Describe yourself in a few lines"
                  rows="8"
                />
              </div>

              <button className="generate-btn" type="submit">
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