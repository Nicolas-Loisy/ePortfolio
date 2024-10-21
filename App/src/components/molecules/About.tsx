import React from "react";
import styled from "styled-components";

interface AboutProps {
  title: string; // Titre de la section
  description: string; // Description personnelle
}

// Conteneur principal du composant About
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column; // Colonne pour le titre et la description
  align-items: flex-start; // Aligne le titre à gauche
  padding: 2rem; // Espacement interne
  box-sizing: border-box; // Inclut le padding dans la largeur totale
  background-color: ${(props) => props.theme.background}; // Couleur de fond
  width: fit-content; // La largeur s'adapte au contenu
  margin: 0 auto; // Centre le composant horizontalement
`;

// Style pour le titre
const SectionTitle = styled.h2`
  color: ${(props) => props.theme.text}; // Couleur du texte
  margin-bottom: 1rem; // Espacement en bas du titre
  border-bottom: 5px solid #f9d342; // Ligne sous le titre
  padding-bottom: 0.5rem; // Espacement intérieur
  width: fit-content; // La largeur du titre s'adapte à son contenu
`;

// Style pour la description
const Description = styled.p`
  color: ${(props) => props.theme.secondaryText}; // Couleur du texte
  max-width: 1200px; // Largeur maximale
  text-align: left; // Aligne le texte à gauche
  width: fit-content; // La largeur de la description s'adapte à son contenu
`;

const About: React.FC<AboutProps> = ({ title, description }) => {
  return (
    <AboutContainer>
      <SectionTitle>{title}</SectionTitle>
      <Description dangerouslySetInnerHTML={{ __html: description }} />
      {/* <Description>{description}</Description> */}
    </AboutContainer>
  );
};

export default About;
