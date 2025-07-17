import "../assets/projects.css"
import React, { useEffect, useRef, useState} from 'react';

import {Card, Col, Row, Modal, Button } from 'react-bootstrap';

import ProjetAngular from "../pictures/Projet_Angular.png";
import ProjetNodeJs from "../pictures/Projet_Nodejs.png";
import ProjetWordPress from "../pictures/Projet_WordPress.png";
import ProjetSymfony from "../pictures/Projet_Symfony.png";
import ProjetDjango from "../pictures/Projet_Django.png";
import ProjetFigma from "../pictures/Projet_Figma.png";

const projectData = [
  {
    image: ProjetAngular,
    title: "Trouve ton artisan",
    description: "Plateforme de recherches (Angular JS).",
    detail: "Le projet Trouve Ton Artisan consistait à créer un site web accessible à tous permettant aux particuliers de trouver un artisan de la région Auvergne Rhône – Alpes en permettant de demander des renseignements, prestations ou encore tarifs via un formulaire de contact.",
    technologies: "Angular JS, Sass, Bootstrap",
    git: "https://github.com/Nathi33/trouve_ton_artisan.git",
    lien: "https://nathi33.alwaysdata.net/"
  },
  {
    image: ProjetNodeJs,
    title: "Port de Plaisance Russell",
    description: "API Rest (Node JS)",
    detail: "Le projet consistait à réaliser une application web de gestion des réservations de catway en mettant en place une API Rest.",
    technologies: "Node JS, MongoDB",
    git: "https://github.com/Nathi33/port_plaisance_russell.git",
    lien: "https://port-plaisance-russell-rj6h.onrender.com/"
  },
  {
    image: ProjetWordPress,
    title: "La vie des plantes",
    description: "Site vitrine (WordPress)",
    detail: "L'objectif était de créer un site internet, avec une partie e-commerce pour la vente de plantes et de produits dérivés.",
    technologies: "WordPress, Elementor",
    git : "https://github.com/Nathi33/la-vie-des-plantes.git"
  },
  {
    image: ProjetSymfony,
    title: "Ecommerce-Stubborn",
    description: "Site ecommerce (Symfony)",
    detail: "La mission était de réaliser un site e-commerce de vente de vêtements en ligne avec un système de panier d'achat, gestion des utilisateurs, des produits, un système de paiement ainsi qu'une interface dédiée à l'administration.",
    technologies: "Symfony, MySql",
    git: "https://github.com/Nathi33/ecommerce_stubborn.git"
  },
  {
    image: ProjetDjango,
    title: "Knowledge Learning",
    description: "Plateforme E-learning (Django)",
    detail: "Le projet de création de la plateforme e-learning « Knowledge Learning » consiste à concevoir un site permettant d’accéder à des formations en ligne payantes avec un système de gestion des utilisateurs, des cours et des paiements.",
    technologies: "Django",
    git: "https://github.com/Nathi33/knowledge_learning_project.git"
  },
  {
    image: ProjetFigma,
    title: "Probeats",
    description: "Maquettage d'un site (Figma)",
    detail: "Le projet Probeats consistait à réaliser le maquettage d'un site de vente de matériel audio en ligne.",
    technologies: "Figma",
    git: "https://github.com/Nathi33/maquetter-avec-figma.git"
  },
];

const Projects = () => {
  const cardsRef = useRef([]);
  const [ showModal, setShowModal ] = useState(false);
  const [ selectedProject, setSelectedProject ] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } 
        });
      },
      { threshold: 0.5 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };
    
  return (
    <section id="projects" className="section-projects">
      <h2 className="title-projects">MES PROJETS</h2>
      <div className="container-projects">
        <Row xs={1} md={3} className="g-5 align-items-stretch">
          {projectData.map((project, idx) => (
            <Col key={idx}>
              <Card className="card-project" ref={(el) => (cardsRef.current[idx] = el)}>
                <div className="overlay-project" onClick={() => handleClick(project)}>
                  <span className="cross-project">+</span>
                </div>
                <Card.Img variant="top" className="img-project" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            ))}
        </Row>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedProject.description}</p>
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="img-fluid mb-3"
              style={{ width: "100%", borderRadius: "5px", marginBottom: "1rem"}} 
            />
            <p className="text-project"><span className="label-project">Informations : </span>{selectedProject.detail}</p>
            <p className="text-project"><span className="label-project">Technologies : </span>{selectedProject.technologies}</p>
            <div className="git-project">
              {selectedProject.git && (
                <a href={selectedProject.git} target="_blank" rel="noopener noreferrer" className="link-project">
                  Accéder au dépôt GitHub
                </a>
              )}
            </div>
            <div className="web-project">
              {selectedProject.lien && (
                <a href={selectedProject.lien} target="_blank" rel="noopener noreferrer" className="link-project">
                  Voir le projet
                </a>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} className="btn-close-project">
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
}

export default Projects;
