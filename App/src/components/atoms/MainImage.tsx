import React from "react";
import styled from "styled-components";
import useTheme from "../../hooks/useTheme";

interface MainImageProps {
  imgLight: string; // URL de l'image pour le thème clair
  imgDark: string; // URL de l'image pour le thème sombre
  alt: string;
  margin?: string; // Marge autour du conteneur
  width?: string; // Largeur de l'image
  maxWidth?: string; // Largeur maximale de l'image
}

const MainImage: React.FC<MainImageProps> = ({
  imgLight,
  imgDark,
  alt,
  margin = "40px 0",
  width = "50%", // Largeur par défaut de l'image
  maxWidth = "100%", // Largeur maximale par défaut
}) => {
  const { theme } = useTheme(); // Obtenez le thème actif

  // Déterminez l'image à utiliser en fonction du thème
  const imgSrc = theme === "light" ? imgLight : imgDark;

  return (
    <ImageContainer margin={margin}>
      <Image src={imgSrc} alt={alt} width={width} maxWidth={maxWidth} />
    </ImageContainer>
  );
};

export default MainImage;

const ImageContainer = styled.div<{ margin: string }>`
  width: 100%; // Le conteneur prend toute la largeur
  display: flex; // Utilise Flexbox pour centrer l'image
  justify-content: center; // Centre l'image horizontalement
  margin: ${(props) => props.margin}; // Marge autour du conteneur
`;

const Image = styled.img<{ width: string; maxWidth: string }>`
  width: ${(props) => props.width}; // Largeur ajustable
  max-width: ${(props) => props.maxWidth}; // Largeur maximale de l'image
  height: auto; // Conserve les proportions de l'image
  object-fit: contain; // Assure que l'image est contenue dans le conteneur sans déformation
`;
