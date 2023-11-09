import Home from './Home';
import Contact from './Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/contact" element = {<Contact />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;


// Besoin d'une librairie
// Déclare 2 composants Browser Router et Route
// Bien penser à recharcher tout ce qui est commun à toutes les pages (header/footer)
