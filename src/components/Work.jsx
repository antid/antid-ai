export default function Work() {
  return (
    <section id="work">
      <div className="section-header reveal">
        <div>
          <div className="section-label">Selected Work</div>
          <h2 className="section-title">
            Built, shipped,
            <br />
            or in progress.
          </h2>
        </div>
      </div>

      <div className="projects-grid">
        <a href="#" className="project-card featured reveal">
          <div>
            <div className="project-meta">
              <span>01</span>
              AI Developer Tool · 2024
            </div>
            <h3 className="project-name">Design-Aware Code Review</h3>
            <p className="project-desc">
              A PR companion that flags when components diverge from the design
              system, suggests accessible alternatives, and catches UX debt
              before it ships. Built with Claude API + GitHub integration.
            </p>
            <div className="project-tags">
              <span className="tag">Product Design</span>
              <span className="tag">React</span>
              <span className="tag">Claude API</span>
              <span className="tag">Developer Tools</span>
              <span className="tag">AI</span>
            </div>
          </div>
          <div className="project-visual">
            <div className="project-visual-inner">
              <div className="line-dim">{"// reviewing PR #247"}</div>
              <div className="line-accent">
                {"\u26A0 Button variant mismatch"}
              </div>
              <div style={{ color: "#f0ebe0", opacity: 0.6 }}>
                {'→ Use <Button variant="ghost">'}
              </div>
              <div style={{ marginTop: "0.5rem" }} className="line-dim">
                {"// accessibility check"}
              </div>
              <div className="line-green">
                {"\u2713 Color contrast passes AA"}
              </div>
              <div className="line-accent">
                {"\u26A0 Missing aria-label on icon"}
              </div>
              <div style={{ color: "#f0ebe0", opacity: 0.6 }}>
                {'→ aria-label="Close dialog"'}
              </div>
              <div style={{ marginTop: "0.5rem" }} className="line-dim">
                {"// 2 issues \u00B7 1 suggestion"}
              </div>
            </div>
          </div>
        </a>

        <a href="#" className="project-card reveal">
          <div className="project-meta">
            <span>02</span>
            AI Productivity · 2024
          </div>
          <h3 className="project-name">Decision Partner</h3>
          <p className="project-desc">
            A thinking tool for async product decisions. Drop a half-formed
            idea, get structured pressure-testing with JTBD and risk framing,
            export a clean doc.
          </p>
          <div className="project-tags">
            <span className="tag">Product Design</span>
            <span className="tag">Conversational UX</span>
            <span className="tag">Claude API</span>
          </div>
        </a>

        <a href="#" className="project-card reveal">
          <div className="project-meta">
            <span>03</span>
            Under NDA · Datadog
          </div>
          <h3 className="project-name">Enterprise Observability</h3>
          <p className="project-desc">
            Complex data visualization and alerting workflows for Datadog's core
            monitoring platform. Available to discuss in depth during
            conversations.
          </p>
          <div className="project-tags">
            <span className="tag">Enterprise UX</span>
            <span className="tag">Data Visualization</span>
            <span className="tag">Design Systems</span>
          </div>
        </a>
      </div>
    </section>
  );
}
