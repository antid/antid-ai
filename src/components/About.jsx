export default function About() {
  return (
    <section id="about">
      <div className="about-sticky reveal">
        <div className="about-label">About</div>
        <h2 className="about-title">Designer.<br />Builder.<br />Musician.</h2>
        <div className="about-stats">
          <div className="stat-box">
            <div className="stat-num">10<span>+</span></div>
            <div className="stat-label">Years designing</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">2</div>
            <div className="stat-label">AI tools shipped</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">1</div>
            <div className="stat-label">Vinyl on wax</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">{'\u221E'}</div>
            <div className="stat-label">Tabs open</div>
          </div>
        </div>
      </div>

      <div className="reveal">
        <div className="about-body">
          <p>
            I work at the intersection of <strong>product thinking, AI, and frontend engineering</strong>, the part where figuring out what to build and actually building it are the same activity.
          </p>
          <p>
            Most of my recent work is under NDA at <em>Datadog</em>, enterprise observability, design systems, complex data workflows. Happy to walk through all of it in a conversation.
          </p>
          <p>
            What I'm building publicly: AI-native developer tools and productivity apps that treat the model as a design material, not a feature bolt-on.
          </p>
          <p>
            Outside of screens I play guitar, record music, and in 2019 pressed a <em>vinyl record</em> with my band Los Monoplonicos. I think about interface design the same way I think about arrangement, every element earns its place or it's gone.
          </p>
        </div>

        <a
          href="https://www.linkedin.com/in/alex-martinez-b4335729/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '1.5rem',
            fontFamily: 'var(--mono)',
            fontSize: '0.72rem',
            color: 'var(--accent)',
            textDecoration: 'none',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          LinkedIn →
        </a>

        <ul className="experience-list" style={{ marginTop: '3rem' }}>
          <li className="exp-item">
            <div className="exp-year">2022, now</div>
            <div>
              <div className="exp-role">Product Designer</div>
              <div className="exp-company">Datadog</div>
            </div>
          </li>
          <li className="exp-item">
            <div className="exp-year">2020, 2022</div>
            <div>
              <div className="exp-role">Product Designer</div>
              <div className="exp-company">Codiga</div>
            </div>
          </li>
          <li className="exp-item">
            <div className="exp-year">Earlier</div>
            <div>
              <div className="exp-role">Design Engineer & Freelance</div>
              <div className="exp-company">Various</div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
