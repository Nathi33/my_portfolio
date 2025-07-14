import "../assets/home.css";
import React from 'react';
import Button from 'react-bootstrap/Button';

import About from '../components/About.jsx';      
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Contact from '../components/Contact.jsx';

import avatar from '../pictures/avatar.png';

const home = () => {
  return (
    <main>
      <section className="home">
        <div className="picture-home">
          <img src={avatar} alt="Avatar profil" className="img-home" />
        </div>
        <div className="titles-home">
          <h1 className="h1-home">Nathalie Darnaudat</h1>
          <h2 className="h2-home">Développeuse web et mobile</h2>
        </div>
        <div className="btns-home">
          <Button variant="light" href="#about" className="custom-btn">Mon histoire</Button>
        </div>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

export default home;
