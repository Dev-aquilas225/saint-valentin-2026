import { useMemo } from 'react'

const hearts = ['❤️', '💕', '💖', '💗', '💓', '💘', '💝', '🩷']

export default function FloatingHearts() {
  const floatingHearts = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      heart: hearts[Math.floor(Math.random() * hearts.length)],
      left: `${Math.random() * 100}%`,
      size: `${0.8 + Math.random() * 1.5}rem`,
      duration: `${6 + Math.random() * 10}s`,
      delay: `${Math.random() * 8}s`,
      opacity: 0.3 + Math.random() * 0.5,
    }))
  }, [])

  return (
    <div className="hearts-bg">
      {floatingHearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: h.left,
            fontSize: h.size,
            animationDuration: h.duration,
            animationDelay: h.delay,
            opacity: h.opacity,
          }}
        >
          {h.heart}
        </span>
      ))}
    </div>
  )
}
