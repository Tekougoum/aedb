import Bouton from '../components/Bouton'
import Carte from '../components/Carte'
import '../style/home.css'
const stats = [
  { valeur: '8', libelle: 'participants à la première rencontre' },
  { valeur: '18 oct. 2026', libelle: "date de naissance de l'idée" },
  { valeur: '6', libelle: 'objectifs que nous poursuivons' },
  { valeur: '1', libelle: 'famille : Baleveng' },
]
const missions = [
  {
    numero: '01', titre: 'Entraide',
    texte: 'Réviser ensemble, partager les cours, préparer les examens.'
  },
  {
    numero: '02', titre: 'Opportunités',
    texte: 'Bourses, stages, formations, concours et emplois partagés.'
  },
  {
    numero: '03', titre: 'Solidarité',
    texte: 'Accueillir les nouveaux et soutenir les membres en difficulté.'
  },
]
const activites = [
  { jour: '07', mois: 'NOV', titre: 'Séance de révision collective' },
  { jour: '14', mois: 'NOV', titre: 'Match de football fraternel' },
  { jour: '21', mois: 'NOV', titre: 'Causerie éducative' },
]
function Home() {
  return (
    <>
      {/* hero */}
      <section className="hero">
        <div className="conteneur hero-grille">
          <div>
            <p className="surtitre">Dschang · Étudiants originaires de Baleveng</p>
            <h1>Ensemble,<br /> on va plus loin.</h1>
            <p className="hero-texte">
              Nous sommes du même village, nous étudions dans la même ville.
              Plutôt que de rester chacun dans son coin, rassemblons-nous pour
              nous entraider, partager des opportunités et construire ensemble.
            </p>
            <div className="hero-boutons">
              <Bouton lien="/rejoindre">Rejoindre l'association</Bouton>
              <Bouton lien="/a-propos" variante="contour">
                Découvrir nos objectifs
              </Bouton>
            </div>
          </div>
          {/* <div className="photo-vide">Photo de groupe</div> */}
        </div>
      </section>
      {/* Chiffres */ }
      <section className="conteneur stats">
        {stats.map((s) => (
          <div key={s.libelle} className="stat">
            <strong>{s.valeur}</strong>
            <span>{s.libelle}</span>
          </div>
        ))}
      </section>
        <section className="section conteneur">
        <p className="surtitre">Notre mission</p>
        <h2>Rassembler, soutenir, construire.</h2>
        <div className="grille">
          {missions.map((m) => (
            <Carte key={m.titre} numero={m.numero} titre={m.titre} texte={m.texte} />
          ))}
        </div>
      </section>
      {/*  Prochaines activités */}
      <section className="section conteneur">
        <div className="section-entete">
          <div>
            <p className="surtitre">À venir</p>
            <h2>Prochaines activités</h2>
          </div>
          <Bouton lien="/agenda" variante="contour">Voir tout l'agenda</Bouton>
        </div>
        <div className="grille">
          {activites.map((a) => (
            <article key={a.titre} className="activite">
              <div className="date">
                <strong>{a.jour}</strong>
                <span>{a.mois}</span>
              </div>
              <h3>{a.titre}</h3>
              <Bouton lien="/agenda">Je participe</Bouton>
            </article>
          ))}
        </div>
      </section>
      {/* 5. Souvenirs */}
      <section className="section conteneur">
        <div className="section-entete">
          <div>
            <p className="surtitre">Mémoire</p>
            <h2>Derniers souvenirs</h2>
          </div>
          <Bouton lien="/souvenirs" variante="contour">Voir la galerie</Bouton>
        </div>
        <div className="grille">
          <div className="photo-vide">Photo</div>
          <div className="photo-vide">Photo</div>
          <div className="photo-vide">Photo</div>
        </div>
      </section>
      {/* 6. Citation */}
      <section className="citation">
        <div className="conteneur">
          <blockquote>« L'association nous appartient à tous. »</blockquote>
          <p>
            Sa réussite dépendra de notre capacité à nous mobiliser, nous
            écouter et travailler ensemble.
          </p>
        </div>
      </section>
    </>
  )
}
export default Home