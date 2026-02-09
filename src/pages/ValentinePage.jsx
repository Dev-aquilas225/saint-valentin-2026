import EscapingButton from '../components/EscapingButton'

export default function ValentinePage({ onOui, name }) {
  return (
    <div className="valentine-card">
      <span className="heart-icon">💕</span>
      <h1 className="valentine-title">
        {name}, veux-tu être ma Valentine ?
      </h1>
      <p className="valentine-subtitle">J&apos;ai quelque chose à te dire...</p>
      <div className="buttons-container">
        <button className="btn btn-oui" onClick={onOui}>
          Oui !
        </button>
        <EscapingButton />
      </div>
    </div>
  )
}
