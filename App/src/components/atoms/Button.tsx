import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor || props.theme.primary};
  color: ${(props) => props.textColor || props.theme.text};
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.theme.primaryHover};
  }
`;

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  backgroundColor,
  textColor,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
