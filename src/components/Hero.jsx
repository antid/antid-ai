export default function Hero() {
  return (
    <div className="hero">
      <div className="panel panel-left">
        <div className="brand">antid</div>
        <p className="body-copy">
          I design AI-native products and build them in code, from system thinking
          to shipped prototype. Currently crafting tools at the edge of design and
          engineering.
        </p>
      </div>

      <div className="panel panel-right">
        <button className="menu-button" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <h1 className="headline">
        <span>Design</span>
        <span>that</span>
        <span>ships.</span>
      </h1>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <div className="scroll-text">Scroll for more</div>
      </div>
    </div>
  )
}
