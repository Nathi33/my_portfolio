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
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://github.com/Nathi33"
            >
              <FontAwesomeIcon className="logo" icon={faGithub} />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="www.linkedin.com/in/nathalie-darnaudat-067a8a307"
            >
              <FontAwesomeIcon className="logo" icon={faLinkedin} />
            </Link>
          </div>
        <div className="container-links">
            <a href="/legal-mentions" className="footer-links text-light me-3">Mentions légales</a>
            <a href="/privacy-policy" className=" footer-links text-light">Confidentialité</a>
          </div>
      </Container>
    </footer>
  );
}

export default Footer;
