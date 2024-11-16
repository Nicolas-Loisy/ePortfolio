import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

// Conteneur principal de la carte
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 1rem auto;
  padding: 1.5rem;
  border: 2px solid ${(props) => props.theme.titleBorder || "#f9d342"};
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box; // Assurer que le padding ne dépasse pas la largeur totale

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// Conteneur pour les informations (à gauche) et l'image (à droite)
const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap; // Permet au contenu de se réorganiser si nécessaire

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Section de gauche avec le titre, sous-titre, date, description
const CardText = styled.div`
  flex: 1;
  padding-right: 1rem;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 1rem;
  }
`;

// Section de droite pour l'image
const CardImage = styled.img`
  flex-shrink: 0;
  width: 60%; // Ajustement : l'image prend toute la largeur sur petit écran
  max-width: 200px; // Largeur max pour les écrans larges
  height: auto; // Ajustement dynamique de la hauteur
  object-fit: cover;
  border-radius: 8px;
  // border: 1px solid ${(props) => props.theme.titleBorder || "#f9d342"};
  align-self: center; // Aligner horizontalement au centre

  @media (max-width: 768px) {
    max-width: 100%; // S'assurer que l'image ne dépasse pas la largeur de l'écran
    height: auto;
  }
`;

// Titre de la carte
const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.text || "#333"};
  margin: 0;
  margin-bottom: 0.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

// Sous-titre de la carte
const CardSubtitle = styled.h4`
  font-size: 1.2rem;
  color: ${(props) => props.theme.subtitle || "#666666"};
  margin: 0;
  margin-bottom: 0.5rem;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

// Date de la carte
const CardDate = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.year || "#999999"};
  margin: 0;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

// Description de la carte
const CardDescription = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.text || "#666666"};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

// Conteneur pour les logos des technologies
const TechLogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }

  svg {
    width: 30px;
    height: 30px;
    object-fit: contain;
    margin-right: 0.5rem;
    padding: 0.2rem;

    @media (max-width: 768px) {
      margin-bottom: 0.5rem;
    }
  }
`;

// Bouton de démo
const DemoButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: ${(props) => props.theme.text || "#e3e3e3"};
  text-align: center;
  font-weight: bold;
  border-radius: 4px;
  border: 2px solid ${(props) => props.theme.titleBorder || "#f9d342"};
  text-decoration: none;
  margin: 0 auto;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.titleBorder || "#f9d342"};
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

// Interface des props du composant
interface CardProps {
  title?: string;
  subtitle?: string;
  date?: string;
  description?: string;
  imageSrc?: string;
  techLogos?: React.ReactNode[];
  demoLink?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  date,
  description,
  imageSrc,
  techLogos = [],
  demoLink,
}) => {
  const { t } = useTranslation();

  return (
    <CardContainer>
      <CardContent>
        <CardText>
          {title && <CardTitle>{title}</CardTitle>}
          {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
          {date && <CardDate>{date}</CardDate>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardText>
        {imageSrc && <CardImage src={imageSrc} alt={title || "Card image"} />}
      </CardContent>

      {techLogos.length > 0 && (
        <TechLogoContainer>
          {techLogos.map((logo, index) => (
            <React.Fragment key={index}>{logo}</React.Fragment>
          ))}
        </TechLogoContainer>
      )}

      {demoLink && (
        <DemoButton href={demoLink} target="_blank" rel="noopener noreferrer">
          {t("global.redirectProject")}
        </DemoButton>
      )}
    </CardContainer>
  );
};

export default Card;
