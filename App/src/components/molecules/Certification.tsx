import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

// Conteneur principal pour la liste de certifications
const CertificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box;
  width: 74%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
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
  align-items: flex-start;
  width: 100%;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    flex-direction: column; // Chaque élément en colonne sur les petits écrans
    align-items: stretch; // Assure que chaque élément occupe la largeur complète
  }
`;

// Conteneur pour les informations de gauche (titre, description et année)
const CertificationDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 2;
  padding-right: 1rem;

  @media (max-width: 768px) {
    padding-right: 0; // Supprime le padding sur petits écrans
  }
`;

// Titre de la certification
const CertificationTitle = styled.h3`
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

  @media (max-width: 768px) {
    flex-direction: column; // L'année et la description en colonne sur petits écrans
    align-items: flex-start;
  }
`;

// Année de la certification
const CertificationYear = styled.span`
  color: ${(props) => props.theme.year || "#95a5a6"};
  margin-right: 1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    align-self: center; // Centre l'année sur petits écrans
    margin-right: 0; // Supprime la marge sur petits écrans
    margin-bottom: 0.5rem;
  }
`;

// Description de la certification
const CertificationDescription = styled.p`
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
  margin-top: 10px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-left: 0;
    margin-top: 1rem;
  }
`;

const CertificationLink = styled.a`
  color: ${(props) => props.theme.text || "#e3e3e3"};
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.titleBorder || "#f9d342"};
  padding: 0.5rem 1rem;
  font-weight: bold;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.titleBorder || "#f9d342"};
    color: #fff;
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
  const { t } = useTranslation();

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
                  <CertificationYear>{cert.year} -</CertificationYear>
                  <CertificationDescription>
                    {cert.description}
                  </CertificationDescription>
                </CertificationInfo>
              </CertificationDetails>

              {/* Lien vers la certification */}
              <CertificationLinkContainer>
                <CertificationLink
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("global.redirectCertif")}
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
