import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const StyledButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0;
  background: transparent;
  color: ${(props) => props.theme.text || "#e3e3e3"};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.02em;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1.5px;
    background: ${(props) => props.theme.titleBorder || "#f9d342"};
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${(props) => props.theme.titleBorder || "#f9d342"};
  }

  &:hover::after {
    width: 100%;
  }

  svg {
    width: 14px;
    height: 14px;
    stroke-width: 2;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.titleBorder || "#f9d342"};
    outline-offset: 3px;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

interface ExploreButtonProps {
  to: string;
  children: React.ReactNode;
}

const ExploreButton: React.FC<ExploreButtonProps> = ({ to, children }) => {
  return (
    <StyledButton to={to}>
      {children}
      <ArrowRight />
    </StyledButton>
  );
};

export default ExploreButton;
