// src/App.jsx

import './App.css' 

import MessageSimple from './MessageSimple.jsx';
import MessageImage from './MessageImage.jsx';

function App() {
  const nom = "Neb";
  const dateActuelle = new Date().toLocaleDateString();
  const heureActuelle = new Date().toLocaleTimeString();

  const sousTitre = <h2>La date et l'heure</h2>;

  return (
    <>
      <div className="App">
        <h1>Bienvenue, {nom} !</h1>
        <p>Ceci est mon premier composant React avec JSX.</p>
        
        {sousTitre}
        <p>Aujourd'hui, nous sommes le {dateActuelle} et il est {heureActuelle}.</p>
        
        <hr style={{ margin: '30px 0', border: '1px solid #ccc' }} /> 
                
        <MessageSimple />
        
        <MessageImage />
        
      </div>
    </>
  )
}

export default App