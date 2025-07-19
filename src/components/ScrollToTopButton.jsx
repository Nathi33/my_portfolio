import "../assets/scrollToTop.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

function ScrollToTopButton() {
  // Permet de gérer l'affichage du bouton de retour en haut de la page
  const [showButton, setShowButton] = useState(false);

  // Fonction permettant de faire défiler vers le haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Permet de gérer l'affichage en fonction du scroll
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Ajoute un écouteur d'événements pour le scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <FontAwesomeIcon
          className="scrollToTopButton"
          icon={faCircleArrowUp}
          onClick={scrollToTop}
        />
      )}
    </>
  );
}

export default ScrollToTopButton;
