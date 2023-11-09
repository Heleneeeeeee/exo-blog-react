import Home from './page/Home';
import Articles from './page/Articles';
import Profil from './page/Profil';
import Contact from './page/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/articles" element = {<Articles />} />
      <Route path="/profil" element = {<Profil />} />
      <Route path="/contact" element = {<Contact />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;


// Besoin d'une librairie
// Déclare 2 composants "Browser Router" et "Route"
// Bien penser à recharcher tout ce qui est commun à toutes les pages (header/footer)
// App contient la liste des urls
