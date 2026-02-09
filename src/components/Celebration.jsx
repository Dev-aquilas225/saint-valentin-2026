import { useMemo } from 'react'

const confettiEmojis = ['❤️', '💕', '💖', '🌹', '✨', '💝', '🩷', '💗', '🎉', '💐']

export default function Celebration({ name }) {
  const confettis = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      emoji: confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)],
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${2 + Math.random() * 3}s`,
      size: `${1 + Math.random() * 2}rem`,
    }))
  }, [])

  return (
    <div className="celebration-overlay">
      {confettis.map((c) => (
        <span
          key={c.id}
          className="confetti"
          style={{
            left: c.left,
            animationDelay: c.delay,
            animationDuration: c.duration,
            fontSize: c.size,
          }}
        >
          {c.emoji}
        </span>
      ))}
      <div className="celebration-content">
        <span className="celebration-heart">💕</span>
        <p className="celebration-text">
          Je t&apos;aime {name} !
        </p>
        <p className="celebration-text" style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>
          Joyeuse Saint-Valentin mon amour
        </p>
      </div>
    </div>
  )
}
