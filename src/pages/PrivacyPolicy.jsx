import "../assets/privacy.css";
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className='privacy-page container py-5 mt-5'>
      <h2 className='privacy-title'>Politique de Confidentialité</h2>

      <p className="privacy-text">Données collectées :</p>
      <p className="privacy-text-bis">Lorsque vous utilisez le formulaire de contact, les informations suivantes peuvent être collectées :</p>
      <ul className="privacy-list">
        <li>Nom</li>
        <li>Prénom (facultatif)</li> 
        <li>Email</li>
        <li>Téléphone (facultatif)</li>
        <li>Objet et contenu du message</li>
      </ul>
       
      <p className="privacy-text">Finalité de la collecte :</p>
      <p>Ces données sont utilisées uniquement pour répondre à votre demande de contact. Elles ne sont ni vendues ni partagées.</p>

      <p className="privacy-text">Durée de conservation :</p>
      <p>Les données sont conservées pendant une durée maximale de 1 an à compter de la date d’envoi.</p>

      <p className="privacy-text">Vos droits :</p>
      <p>Conformément au RGPD, vous disposez du droit d'accès, de rectification, d’opposition, de suppression et de portabilité de vos données.<br />
        Pour exercer vos droits, contactez-moi à : nathaliedarnaudat@outlook.com</p>

      <p className="privacy-text">Cookies :</p>
      <p>Ce site n’utilise pas de cookies de suivi, de publicité ou d’analyse.</p>
    </section>
  );
}

export default PrivacyPolicy;
