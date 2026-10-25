// function App() {
//   const nom = 'Étudiants Baleveng'
//   return (<div className="conteneur">
//     <h1>{nom}</h1>
//     <p>Ensemble, on va plus loin.</p>
//   </div>)
// } export default App

// import Header from './components/Header'
// import Footer from './components/Footer'
// function App() {
//   return (
//     <>
//       <Header />
//       <main className="conteneur">
//         <p>Le contenu de la page viendra ici.</p>
//       </main>
//       <Footer />
//     </>
//   )
// }
// export default App

import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import PageVide from './pages/PageVide'
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<PageVide titre="À propos" />} />
        <Route path="/activites" element={<PageVide titre="Activités" />} />
        <Route path="/agenda" element={<PageVide titre="Agenda" />} />
        <Route path="/souvenirs" element={<PageVide titre="Souvenirs" />} />
        <Route path="/rejoindre" element={<PageVide titre="Rejoindre" />} />
        <Route path="/connexion" element={<PageVide titre="Connexion" />} />
        <Route path="/mentions-legales" element={<PageVide titre="Mentions légales" />} />
        <Route path="/confidentialite" element={<PageVide titre="Confidentialité" />} />
        <Route path="/conditions" element={<PageVide titre="Conditions d'utilisation" />} />
        <Route path="*" element={<PageVide titre="Page introuvable" />} />
      </Route>
    </Routes>
  )
}
export default App