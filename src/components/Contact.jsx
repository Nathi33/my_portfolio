import "../assets/contact.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Row, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState('');
  const [statusVariant, setStatusVariant] = useState('');

  const formRef = useRef();
  const sectionRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_vqhswh5', 
      'template_ae27hdb', 
      formRef.current, 
      'X1Ard79bNDyxMfkFd'
    )
    .then(() => {
      setStatusMessage("Merci, votre message a été envoyé !");
      setStatusVariant('success');
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        setStatusMessage('');
        setStatusVariant('');
      }, 5000);
    })
    .catch(() => {
      setStatusMessage("Erreur : le message n'a pas pu être envoyé.");
      setStatusVariant('danger'); 
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        setStatusMessage('');
        setStatusVariant('');
      }, 5000);
    });

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <h2 className="title-contact">ME CONTACTER</h2>
      {statusMessage && (
        <Alert variant={statusVariant} className="status-message">
          {statusMessage}
        </Alert>
      )}

      <div className="container-contact">
        <Form ref={formRef} onSubmit={sendEmail}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Label>Nom <span className="required-asterisk" aria-label="obligatoire">*</span></Form.Label>
                <Form.Control name="name" type="text" className="input" required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formFirstName">
                <Form.Label>Prénom</Form.Label>
                <Form.Control name="firstName" type="text" className="input" />
              </Form.Group>
            </Col>
          </Row>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email <span className="required-asterisk">*</span></Form.Label>
          <Form.Control name="email" type="email" className="input" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Téléphone</Form.Label>
          <Form.Control name="phone" type="tel" className="input" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formObject">
          <Form.Label>Objet <span className="required-asterisk">*</span></Form.Label>
          <Form.Control name="title" type="text" className="input" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message <span className="required-asterisk">*</span></Form.Label>
          <Form.Control name="message" as="textarea" rows={4} placeholder="Votre message" className="input" required />
        </Form.Group>

        <p className="required-info">
          <span className="required-asterisk" aria-label="obligatoire">*</span> Champs obligatoires
        </p>

        <Button variant="dark" type="submit" className="btn-contact">
          Envoyer
        </Button>
      </Form>
    </div>
    </section>
  );
}

export default Contact;




