import "../assets/header.css";
import React, { useEffect, useState} from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState(window.location.hash);
  const location = useLocation();

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener('hashchange', onHashChange);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 50;
      const isHomePath = location.pathname === '/';
      const hasHash = hash !== '';

      if (isHomePath && isTop && !hasHash) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
 }, [location.pathname, hash]);

  return (
    <header>
      <Navbar expand="lg" className={`custom-navbar ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`} fixed="top">
        <Container fluid>
          <Navbar.Brand as="a" href="/" className="logo">Nathalie Darnaudat</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto menu">
              <Nav.Link href="/">Accueil</Nav.Link>
              <Nav.Link href="/#about">Profil</Nav.Link>
              <Nav.Link href="/#skills">Compétences</Nav.Link>
              <Nav.Link href="/#projects">Projets</Nav.Link>
              <Nav.Link href="/#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;