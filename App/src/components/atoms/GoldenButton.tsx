import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const StyledExploreButton = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 1rem;
  background: transparent;
  color: ${(props) => props.theme.titleBorder || "#f9d342"};
  text-decoration: none;
  font-weight: 700;
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 1.5px solid ${(props) => props.theme.titleBorder || "#f9d342"};
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  /* Fond qui se remplit au hover */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${(props) => props.theme.titleBorder || "#f9d342"};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &:hover {
    color: #1b1b1d;
    box-shadow: 0 4px 15px ${(props) => props.theme.titleBorder || "#f9d342"}55;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px ${(props) => props.theme.titleBorder || "#f9d342"}33;
  }

  /* Shimmer au repos */
  .explore-text {
    position: relative;
    z-index: 1;
    white-space: nowrap;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.titleBorder || "#f9d342"} 0%,
      ${(props) => props.theme.titleBorder || "#f9d342"}88 40%,
      #fff 50%,
      ${(props) => props.theme.titleBorder || "#f9d342"}88 60%,
      ${(props) => props.theme.titleBorder || "#f9d342"} 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${shimmer} 4s linear infinite;
  }

  &:hover .explore-text {
    background: none;
    -webkit-text-fill-color: #1b1b1d;
    animation: none;
  }

  .explore-arrow {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    opacity: 0;
    transform: translateX(-8px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover .explore-arrow {
    opacity: 1;
    transform: translateX(0);
  }

  svg {
    width: 15px;
    height: 15px;
    stroke-width: 2.5;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.titleBorder || "#f9d342"};
    outline-offset: 3px;
  }

  @media (max-width: 768px) {
    padding: 0.35rem 0.9rem;
    font-size: 0.65rem;
    gap: 0.3rem;
  }
`;

interface GoldenButtonProps {
  to: string;
  children: React.ReactNode;
}

const GoldenButton: React.FC<GoldenButtonProps> = ({ to, children }) => {
  return (
    <StyledExploreButton to={to}>
      <span className="explore-text">{children}</span>
      <span className="explore-arrow">
        <ArrowRight />
      </span>
    </StyledExploreButton>
  );
};

export default GoldenButton;
