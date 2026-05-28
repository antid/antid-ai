export default function Marquee({ skills }) {
  const items = [...skills, ...skills, ...skills]

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.map((s, i) => (
          <span className="marquee-item" key={i}>{s}</span>
        ))}
      </div>
    </div>
  )
}
