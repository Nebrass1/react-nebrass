// src/MessageImage.jsx

import React from 'react';
import reactLogo from './assets/react.svg'; 

function MessageImage() {
  const auteur = "Neb";
  
  return (
    <div style={{ padding: '10px', border: '2px solid green', margin: '15px', borderRadius: '5px' }}>
      <h3>Composant 2 : Message et Image</h3>
      
      <p>Ce composant a été créé par **{auteur}** pour l'Atelier 2.</p>
      <p>Il combine le texte et une ressource graphique.</p>
      
      <img 
        src={reactLogo} 
        className="logo react" 
        alt="Logo React" 
        style={{ width: '80px', height: '80px', marginTop: '10px' }} 
      />
    </div>
  );
}

export default MessageImage;