import React from "react";
import styled from "styled-components";

// Conteneur principal de la frise avec une hauteur fixe de 80px
const FriseContainer = styled.div`
  display: flex;
  justify-content: center; // Centre le wrapper dans le conteneur
  align-items: center; // Centre verticalement les éléments
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  height: 80px; // Hauteur fixe pour le conteneur
`;

// Conteneur pour la liste d'images, avec un espacement équitable
const FriseWrapper = styled.div`
  display: flex;
  justify-content: center; // Centre les images horizontalement
  align-items: center; // Centre les images verticalement
  flex-grow: 1; // Permet au conteneur de s'étendre pour occuper toute la largeur
  max-width: 100%; // Empêche le conteneur de dépasser la largeur de l'écran
`;

const Img = styled.img`
  contain: content; // Contenu de l'image ne déborde pas du conteneur
  max-width: 100%; // Assure que l'image ne dépasse pas la largeur du conteneur
  height: auto; // Maintient le ratio de l'image
  max-height: 60px; // Limite la hauteur maximale de l'image

  @media (max-width: 768px) {
    max-width: 30px; // Limite la largeur de l'image sur les petits écrans
    max-height: 30px; // Limite la hauteur de l'image sur les petits écrans
  }
`;

// Interface des props du composant Frise
interface FriseProps {
  images: string[]; // Tableau d'URL d'images
}

const Frise: React.FC<FriseProps> = ({ images }) => {
  return (
    <FriseContainer>
      <FriseWrapper>
        {images.map((imageSrc, index) => (
          <div
            key={index}
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center", // Centre les images horizontalement
            }}
          >
            <Img src={imageSrc} alt={`image-${index}`} />
          </div>
        ))}
      </FriseWrapper>
    </FriseContainer>
  );
};

export default Frise;
