import React from "react";
import styled from "styled-components";
import { FaBriefcase } from "react-icons/fa";

// Conteneur principal pour la timeline
const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  box-sizing: border-box;
  width: 74%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Conteneur pour chaque élément de la timeline
const TimelineItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 1rem;
  }
`;

// Conteneur gauche pour la date et le point/barre
const LeftContainer = styled.div`
  flex: 1; // Prend une part égale de l'espace disponible
  max-width: 250px; // Largeur maximale pour les grands écrans
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-right: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    margin-bottom: 1rem;
    flex-basis: auto; // Supprime la largeur fixe sur mobile
  }
`;

// Conteneur pour la date
const DateContainer = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.text || "#333"};
  font-weight: bold;
  text-align: right;
  width: 100%;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: top;

  @media (max-width: 768px) {
    text-align: center;
    width: auto;
    padding-right: 0;
  }
`;

// Conteneur pour le point et la barre (à droite de la date)
const PointAndBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 5px;
  height: 100%;

  @media (max-width: 768px) {
    display: none; // Cache la barre et le point sur les petits écrans
  }
`;

// Point jaune sur la frise pour chaque expérience
const TimelinePoint = styled.div`
  width: 15px;
  height: 15px;
  background-color: #f9d342;
  border-radius: 50%;
  z-index: 1;
  margin-bottom: 10px;
`;

// Barre qui relie chaque point (sous le point jaune)
const Bar = styled.div`
  width: 2px;
  height: 100%;
  background-color: #f9d342;
  z-index: 0;
  position: absolute;
`;

// Conteneur pour le contenu de l'expérience
const ContentContainer = styled.div`
  flex: 1; // Prend une part égale de l'espace disponible
  max-width: 700px; // Largeur maximale pour les grands écrans
  display: flex;
  flex-direction: row;
  justify-content: space-between; // Maintient les éléments alignés
  padding-left: 1rem;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
    align-items: center;
    flex-basis: auto; // Supprime la largeur fixe sur mobile
  }
`;

// Conteneur pour l'image à gauche du texte
const ImageContainer = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

// Image pour chaque expérience
const ExperienceImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

// Titre de l'expérience
const ExperienceTitle = styled.h3`
  margin: 0;
  color: ${(props) => props.theme.text || "#333"};
`;

// Description de l'expérience
const ExperienceDescription = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.text || "#666"};
`;

// Style pour le titre de la section
const SectionTitle = styled.h2`
  color: ${(props) => props.theme.text};
  margin-bottom: 1rem;
  border-bottom: 5px solid #f9d342;
  padding-bottom: 0.5rem;
  align-self: flex-start;
  width: fit-content;

  @media (max-width: 768px) {
    align-self: flex-start;
    width: fit-content;
  }
`;

const Icon = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 50%;
`;

// Séparateur horizontal pour mobile
const HorizontalSeparator = styled.hr`
  width: 100%;
  border: none;
  border-top: 2px solid ${(props) => props.theme.borderColor || "#f9d342"};
  margin: 1rem 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

// Composant Expérience
interface ExperienceProps {
  experiences: {
    date: string;
    title: string;
    description: string;
    imageUrl?: string;
  }[];
  title: string;
}

const Experience: React.FC<ExperienceProps> = ({ experiences, title }) => {
  return (
    <TimelineContainer>
      {/* Titre de la section */}
      <SectionTitle>{title}</SectionTitle>
      {experiences.map((exp, index) => (
        <TimelineItem key={index}>
          {/* Colonne gauche avec la date */}
          <LeftContainer>
            <DateContainer>{exp.date}</DateContainer>
            <PointAndBarContainer>
              <TimelinePoint />
              {index < experiences.length - 1 && <Bar />}
            </PointAndBarContainer>
          </LeftContainer>

          {/* Contenu de l'expérience à droite avec image */}
          <ContentContainer>
            <div>
              <ExperienceTitle
                dangerouslySetInnerHTML={{ __html: exp.title }}
              />
              <ExperienceDescription
                dangerouslySetInnerHTML={{ __html: exp.description }}
              />
            </div>
            {exp.imageUrl ? (
              <ImageContainer>
                <ExperienceImage src={exp.imageUrl} alt={exp.title} />
              </ImageContainer>
            ) : (
              <ImageContainer>
                <Icon>
                  <FaBriefcase />
                </Icon>
              </ImageContainer>
            )}
          </ContentContainer>
          {/* Ajoute un séparateur horizontal pour les petits écrans */}
          {index < experiences.length - 1 && <HorizontalSeparator />}
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default Experience;
