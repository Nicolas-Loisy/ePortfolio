import React from "react";
import styled from "styled-components";

interface BandeauProps {
  text: string; // Le texte est obligatoire
  logo?: string; // Le logo est optionnel
  link?: string; // Le lien est optionnel
  altText?: string; // Le texte alternatif pour le logo est optionnel
}

const BandeauContainer = styled.a`
  display: flex; /* Affiche le logo et le texte côte à côte */
  align-items: center; /* Centre le contenu verticalement */
  justify-content: center;
  width: 100%; /* Prend toute la largeur du conteneur parent */
  background-color: ${(props) =>
    props.theme.bannerBackground}; /* Couleur de fond du bandeau */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ombre douce */
  margin-top: 2rem; /* Ajoute une marge en haut */
  text-decoration: none; /* Enlève la décoration par défaut des liens */
`;

const Logo = styled.img`
  height: 40px; /* Hauteur du logo */
  width: auto; /* Garde le ratio de l'image */
  padding: 10px; /* Marge autour du logo */
  margin-right: 1rem; /* Espace entre le logo et le texte */
`;

const Text = styled.span`
  font-size: 1.2rem; /* Taille de police du texte */
  color: ${(props) => props.theme.text}; /* Couleur du texte */
  font-weight: bold; /* Met le texte en gras */
`;

const Bandeau: React.FC<BandeauProps> = ({
  logo,
  text,
  link = "#", // Lien par défaut si non fourni
  altText = "Logo", // Texte alternatif par défaut si non fourni
}) => {
  return (
    <BandeauContainer href={link} target="_blank" rel="noopener noreferrer">
      {logo && <Logo src={logo} alt={altText} />}{" "}
      {/* Affiche le logo seulement s'il est défini */}
      <Text>{text}</Text> {/* Le texte est obligatoire */}
    </BandeauContainer>
  );
};

export default Bandeau;
