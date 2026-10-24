// function App() {
//   const nom = 'Étudiants Baleveng'
//   return (<div className="conteneur">
//     <h1>{nom}</h1>
//     <p>Ensemble, on va plus loin.</p>
//   </div>)
// } export default App

import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Header />
      <main className="conteneur">
        <p>Le contenu de la page viendra ici.</p>
      </main>
      <Footer />
    </>
  )
}
export default App