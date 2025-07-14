import "../assets/about.css";
import React from 'react';

const about = () => {
  return (
     <section id="about" className="about">

        <div className="title-about">
          <h2>A PROPOS DE MOI ...</h2>
        </div>

        <div className="text-about">
          <p>
            Après plus de 15 ans passés dans le secteur médico-social en tant qu’aide-soignante puis secrétaire médicale, j’ai choisi de me reconvertir vers un domaine qui m’a toujours attirée : le développement web.
          </p>
          <p>
            Curieuse, rigoureuse et toujours en quête d’apprendre, je me suis formée aux technologies du web et du mobile (HTML, CSS, JavaScript, Python, Django, React…) en réalisant des projets concrets, comme une plateforme e-learning ou un gestionnaire de tâches en fullstack.
          </p>
          <p>
            Mon parcours m’a appris à m’adapter, à résoudre des problèmes avec calme, et à collaborer efficacement avec des équipes pluridisciplinaires. Aujourd’hui, je mets ces compétences humaines et techniques au service de projets digitaux utiles, accessibles et bien pensés.
          </p>
          <p>
            Je suis passionnée par la création de solutions qui ont du sens et je continue chaque jour à progresser dans cet univers stimulant.
          </p>
        </div>

    </section>
  );
}

export default about;
