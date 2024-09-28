import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa"; // Icônes pour Facebook, Twitter, LinkedIn, Instagram et GitHub
import { SiHuggingface } from "react-icons/si"; // Icône Hugging Face

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
`;

// Style pour les icônes individuelles avec effet de grossissement au survol
const SocialIcon = styled.a`
  color: ${(props) => props.theme.text}; // Couleur des icônes selon le thème
  font-size: 2rem; // Taille des icônes
  transition: transform 0.3s ease-in-out; // Animation pour le grossissement

  &:hover {
    transform: scale(1.2); // Grossissement au survol
    // color: ${(props) => props.theme.primary}; // Change de couleur au survol
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
}

const SocialBar: React.FC<SocialBarProps> = ({
  facebook,
  twitter,
  linkedin,
  instagram,
  github,
  huggingface,
}) => {
  return (
    <SocialBarContainer>
      {/* Barre jaune horizontale à gauche */}
      <YellowBar />

      {/* Conteneur des icônes de réseaux sociaux */}
      <IconsContainer>
        {facebook && (
          <SocialIcon href={facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </SocialIcon>
        )}
        {twitter && (
          <SocialIcon href={twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialIcon>
        )}
        {linkedin && (
          <SocialIcon href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIcon>
        )}
        {instagram && (
          <SocialIcon
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </SocialIcon>
        )}
        {github && (
          <SocialIcon href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialIcon>
        )}
        {huggingface && (
          <SocialIcon
            href={huggingface}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiHuggingface />
          </SocialIcon>
        )}
      </IconsContainer>
    </SocialBarContainer>
  );
};

export default SocialBar;
