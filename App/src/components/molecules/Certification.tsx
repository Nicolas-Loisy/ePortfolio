import React from "react";
import styled from "styled-components";

// Conteneur principal pour la liste de certifications
const CertificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;

// Conteneur pour chaque certification
const CertificationItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  text-align: left;
  width: 100%;
`;

// Conteneur pour la ligne de contenu (titre, année, description et bouton lien)
const CertificationContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: nowrap;
`;

// Conteneur pour les informations de gauche (titre, description et année)
const CertificationDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 2;
  padding-right: 1rem;
`;

// Titre de la certification
const CertificationTitle = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.text || "#333"};
  margin: 0;
  margin-bottom: 0.5rem;
  text-align: left;
  font-weight: bold;
`;

// Conteneur pour l'année et la description sur une même ligne
const CertificationInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  text-align: left;
`;

// Année de la certification
const CertificationYear = styled.span`
  font-size: 0.9rem;
  color: ${(props) => props.theme.year || "#95a5a6"};
  margin-right: 1rem;
  flex-shrink: 0; // Empêche l'année de se rétrécir
`;

// Description de la certification
const CertificationDescription = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.text || "#666"};
  margin: 0;
  text-align: left;
`;

// Conteneur pour le lien
const CertificationLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  margin-left: auto;
`;

const CertificationLink = styled.a`
  font-size: 1rem;
  color: ${(props) => props.theme.text || "#e3e3e3"};
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.titleBorder || "#f9d342"};
  padding: 0.5rem 1rem;
  font-weight: bold;
  border-radius: 4px;
  // border-radius: 0px;
  text-align: center;
  text-decoration: none; // Empêche le soulignement

  &:hover {
    background-color: ${(props) => props.theme.titleBorder || "#f9d342"};
    color: #fff; // Couleur du texte au hover (blanc)
  }
`;

// Séparateur
const Separator = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${(props) => props.theme.border || "#ddd"};
  margin: 0.1rem 0;
`;

// Style pour le titre de la section
const SectionTitle = styled.h2`
  color: ${(props) => props.theme.text};
  margin-bottom: 1rem;
  border-bottom: 5px solid #f9d342;
  padding-bottom: 0.5rem;
  align-self: flex-start;
  width: fit-content;
`;

// Interface pour les données de la certification
interface CertificationProps {
  title: string;
  certifications: {
    title: string;
    description: string;
    year: string;
    link: string;
  }[];
}

const Certification: React.FC<CertificationProps> = ({
  title,
  certifications,
}) => {
  return (
    <CertificationContainer>
      <SectionTitle>{title}</SectionTitle>

      {certifications.map((cert, index) => (
        <div key={index}>
          <CertificationItem>
            <CertificationContent>
              <CertificationDetails>
                <CertificationTitle>{cert.title}</CertificationTitle>
                <CertificationInfo>
                  <CertificationYear>{cert.year} - </CertificationYear>
                  <CertificationDescription>
                    {cert.description}
                  </CertificationDescription>
                </CertificationInfo>
              </CertificationDetails>

              {/* Lien vers la certification qui s'ouvre dans une nouvelle fenêtre */}
              <CertificationLinkContainer>
                <CertificationLink
                  href={cert.link}
                  target="_blank" // Ouvre le lien dans une nouvelle fenêtre ou onglet
                  rel="noopener noreferrer" // Sécurité pour les liens externes
                >
                  Voir la certification
                </CertificationLink>
              </CertificationLinkContainer>
            </CertificationContent>
          </CertificationItem>
          {index < certifications.length - 1 && <Separator />}
        </div>
      ))}
    </CertificationContainer>
  );
};

export default Certification;
