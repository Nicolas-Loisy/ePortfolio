import React from "react";
import styled from "styled-components";

interface BannerProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  height?: string; // Hauteur configurable en paramètre
}

const Banner: React.FC<BannerProps> = ({
  text,
  backgroundColor = "#2c3e50", // Couleur de fond par défaut
  textColor = "white", // Couleur du texte par défaut
  height = "300px", // Hauteur par défaut
}) => {
  return (
    <BannerWrapper backgroundColor={backgroundColor} height={height}>
      <BannerText color={textColor}>{text}</BannerText>
    </BannerWrapper>
  );
};

export default Banner;

const BannerWrapper = styled.div<{ backgroundColor: string; height: string }>`
  background-color: ${(props) => props.backgroundColor};
  color: white; // Couleur du texte par défaut
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: ${(props) => props.height}; // Hauteur configurable
`;

const BannerText = styled.h1<{ color: string }>`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${(props) => props.color};
`;
