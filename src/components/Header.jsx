import { useState } from 'react'
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
                <a href="/" className="logo">
                    <span className="logo-b">B</span>
                    <span className="logo-texte">
                        <sub> Étudiants Baleveng</sub> <br />
                        <sup><small>Association de Dschang</small></sup>
                    </span>
                </a>
                <button
                    className="burger"
                    aria-expanded={ouvert}
                    onClick={() => setOuvert(!ouvert)}
                >
                    {ouvert ? 'Fermer' : 'Menu'}
                </button>
                <nav className={`menu ${ouvert ? 'menu-ouvert' : ''}`}>
                    {liens.map((lien) => (
                        <a
                            // key={lien.chemin}
                            href={lien.chemin}
                            onClick={() => setOuvert(false)}
                        >
                            {lien.libelle}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}
export default Header