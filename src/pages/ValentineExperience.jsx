import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ValentinePage from './ValentinePage'
import SweetPage from './SweetPage'
import FinalPage from './FinalPage'
import Celebration from '../components/Celebration'

const sweetPages = [
  {
    emoji: '🌹',
    text: 'Tu es la plus belle chose qui me soit arrivée...',
    subtext: 'Chaque jour avec toi est un cadeau',
  },
  {
    emoji: '✨',
    text: 'Ton sourire illumine mes journées les plus sombres...',
    subtext: 'Tu es ma lumière',
  },
  {
    emoji: '💫',
    text: 'Mon coeur bat plus fort à chaque fois que je te vois...',
    subtext: 'Tu me rends vivant(e)',
  },
  {
    emoji: '💝',
    text: 'Je veux passer chaque instant de ma vie à tes côtés...',
    subtext: 'Pour toujours et à jamais',
  },
]

function formatName(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default function ValentineExperience() {
  const { name } = useParams()
  const displayName = formatName(name)

  const [currentPage, setCurrentPage] = useState(0)
  const [showCelebration, setShowCelebration] = useState(false)

  const handleOui = () => {
    if (currentPage === 0) {
      setCurrentPage(1)
    } else if (currentPage === 5) {
      setShowCelebration(true)
    }
  }

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1)
  }

  const totalSweetPages = sweetPages.length

  return (
    <div className="page-container">
      {currentPage === 0 && (
        <div className="page-enter" key="valentine-1">
          <ValentinePage onOui={handleOui} name={displayName} />
        </div>
      )}

      {currentPage >= 1 && currentPage <= totalSweetPages && (
        <div className="page-enter" key={`sweet-${currentPage}`}>
          <SweetPage
            {...sweetPages[currentPage - 1]}
            onNext={handleNext}
            current={currentPage}
            total={totalSweetPages}
          />
        </div>
      )}

      {currentPage === 5 && !showCelebration && (
        <div className="page-enter" key="final">
          <FinalPage onOui={handleOui} name={displayName} />
        </div>
      )}

      {showCelebration && <Celebration name={displayName} />}
    </div>
  )
}
