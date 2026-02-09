import { useState, useCallback, useRef, useEffect } from 'react'

export default function EscapingButton() {
  const [position, setPosition] = useState({ x: 80, y: 0 })
  const [isEscaping, setIsEscaping] = useState(false)
  const buttonRef = useRef(null)
  const containerRef = useRef(null)

  const getRandomPosition = useCallback(() => {
    const viewportW = window.innerWidth
    const viewportH = window.innerHeight
    const btnW = 120
    const btnH = 50
    const margin = 20

    const x = margin + Math.random() * (viewportW - btnW - margin * 2)
    const y = margin + Math.random() * (viewportH - btnH - margin * 2)

    return { x, y }
  }, [])

  const handleEscape = useCallback(() => {
    setIsEscaping(true)
    const newPos = getRandomPosition()
    setPosition(newPos)
    setTimeout(() => setIsEscaping(false), 100)
  }, [getRandomPosition])

  const handleMouseEnter = useCallback(() => {
    handleEscape()
  }, [handleEscape])

  const handleTouchStart = useCallback((e) => {
    e.preventDefault()
    handleEscape()
  }, [handleEscape])

  useEffect(() => {
    const btn = buttonRef.current
    if (btn) {
      btn.addEventListener('touchstart', handleTouchStart, { passive: false })
      return () => btn.removeEventListener('touchstart', handleTouchStart)
    }
  }, [handleTouchStart])

  return (
    <button
      ref={buttonRef}
      className="btn btn-non"
      onMouseEnter={handleMouseEnter}
      onClick={handleEscape}
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: isEscaping ? 'scale(0.8)' : 'scale(1)',
        zIndex: 50,
      }}
    >
      Non
    </button>
  )
}
