function Footer() {
    return (
        <footer className="footer">
            <div className="conteneur footer-contenu">
                <div>
                    <strong>Association des étudiants Baleveng de Dschang</strong>
                    <p>Entraide · Solidarité · Développement collectif</p>
                </div>
                <nav className="footer-liens">
                    <a href="/mentions-legales">Mentions légales</a>
                    <a href="/confidentialite">Politique de confidentialité</a>
                    <a href="/conditions">Conditions d'utilisation</a>
                </nav>
            </div>
            <p className="footer-credit">by Ardo Tekougoum</p>
        </footer>
    )
}
export default Footer