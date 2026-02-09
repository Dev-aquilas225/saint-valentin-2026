import EscapingButton from '../components/EscapingButton'

export default function FinalPage({ onOui, name }) {
  return (
    <div className="final-card">
      <div className="final-hearts">💕💖💕</div>
      <h2 className="final-title">Une dernière chose {name}...</h2>
      <p className="final-sweet-text">
        Tu es la personne la plus incroyable que je connaisse.
        Chaque moment avec toi est magique.
      </p>
      <p className="final-question">Alors... veux-tu être ma Valentine ?</p>
      <div className="buttons-container">
        <button className="btn btn-oui" onClick={onOui}>
          Oui, pour toujours !
        </button>
        <EscapingButton />
      </div>
    </div>
  )
}
