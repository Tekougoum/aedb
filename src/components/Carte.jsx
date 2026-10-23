function Carte({ numero, titre, texte }) {
  return (
    <article className="carte">
      <div className="carte-numero">{numero}</div>
      <h3>{titre}</h3>
      <p>{texte}</p>
    </article>
  )
}
export default Carte