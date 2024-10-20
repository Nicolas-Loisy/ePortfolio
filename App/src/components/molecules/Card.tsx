import React from "react";
import styled from "styled-components";

// Conteneur principal de la carte
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 1rem auto;
  padding: 1.5rem;
  //   background-color: ${(props) => props.theme.cardBackground || "#ffffff"};
  background-color: "#9A1010FF";
  border: 2px solid ${(props) => props.theme.border || "#f9d342"};
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

// Conteneur pour les informations (à gauche) et l'image (à droite)
const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

// Section de gauche avec le titre, sous-titre, date, description
const CardText = styled.div`
  flex: 1;
  padding-right: 1rem;
`;

// Section de droite pour l'image
const CardImage = styled.img`
  flex-shrink: 0;
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.border || "#f9d342"};
`;

// Titre de la carte
const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.text || "#333"};
  margin: 0;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

// Sous-titre de la carte
const CardSubtitle = styled.h4`
  font-size: 1.2rem;
  color: ${(props) => props.theme.subtitle || "#666666"};
  margin: 0;
  margin-bottom: 0.5rem;
  font-weight: normal;
`;

// Date de la carte
const CardDate = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.year || "#999999"};
  margin: 0;
  margin-bottom: 0.5rem;
`;

// Description de la carte
const CardDescription = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.text || "#666666"};
  margin: 0;
`;

// Conteneur pour les logos des technologies
const TechLogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
`;

// Logo individuel de technologie
const TechLogo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-right: 0.5rem;
  border: 1px solid ${(props) => props.theme.border || "#f9d342"};
  border-radius: 4px;
  background-color: #fff;
  padding: 0.2rem;
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
  border: 2px solid ${(props) => props.theme.border || "#f9d342"};
  text-decoration: none;
  margin: 0 auto; // Centré horizontalement
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.border || "#f9d342"};
    color: #fff;
  }
`;

// Interface des props du composant
interface CardProps {
  title?: string;
  subtitle?: string;
  date?: string;
  description?: string;
  imageSrc?: string;
  techLogos?: string[];
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
            <TechLogo key={index} src={logo} alt={`tech-logo-${index}`} />
          ))}
        </TechLogoContainer>
      )}

      {demoLink && (
        <DemoButton href={demoLink} target="_blank" rel="noopener noreferrer">
          Voir la démo
        </DemoButton>
      )}
    </CardContainer>
  );
};

export default Card;
