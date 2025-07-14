import "../assets/header.css";
import React, { useEffect, useState} from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Ajoute un listener de scroll si on est sur la page Home
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      // Force le fond pour les autres pages
      setScrolled(true);
    }
  }, [location]);

  return (
    <header>
      <Navbar className={`custom-navbar ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`} fixed="top">
        <Container fluid>
          <Navbar.Brand href="/" className="logo">Nathalie Darnaudat</Navbar.Brand>
          <Nav className="ms-auto menu">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="#about">Profil</Nav.Link>
            <Nav.Link href="#skills">Compétences</Nav.Link>
            <Nav.Link href="#projects">Projets</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
