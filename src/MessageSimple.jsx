// src/MessageSimple.jsx

import React, { useState } from 'react';

function MessageSimple() {
  const [message, setMessage] = useState("Le message initial est là !");

  const changerMessage = () => {
    setMessage("L'état a été mis à jour par le clic !");
  };

  return (
    <div style={{ padding: '15px', border: '2px solid blue', margin: '15px' }}>
      <h3>Composant 1 : Utilisation de l'État Simple</h3>
      
      <p style={{ fontWeight: 'bold' }}>{message}</p>
      
      <button onClick={changerMessage}>
        Changer le Message
      </button>
    </div>
  );
}

export default MessageSimple;