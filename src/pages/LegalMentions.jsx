import "../assets/legal.css";
import React from 'react';

const LegalMentions = () => {
  return (
    <section className='legal-page container py-5 mt-5'>
      <h2 className='legal-title'>Mentions Légales</h2>
      <p><strong>Éditeur du site :</strong><br />
        Nathalie Darnaudat<br />
        Email : nathaliedarnaudat@outlook.com<br />
        Responsable de la publication : Nathalie Darnaudat
      </p>

      <p><strong>Hébergement :</strong><br />
        OVH SAS<br />
        Adresse : 2 rue Kellermann 59100 Roubaix - France <br />
        Site : <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer" className="legal-links">ovh.com</a><br />
        Contact : <a href="https://www.ovh.com/fr/support/" target="_blank" rel="noopener noreferrer" className="legal-links">Support OVH</a>
      </p>

      <p><strong>Propriété intellectuelle :</strong><br />
        Tous les contenus présents sur ce site (textes, images, codes, etc.) sont la propriété exclusive de Nathalie Darnaudat, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation est strictement interdite.
      </p>

      <p><strong>Conditions d’utilisation :</strong><br />
        L’utilisateur reconnaît disposer des compétences et moyens nécessaires pour accéder au site et l’utiliser. Il est responsable de son équipement informatique et de sa sécurité.
      </p>

      <p><strong>Responsabilité :</strong><br />
        Malgré le soin apporté au contenu, l’éditeur ne peut garantir l’absence d’erreurs ou d’interruptions. Il ne peut être tenu responsable d’éventuels dommages liés à l’usage du site.
      </p>
    </section>
  );
}

export default LegalMentions;
