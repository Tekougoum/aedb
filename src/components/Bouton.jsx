import { Link } from 'react-router-dom'
function Bouton({ children, lien = '/', variante = 'plein' }) {
  return (
    <Link to={lien} className={`btn btn-${variante}`}>
      {children}
    </Link>
  )
}
export default Bouton