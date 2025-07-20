import "../assets/skills.css";
import React from 'react';

import SkillBar from "./SkillBar";
import Button from 'react-bootstrap/Button';

import imageCV from '../pictures/image-cv.png';
import imageNotes from '../pictures/image-notes.png';

const Skills = () => {
  return (
    <section id="skills" className='section-skills'>
      <h2 className='title-skills'>MES COMPETENCES</h2>
      <h3 className="skills-intro">
        Compétences acquises durant ma formation, en cours de développement et de perfectionnement.
      </h3>
      <div className="skills-content">
        <div className="skills-list">
          <div className="skills-list-left">
            <p className="titled-skills">Back-end</p>
              <ul className="skills-list-ul">
                <SkillBar label="Python" value={30} />
                <SkillBar label="Django" value={40} />
                <SkillBar label="PHP" value={30} />
                <SkillBar label="Symfony" value={40} />
                <SkillBar label="Node.js" value={35} />
              </ul>
            
            <p className="titled-skills">Front-end</p>
              <ul className="skills-list-ul">
                <SkillBar label="HTML" value={55} />
                <SkillBar label="CSS" value={50} />
                <SkillBar label="JavaScript" value={35} />
                <SkillBar label="React" value={40} />
                <SkillBar label="Vue" value={35} />
                <SkillBar label="Angular" value={40} />
              </ul>
          </div>

          <div className="skills-list-right">
            <p className="titled-skills">CMS</p>
              <ul className="skills-list-ul">
                <SkillBar label="WordPress" value={65} />
                <SkillBar label="Prestashop" value={25} />
              </ul>

            <p className="titled-skills">Base de données</p>
              <ul className="skills-list-ul">
                <SkillBar label="MySQL" value={35} />
                <SkillBar label="MongoDB" value={30} />
              </ul>

            <p className="titled-skills">Outils et autres</p>
              <ul className="skills-list-ul">
                <SkillBar label="GitHub" value={60} />
                <SkillBar label="Figma" value={65} />
              </ul>
          </div>
        </div>

        <div className="skills-cv">
          <div className="picture-skills">
            <img src={imageCV} alt="Aperçu du CV" className="cv-picture" />
          </div>
          <div className="btns-skills">
            <Button variant="light" href="/Portfolio_Nath/CV_Nathalie_Darnaudat.pdf" className="custom-btn-skills" download>Télécharger mon CV</Button>
          </div>
        </div>

        <div className="skills-notes">
          <div className="picture-skills">
            <img src={imageNotes} alt="Aperçu du relevé de notes" className="notes-picture" />
          </div>
          <div className="btns-skills">
            <Button variant="light" href="/Portfolio_Nath/Releve_Notes.pdf" className="custom-btn-skills" download>Télécharger mon relevé</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
