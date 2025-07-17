import "../assets/skills.css";
import React from 'react';

import ProgressBar from "react-bootstrap/ProgressBar";
import Button from 'react-bootstrap/Button';

import imageCV from '../pictures/image-cv.png';

const Skills = () => {
  return (
    <section id="skills" className='section-skills'>
      <h2 className='title-skills'>MES COMPETENCES</h2>
      <div className="skills-content">
        <div className="skills-list">
          <p className="titled-skills">Back-end</p>
            <ul className="skills-list-ul">
              <li className="skills-list-li">Python</li>
              <ProgressBar now={90} />
              <li className="skills-list-li">Django</li>
              <ProgressBar now={80} />
              <li className="skills-list-li">PHP</li>
              <ProgressBar now={80} />
              <li className="skills-list-li">Symfony</li>
              <ProgressBar now={70} />
              <li className="skills-list-li">Node.js</li>  
              <ProgressBar now={70} />
            </ul>
          
          <p className="titled-skills">Front-end</p>
            <ul className="skills-list-ul">
              <li className="skills-list-li">HTML</li>
              <ProgressBar now={90} />
              <li className="skills-list-li">CSS</li>
              <ProgressBar now={85} />
              <li className="skills-list-li">JavaScript</li>
              <ProgressBar now={80} />
              <li className="skills-list-li">React</li>
              <ProgressBar now={75} />
              <li className="skills-list-li">Vue</li>
              <ProgressBar now={70} />
              <li className="skills-list-li">Angular</li>
              <ProgressBar now={70} />
            </ul>

          <p className="titled-skills">CMS</p>
            <ul className="skills-list-ul">
              <li className="skills-list-li">WordPress</li>
              <ProgressBar now={90} />
              <li className="skills-list-li">Prestashop</li>
              <ProgressBar now={80} />
            </ul>

          <p className="titled-skills">Base de données</p>
            <ul className="skills-list-ul">
              <li className="skills-list-li">MySQL</li>
              <ProgressBar now={85} />
              <li className="skills-list-li">MongoDB</li>
              <ProgressBar now={70} />
            </ul>

          <p className="titled-skills">Outils et autres</p>
            <ul className="skills-list-ul">
              <li className="skills-list-li">GitHub</li>
              <ProgressBar now={90} />
              <li className="skills-list-li">Figma</li>
              <ProgressBar now={75} />
            </ul>
        </div>

        <div className="skills-cv">
          <div className="picture-skills">
            <img src={imageCV} alt="Aperçu du CV" className="cv-picture" />
          </div>
          <div className="btns-skills">
            <Button variant="light" href="/CV_Nathalie_Darnaudat.pdf" className="custom-btn-skills" download>Télécharger mon CV</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
