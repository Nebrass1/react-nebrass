// src/CalculatriceSimple.jsx

import React, { useState } from 'react';

function CalculatriceSimple() {
  const [valeurA, setValeurA] = useState('');
  const [valeurB, setValeurB] = useState('');

  const [resultat, setResultat] = useState('Entrez les nombres ci-dessus.');

  const calculerSomme = () => {

    const numA = parseFloat(valeurA);
    const numB = parseFloat(valeurB);

    if (isNaN(numA) || isNaN(numB)) {
      setResultat("Les deux entrées doivent être des nombres.");
    } else {
      setResultat(`La somme de ${numA} et ${numB} est : ${numA + numB}`);
    }
  };

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid purple', 
      borderRadius: '8px', 
      maxWidth: '400px',
      margin: '20px auto',
      backgroundColor: '#f9f5ff'
    }}>
      <h3>Calculatrice de Somme</h3>
      
      {/* 1. Champ pour le nombre A */}
      <div style={{ marginBottom: '10px' }}>
        <label>Nombre A : </label>
        <input
          type="text"
          value={valeurA}
          onChange={(e) => setValeurA(e.target.value)}
          style={{ padding: '8px', marginLeft: '10px' }}
        />
      </div>

      {/* 2. Champ pour le nombre B */}
      <div style={{ marginBottom: '20px' }}>
        <label>Nombre B : </label>
        <input
          type="text"
          value={valeurB}
          
          onChange={(e) => setValeurB(e.target.value)}
          style={{ padding: '8px', marginLeft: '10px' }}
        />
      </div>

      {/* 3. Bouton pour déclencher le calcul */}
      <button 
        onClick={calculerSomme}
        style={{ 
          padding: '10px 20px', 
          backgroundColor: 'purple', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Calculer A + B
      </button>

      {/* 4. Affichage du Résultat/Message d'Erreur */}
      <p style={{ 
        marginTop: '20px', 
        fontWeight: 'bold', 
        color: resultat.startsWith('Erreur') ? 'red' : 'green' 
      }}>
        {resultat}
      </p>
    </div>
  );
}

export default CalculatriceSimple;