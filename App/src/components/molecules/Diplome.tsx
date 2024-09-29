import React from "react";
import styled from "styled-components";

import { FaGraduationCap } from "react-icons/fa";

// Conteneur principal pour la timeline
const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Centre tous les éléments de la timeline
  box-sizing: border-box;
  max-width: 1200px; // Largeur maximale des cartes
  width: 100%; // Prend toute la largeur disponible
  margin: 0 auto; // Centre horizontalement
`;

// Conserve un conteneur pour aligner le titre à gauche
const TitleContainer = styled.div`
  align-self: flex-start; // Aligne le titre à gauche
`;

// Conteneur pour chaque élément de la timeline
const TimelineItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch; // Assure que les deux colonnes ont la même hauteur
  margin-bottom: 2rem;
  justify-content: center; // Centre les items horizontalement
  width: 100%;
`;

// Conteneur gauche pour la date et le point/barre
const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-right: 20px;
`;

// Conteneur pour la date (à gauche du point)
const DateContainer = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.text || "#333"};
  font-weight: bold;
  text-align: right;
  width: 180px;
  height: 100%;
  padding-right: 10px; // Espacement entre la date et le point
  display: flex;
  flex-direction: column;
  justify-content: top; // Centre verticalement la date
`;

// Conteneur pour le point et la barre (à droite de la date)
const PointAndBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 5px;
  height: 100%;
`;

// Point jaune sur la frise pour chaque expérience
const TimelinePoint = styled.div`
  width: 15px;
  height: 15px;
  background-color: #f9d342; // Couleur jaune pour le point
  border-radius: 50%;
  z-index: 1;
  margin-bottom: 10px; // Espacement entre le point et la barre
`;

// Barre qui relie chaque point (sous le point jaune)
const Bar = styled.div`
  width: 2px;
  height: 100%;
  background-color: #f9d342;
  z-index: 0;
  position: absolute;
`;

// Conteneur pour le contenu de l'expérience (titre, description, et image)
const ContentContainer = styled.div`
  display: flex;
  flex-direction: row; // Place l'image et le texte côte à côte
  justify-content: flex-start;
  padding-left: 1rem;
  width: 500px;
  text-align: left; // Assure que le texte reste aligné à gauche
`;

// Conteneur pour l'image à gauche du texte
const ImageContainer = styled.div`
  margin-right: 1rem; // Espacement entre l'image et le texte
  margin-top: 1rem; // Espacement entre l'image et le texte
`;

// Image pour chaque expérience
const DiplomeImage = styled.img`
  width: 70px; // Taille de l'image
  height: 70px;
  object-fit: cover; // Assure que l'image garde ses proportions
  border-radius: 50%;
`;

const DiplomeContainer = styled.div`
  width: 500px;
`;

// Titre de l'expérience
const DiplomeTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  color: ${(props) => props.theme.text || "#333"};
`;

// Description de l'expérience
const DiplomeDescription = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: ${(props) => props.theme.text || "#666"};
`;

// Style pour le titre de la section
const SectionTitle = styled.h2`
  font-size: 2.5rem; // Taille du titre
  color: ${(props) => props.theme.text}; // Couleur du texte
  margin-bottom: 1rem; // Espacement en bas du titre
  border-bottom: 5px solid #f9d342; // Ligne sous le titre
  padding-bottom: 0.5rem; // Espacement intérieur
  width: fit-content; // La largeur du titre s'adapte à son contenu
`;

const Icon = styled.div`
  height: 50px; // Taille de l'icône
  width: 50px; // Taille de l'icône
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem; // Taille de l'icône
  margin-bottom: 0.5rem; // Espace entre l'icône et le titre
  color: ${(props) => props.theme.text}; // Couleur de l'icône
  border: 1px solid ${(props) => props.theme.borderColor}; // Bordure de l'icône
  border-radius: 50%; // Bordure ronde
`;

// Composant Expérience
interface DiplomeProps {
  diplomes: {
    date: string;
    title: string;
    description: string;
    imageUrl?: string; // Ajout de l'image optionnelle
  }[];
  title: string;
}

const Diplome: React.FC<DiplomeProps> = ({ diplomes, title }) => {
  return (
    <TimelineContainer>
      {/* Conserve le titre aligné à gauche */}
      <TitleContainer>
        <SectionTitle>{title}</SectionTitle> {/* Titre de la section */}
      </TitleContainer>

      {diplomes.map((exp, index) => (
        <TimelineItem key={index}>
          {/* Colonne gauche avec la date et le point/barre */}
          <LeftContainer>
            <DateContainer>{exp.date}</DateContainer>
            <PointAndBarContainer>
              <TimelinePoint />
              {/* Affiche la barre uniquement si ce n'est pas le dernier élément */}
              {index < diplomes.length - 1 && <Bar />}
            </PointAndBarContainer>
          </LeftContainer>

          {/* Contenu de l'expérience à droite avec image */}
          <ContentContainer>
            <DiplomeContainer>
              <DiplomeTitle>{exp.title}</DiplomeTitle>
              <DiplomeDescription>{exp.description}</DiplomeDescription>
            </DiplomeContainer>
            {/* Affichage de l'image si une image est fournie */}
            {exp.imageUrl ? (
              <ImageContainer>
                <DiplomeImage src={exp.imageUrl} alt={exp.title} />
              </ImageContainer>
            ) : (
              <ImageContainer>
                <Icon>
                  <FaGraduationCap />
                </Icon>
              </ImageContainer>
            )}
          </ContentContainer>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default Diplome;
