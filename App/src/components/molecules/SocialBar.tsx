import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaEnvelope, // Icône d'e-mail
} from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";

// Conteneur principal qui centre la barre et les icônes
const SocialBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; // Prend toute la largeur disponible
  padding: 1rem;
  box-sizing: border-box;
`;

// Barre jaune horizontale
const YellowBar = styled.div`
  width: 100px; // Largeur fixe de la barre jaune
  height: 5px; // Hauteur de la barre jaune
  background-color: #f9d342;
  margin-right: 1rem; // Espace entre la barre et les icônes
`;

// Conteneur pour les icônes de réseaux sociaux
const IconsContainer = styled.div`
  display: flex;
  gap: 1.5rem; // Espacement entre les icônes
  position: relative; // Position relative pour le tooltip
`;

// Style pour les icônes individuelles avec effet de grossissement au survol
const SocialIcon = styled.div`
  color: ${(props) => props.theme.text}; // Couleur des icônes selon le thème
  font-size: 2rem; // Taille des icônes
  transition: transform 0.3s ease-in-out; // Animation pour le grossissement
  position: relative; // Position relative pour le tooltip

  &:hover {
    transform: scale(1.2); // Grossissement au survol
  }

  // S'assurer que le lien n'affecte pas la couleur des icônes
  a {
    color: inherit; // L'héritage de la couleur pour le lien
    text-decoration: none; // Supprimer le soulignement du lien
  }
`;

// Style pour le tooltip
const Tooltip = styled.div`
  position: absolute;
  top: 100%; // Positionne le tooltip en dessous de l'icône
  left: 50%; // Centre le tooltip
  transform: translateX(-50%); // Centre le tooltip
  background-color: #333; // Couleur de fond du tooltip
  color: white; // Couleur du texte
  padding: 3px 10px 5px; // Espacement interne
  border-radius: 4px; // Coins arrondis
  font-size: 0.75rem; // Réduit la taille de la police
  visibility: hidden; // Masquer par défaut
  opacity: 0; // Masquer par défaut
  transition: visibility 0s, opacity 0.2s linear; // Transition pour le tooltip

  ${SocialIcon}:hover & {
    visibility: visible; // Afficher au survol
    opacity: 1; // Rendre visible
  }
`;

// Props pour rendre les réseaux sociaux paramétrables
interface SocialBarProps {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
  huggingface?: string;
  email?: string; // Ajout de la propriété email
}

const SocialBar: React.FC<SocialBarProps> = ({
  facebook,
  twitter,
  linkedin,
  instagram,
  github,
  huggingface,
  email, // Ajout de l'email dans les props
}) => {
  return (
    <SocialBarContainer>
      {/* Barre jaune horizontale à gauche */}
      <YellowBar />

      {/* Conteneur des icônes de réseaux sociaux */}
      <IconsContainer>
        {facebook && (
          <SocialIcon>
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </SocialIcon>
        )}
        {twitter && (
          <SocialIcon>
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </SocialIcon>
        )}
        {linkedin && (
          <SocialIcon>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </SocialIcon>
        )}
        {instagram && (
          <SocialIcon>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </SocialIcon>
        )}
        {github && (
          <SocialIcon>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </SocialIcon>
        )}
        {huggingface && (
          <SocialIcon>
            <a href={huggingface} target="_blank" rel="noopener noreferrer">
              <SiHuggingface />
            </a>
          </SocialIcon>
        )}
        {email && (
          <SocialIcon>
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
            <Tooltip>{email}</Tooltip> {/* Afficher l'email dans le tooltip */}
          </SocialIcon>
        )}
      </IconsContainer>
    </SocialBarContainer>
  );
};

export default SocialBar;
