// ButtonLink.tsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.primary};
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.primaryHover};
  }
`;

interface ButtonLinkProps {
  text: string;
  to: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ text, to }) => {
  return <StyledButton to={to}>{text}</StyledButton>;
};

export default ButtonLink;
