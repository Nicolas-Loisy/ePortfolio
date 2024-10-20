import React, { useEffect, useRef } from "react";
import styled from "styled-components";

// Conteneur principal de la frise
const FriseContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  // background-color: transparent;
  padding: 1rem;
  box-sizing: border-box;
`;

// Conteneur pour le mouvement continu des images
const FriseWrapper = styled.div<{ speed: number }>`
  display: flex;
  animation: scroll ${({ speed }) => speed}s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

// Interface des props du composant Frise
interface FriseProps {
  images: string[];
  speed?: number; // Optionnel : contrôle la vitesse de défilement
}

const Frise: React.FC<FriseProps> = ({ images, speed = 20 }) => {
  // Référence pour le conteneur de la frise
  const friseRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const totalImagesNeeded = Math.ceil(window.innerWidth / 200) + 1; // Calcul du nombre d'images nécessaires pour remplir l'écran (basé sur la largeur d'une image)

    // Remplir la frise avec les images répétées
    const friseWrapper = friseRef.current;
    if (friseWrapper) {
      const repeatedImages = Array(totalImagesNeeded).fill(images).flat(); // Répète les images pour remplir la frise
      friseWrapper.innerHTML = ""; // Efface le contenu précédent

      // Ajoute les images répétées au conteneur de la frise
      repeatedImages.forEach((imageSrc, index) => {
        const img = document.createElement("img");
        img.src = imageSrc;
        img.alt = `image-${index}`;
        // img.style.width = "100px";
        img.style.height = "80px";
        img.style.objectFit = "cover";
        // img.style.marginRight = "1rem";
        img.style.marginRight = "2.65rem";
        friseWrapper.appendChild(img);
      });
    }
  }, [images]);

  return (
    <FriseContainer>
      <FriseWrapper ref={friseRef} speed={speed}></FriseWrapper>
    </FriseContainer>
  );
};

export default Frise;
