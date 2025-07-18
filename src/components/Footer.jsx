import "../assets/footer.css";
import React from 'react';

import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="section-footer bg-dark text-light py-4 text-center">
      <Container>
        <p className="mb-2">© Nathalie Darnaudat | {new Date().getFullYear()}</p> 
        <div className="container-links">
            <a href="/legal-mentions" className="footer-links text-light me-3">Mentions légales</a>
            <a href="/privacy-policy" className=" footer-links text-light">Confidentialité</a>
          </div>
        
      </Container>
    </footer>
  );
}

export default Footer;
