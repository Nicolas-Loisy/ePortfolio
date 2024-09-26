// ImageLink.tsx
import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 150px; /* Limite la hauteur à 150px */
  width: auto; /* Maintient le ratio d'aspect */
  height: auto; /* Maintient le ratio d'aspect */
  border-radius: 8px;
`;
interface ImageLinkProps {
  src: string;
  alt: string;
}

const ImageLink: React.FC<ImageLinkProps> = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />;
};

export default ImageLink;
