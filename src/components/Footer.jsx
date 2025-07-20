import "../assets/footer.css";
import React from 'react';

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="section-footer text-light py-4 text-center">
      <Container>
        <p className="mb-2">© Nathalie Darnaudat | {new Date().getFullYear()}</p> 
        <div className="container-logo">
            <a
              href="https://github.com/Nathi33"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="logo" icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/nathalie-darnaudat-067a8a307"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="logo" icon={faLinkedin} />
            </a>
          </div>
        <div className="container-links">
            <Link to="/legal-mentions" className="footer-links text-light me-3">Mentions légales</Link>
            <Link to="/privacy-policy" className=" footer-links text-light">Confidentialité</Link>
          </div>
      </Container>
    </footer>
  );
}

export default Footer;
