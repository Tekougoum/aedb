import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
const liens = [
  { chemin: '/', libelle: 'Accueil' },
  { chemin: '/a-propos', libelle: 'À propos' },
  { chemin: '/activites', libelle: 'Activités' },
  { chemin: '/agenda', libelle: 'Agenda' },
  { chemin: '/souvenirs', libelle: 'Souvenirs' },
  { chemin: '/rejoindre', libelle: 'Rejoindre' },
  { chemin: '/connexion', libelle: 'Connexion' },
]
function Header() {
  const [ouvert, setOuvert] = useState(false)
  return (
    <header className="header">
      <div className="conteneur header-barre">
        <Link to="/" className="logo">
          <span className="logo-b">B</span>
          <span className="logo-texte">
            <sub><strong>Étudiants Baleveng</strong></sub><br />
            <small>Association de Dschang</small>
          </span>
        </Link>
        <button
          className="burger"
          aria-expanded={ouvert}
          onClick={() => setOuvert(!ouvert)}
        >
          {ouvert ? 'Fermer' : 'Menu'}
        </button>
        <nav className={`menu ${ouvert ? 'menu-ouvert' : ''}`}>
          {liens.map((lien) => (
            <NavLink
              key={lien.chemin}
              to={lien.chemin}
              end={lien.chemin === '/'}
              onClick={() => setOuvert(false)}
            >
              {lien.libelle}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
export default Header