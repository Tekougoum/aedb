function Bouton({ children, lien = '#', variante = 'plein' }) {
  return (
    <a href={lien} className={`btn btn-${variante}`}>
      {children}
    </a>
  )
}
export default Bouton