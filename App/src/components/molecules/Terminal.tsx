import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  //   max-width: 1200px;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;

// Conteneur du terminal avec un style visuel type terminal
const TerminalContainer = styled.div`
  background-color: #000;
  color: #0f0;
  //   color: #f9d342;
  font-family: "Courier New", Courier, monospace;
  padding: 1rem;
  border-radius: 5px;
  width: 100%;
  max-width: 800px;
  height: 50px;
  //   height: 30px;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.7);
`;

// Texte du terminal, avec un effet de clignotement du curseur
const TerminalText = styled.span`
  white-space: pre-wrap;
  display: inline;

  &::after {
    // content: "█";
    content: "▌";
    // content: "▐";
    // content: "|";
    display: inline-block;
    margin-left: 2px;
    animation: blink 1.1s step-start infinite; /* Clignotement direct sans transition */
  }

  @keyframes blink {
    50% {
      opacity: 0; /* Le curseur disparaît à 50% de l'animation */
    }
  }
`;

interface TerminalProps {
  texts: string[]; // Tableau de textes à afficher
}

const Terminal: React.FC<TerminalProps> = ({ texts }) => {
  const [currentText, setCurrentText] = useState(""); // Texte actuellement affiché
  const [textIndex, setTextIndex] = useState(0); // Index du texte actuel dans le tableau
  const [isDeleting, setIsDeleting] = useState(false); // Indique si on est en train d'effacer le texte
  const [speed, setSpeed] = useState(150); // Vitesse de l'animation

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[textIndex];

      if (isDeleting) {
        // Si on est en train d'effacer
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setSpeed(50); // Vitesse plus rapide pour l'effacement
      } else {
        // Sinon on écrit
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setSpeed(110); // Vitesse pour la frappe
      }

      // Si on a terminé d'effacer ou d'écrire
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause avant l'effacement
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length); // Passe au texte suivant
      }
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer); // Nettoie le timeout pour éviter les fuites de mémoire
  }, [currentText, isDeleting, speed, textIndex, texts]);

  return (
    <Container>
      <TerminalContainer>
        <TerminalText>{currentText}</TerminalText>
      </TerminalContainer>
    </Container>
  );
};

export default Terminal;
