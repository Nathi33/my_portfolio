import "../assets/header.css";
import React, { useEffect, useState} from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 50;
      const isHomePath = location.pathname === '/';

      if (isHomePath && isTop) {
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
  }, [location.pathname]);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = (id) => (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(id), 50);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <header>
      <Navbar expand="lg" className={`custom-navbar ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`} fixed="top">
        <Container fluid>
          <Navbar.Brand 
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }} 
            className="logo" 
            style={{ cursor: 'pointer' }}
          >
            Nathalie Darnaudat
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto menu">
              <Nav.Link 
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname !== '/') {
                    navigate('/');
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              > 
                Accueil
              </Nav.Link>
              <Nav.Link onClick={handleClick('about')}>Profil</Nav.Link>
              <Nav.Link onClick={handleClick('skills')}>Compétences</Nav.Link>
              <Nav.Link onClick={handleClick('projects')}>Projets</Nav.Link>
              <Nav.Link onClick={handleClick('contact')}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;