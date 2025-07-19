import "../assets/notfound.css";
import React from 'react';

import oops from '../pictures/oops.png';

const NotFound = () => {
  return (
    <div className="container-notfound">
      <div className="picture-notfound">
          <img src={oops} alt="Logo d'un nuage où il est noté Oops" className="img-notfound" />
        </div>  
      <h1>Erreur 404 - Page non trouvée</h1>
      <p>Oups ! La page que vous recherchez n'existe pas.</p>
      <a href="/" className="link-notfound">
        Retour à l'accueil
      </a>
    </div>
  );
}

export default NotFound;
