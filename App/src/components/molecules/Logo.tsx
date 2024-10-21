// components/molecules/Logo.tsx
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import useTheme from "../../hooks/useTheme";

const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: inherit;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const LogoImage = styled.img`
  height: 40px;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    height: 30px;
  }
`;

interface LogoProps {
  to: string;
  lightSrc: string;
  darkSrc: string;
  alt: string;
  siteName: string;
}

const Logo: React.FC<LogoProps> = ({
  to,
  lightSrc,
  darkSrc,
  alt,
  siteName,
}) => {
  const { theme } = useTheme();
  const logoSrc = theme === "light" ? lightSrc : darkSrc;

  return (
    <LogoLink to={to}>
      <LogoImage src={logoSrc} alt={alt} />
      {siteName}
    </LogoLink>
  );
};

export default Logo;
