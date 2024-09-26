// components/organisms/Navbar.tsx
import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import NavLink from "../atoms/NavLink";
import Logo from "../molecules/Logo";
import LanguageSelector from "../molecules/LanguageSelector";
import { FaGithub } from "react-icons/fa";
import ThemeSwitcher from "../molecules/ThemeSwitcher";

const NavbarContainer = styled.nav<{ isHidden: boolean; isFixed: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: ${(props) => props.theme.navBarBackground};
  color: ${(props) => props.theme.text};
  position: ${({ isFixed }) => (isFixed ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  right: 0;
  transition: transform 0.2s ease;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  ${({ isHidden }) =>
    isHidden &&
    `
    transform: translateY(-100%);
  `}
`;

const NavLinks = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-grow: 1;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

interface NavbarProps {
  links?: { to: string; label: string }[] | [] | undefined;
  logoLight: string;
  logoDark: string;
  siteName: string;
  hideOnScroll?: boolean; // Nouveau prop pour contrôler la disparition
  fixed?: boolean; // Nouveau prop pour contrôler le positionnement fixe
}

const Navbar: React.FC<NavbarProps> = ({
  links,
  logoLight,
  logoDark,
  siteName,
  hideOnScroll = true, // Valeur par défaut
  fixed = true, // Valeur par défaut
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollThreshold = 50; // Seuil de défilement pour cacher la barre

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (
      hideOnScroll &&
      currentScrollY > scrollThreshold &&
      currentScrollY > lastScrollY
    ) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setLastScrollY(currentScrollY);
  }, [hideOnScroll, lastScrollY, scrollThreshold]);

  useEffect(() => {
    if (hideOnScroll) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll, hideOnScroll]);

  return (
    <NavbarContainer isHidden={isHidden} isFixed={fixed}>
      <Logo
        to="/"
        lightSrc={logoLight}
        darkSrc={logoDark}
        alt="logo"
        siteName={siteName}
      />
      <NavLinks>
        {links &&
          links.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
      </NavLinks>
      <Actions>
        <LanguageSelector />
        <NavLink to="https://github.com/Nicolas-Loisy">
          <FaGithub size={24} />
        </NavLink>
        <ThemeSwitcher />
      </Actions>
    </NavbarContainer>
  );
};

export default Navbar;
