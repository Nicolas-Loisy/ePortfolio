import React from "react";
import styled from "styled-components";

// Conteneur principal de la frise avec une hauteur fixe de 80px
const FriseContainer = styled.div`
  display: flex;
  justify-content: center; // Centre le wrapper dans le conteneur
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  height: 80px; // Hauteur fixe pour le conteneur

  @media (max-width: 768px) {
    height: 80px; // Hauteur fixe pour le conteneur
  }
`;

// Conteneur pour la liste d'images, avec un espacement équitable
const FriseWrapper = styled.div`
  display: flex;
  justify-content: space-between; // Espacement équitable sur la largeur
  flex-grow: 1; // Permet au conteneur de s'étendre pour occuper toute la largeur
  max-width: 100%; // Empêche le conteneur de dépasser la largeur de l'écran
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
            style={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <img
              src={imageSrc}
              alt={`image-${index}`}
              style={{
                height: "80px", // Hauteur fixe pour chaque image
                objectFit: "contain", // Assure que l'image reste dans son conteneur sans déformation
              }}
            />
          </div>
        ))}
      </FriseWrapper>
    </FriseContainer>
  );
};

export default Frise;
