// src/App.jsx

import './App.css' 

import MessageSimple from './MessageSimple.jsx';
import MessageImage from './MessageImage.jsx';
import CalculatriceSimple from './CalculatriceSimple.jsx';

function App() {
  const nom = "Neb";
  const dateActuelle = new Date().toLocaleDateString();
  const heureActuelle = new Date().toLocaleTimeString();

  const sousTitre = <h2>La date et l'heure</h2>;

  return (
    <>
      <div className="App">
        {/* TP 1 : Introduction et Date/Heure */}
        <h2>TP 1</h2>
        <h1>Bienvenue, {nom} !</h1>
        <p>Ceci est mon premier composant React avec JSX.</p>
        
        {sousTitre}
        <p>Aujourd'hui, nous sommes le {dateActuelle} et il est {heureActuelle}.</p>
        
        <hr style={{ margin: '30px 0', border: '1px solid #ccc' }} /> 
         {/* Anciens Ateliers */}
         <h2>Atelier 2</h2>

        <MessageSimple />
        <MessageImage />
        {/* TP 3 : Calculatrice avec useState et Conditions */}
        <h2>Atelier 3</h2>
        <CalculatriceSimple />
        
        <hr style={{ margin: '30px 0', border: '1px solid #ccc' }} /> 
      
        
      </div>
    </>
  )
}

export default App