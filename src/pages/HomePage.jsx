import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const [name, setName] = useState('')
  const [copied, setCopied] = useState(false)
  const [generatedLink, setGeneratedLink] = useState('')
  const navigate = useNavigate()

  const slugify = (text) => {
    return text
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    const slug = slugify(name)
    const link = `${window.location.origin}/pour/${slug}`
    setGeneratedLink(link)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLink).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const handlePreview = () => {
    const slug = slugify(name)
    navigate(`/pour/${slug}`)
  }

  return (
    <div className="page-container">
      <div className="home-card page-enter">
        <span className="heart-icon">💌</span>
        <h1 className="home-title">Crée ta Valentine</h1>
        <p className="home-subtitle">
          Entre le prénom de ton/ta valentin(e) pour créer un lien personnalisé
        </p>

        <form className="name-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <span className="input-icon">💕</span>
            <input
              type="text"
              className="name-input"
              placeholder="Ex: Naelle Divine"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setGeneratedLink('')
                setCopied(false)
              }}
              autoFocus
            />
          </div>
          <button type="submit" className="btn btn-generate" disabled={!name.trim()}>
            Générer le lien
          </button>
        </form>

        {generatedLink && (
          <div className="link-result page-enter">
            <p className="link-label">Voici le lien pour ta valentine :</p>
            <div className="link-box">
              <span className="link-text">{generatedLink}</span>
            </div>
            <div className="link-actions">
              <button className="btn btn-copy" onClick={handleCopy}>
                {copied ? '✓ Copié !' : 'Copier le lien'}
              </button>
              <button className="btn btn-preview" onClick={handlePreview}>
                Voir l&apos;aperçu
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
