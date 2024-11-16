import React from "react";
import styled from "styled-components";
import { FaGraduationCap } from "react-icons/fa";

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

// Conserve un conteneur pour aligner le titre à gauche
const TitleContainer = styled.div`
  align-self: flex-start;
  width: 100%;
`;

// Conteneur pour chaque élément de la timeline
const TimelineItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Conteneur gauche pour la date et le point/barre
const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-right: 20px;
  flex-basis: 180px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
    flex-basis: auto;
    width: 100%;
    justify-content: center;
  }
`;

// Conteneur pour la date (à gauche du point)
const DateContainer = styled.div`
  // font-size: 1rem;
  color: ${(props) => props.theme.text || "#333"};
  font-weight: bold;
  text-align: right;
  width: 180px;
  height: 100%;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: top;

  @media (max-width: 768px) {
    text-align: center;
    padding-right: 0;
    width: auto;
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
    display: none;
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

// Conteneur pour le contenu de l'expérience (titre, description, et image)
const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 1rem;
  flex-grow: 1;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
    align-items: center;
  }
`;

// Conteneur pour l'image à gauche du texte
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

// Image pour chaque expérience
const DiplomeImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const DiplomeContainer = styled.div`
  width: 100%;
`;

// Titre de l'expérience
const DiplomeTitle = styled.h3`
  margin: 0;
  color: ${(props) => props.theme.text || "#333"};
`;

// Description de l'expérience
const DiplomeDescription = styled.p`
  margin-top: 0.5rem;
  color: ${(props) => props.theme.text || "#666"};
`;

// Style pour le titre de la section
const SectionTitle = styled.h2`
  color: ${(props) => props.theme.text};
  margin-bottom: 1rem;
  border-bottom: 5px solid #f9d342;
  padding-bottom: 0.5rem;
  width: fit-content;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Icon = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 50%;

  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
    font-size: 1.8rem;
  }
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

// Composant Diplome
interface DiplomeProps {
  diplomes: {
    date: string;
    title: string;
    description: string;
    imageUrl?: string;
  }[];
  title: string;
}

const Diplome: React.FC<DiplomeProps> = ({ diplomes, title }) => {
  return (
    <TimelineContainer>
      {/* Conserve le titre aligné à gauche */}
      <TitleContainer>
        <SectionTitle>{title}</SectionTitle>
      </TitleContainer>

      {diplomes.map((exp, index) => (
        <React.Fragment key={index}>
          <TimelineItem>
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
                <DiplomeTitle dangerouslySetInnerHTML={{ __html: exp.title }} />
                <DiplomeDescription
                  dangerouslySetInnerHTML={{ __html: exp.description }}
                />
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
          {/* Ajoute un séparateur horizontal pour les petits écrans */}
          {index < diplomes.length - 1 && <HorizontalSeparator />}
        </React.Fragment>
      ))}
    </TimelineContainer>
  );
};

export default Diplome;
