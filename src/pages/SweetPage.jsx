export default function SweetPage({ emoji, text, subtext, onNext, current, total }) {
  return (
    <div className="sweet-page">
      <span className="sweet-emoji">{emoji}</span>
      <p className="sweet-text">{text}</p>
      <p className="sweet-subtext">{subtext}</p>
      <button className="btn-next" onClick={onNext}>
        Continuer {current < total ? '→' : '💕'}
      </button>
      <div className="progress-dots">
        {Array.from({ length: total }, (_, i) => (
          <span key={i} className={`dot ${i + 1 <= current ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  )
}
