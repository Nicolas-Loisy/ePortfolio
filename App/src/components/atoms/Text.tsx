import React from "react";
import styled from "styled-components";

interface TextProps {
  children: React.ReactNode;
  color?: string;
  as?: keyof JSX.IntrinsicElements; // Permet de définir le niveau de texte (p, h1, h2, etc.)
  fontWeight?: string | number; // Permet de définir l'épaisseur de la police (normal, bold, etc.)
  fontStyle?: string; // Permet de définir le style de la police (italic, normal, etc.)
  textAlign?: string; // Permet de définir l'alignement du texte (left, right, center, justify)
}

const StyledText = styled.p<TextProps>`
  color: ${(props) => props.color || props.theme.text};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-style: ${(props) => props.fontStyle || "normal"};
  text-align: ${(props) => props.textAlign || "left"};
  margin: 0; /* Pour éviter des marges par défaut inattendues */
`;

const Text: React.FC<TextProps> = ({
  children,
  color,
  as = "p", // Définit la balise par défaut comme un paragraphe
  fontWeight,
  fontStyle,
  textAlign,
}) => {
  return (
    <StyledText
      as={as}
      color={color}
      fontWeight={fontWeight}
      fontStyle={fontStyle}
      textAlign={textAlign}
    >
      {children}
    </StyledText>
  );
};

export default Text;
