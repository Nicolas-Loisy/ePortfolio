// components/organisms/Navbar.tsx
import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import { Snowflake } from "lucide-react";
import Logo from "../molecules/Logo";
import ThemeSwitcher from "../molecules/ThemeSwitcher";
import LanguageSelector from "../molecules/LanguageSelector";
import { useChristmas } from "../../contexts/ChristmasContext";

// Conteneur de la barre de navigation
const NavbarContainer = styled.nav<{ isHidden: boolean; isFixed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Espace entre le Sidebar à gauche et le logo centré */
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

// Conteneur pour le logo, centré
const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%); /* Centre le logo horizontalement */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Conteneur pour le Sidebar (menu)
const SidebarContainer = styled.div`
  display: flex;
  justify-content: flex-start; /* Aligne le Sidebar à gauche */
  align-items: center;
`;

// Conteneur pour les contrôles à droite
const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// Bouton Noël
const ChristmasButton = styled.button<{ $isActive: boolean }>`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$isActive ? "#4fc3f7" : props.theme.text)};
  transition: all 0.3s ease;
  border-radius: 50%;

  &:hover {
    background: ${(props) => props.theme.navBarBackground};
    color: #4fc3f7;
    transform: scale(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
    filter: ${(props) => (props.$isActive ? "drop-shadow(0 0 6px #4fc3f7)" : "none")};
  }
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
  const { isChristmasMode, isDecemberMonth, toggleChristmasMode } =
    useChristmas();

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
    <>
      <NavbarContainer isHidden={isHidden} isFixed={fixed}>
        {/* Sidebar à gauche */}
        <SidebarContainer>
          {/* <Sidebar /> */}
          <LanguageSelector />
        </SidebarContainer>

        {/* Logo centré */}
        <LogoContainer>
          <Logo
            to="/"
            lightSrc={logoLight}
            darkSrc={logoDark}
            alt="logo"
            siteName={siteName}
          />
        </LogoContainer>
        <RightControls>
          {isDecemberMonth && (
            <ChristmasButton
              $isActive={isChristmasMode}
              onClick={toggleChristmasMode}
              title={isChristmasMode ? "Désactiver la neige" : "Activer la neige"}
            >
              <Snowflake />
            </ChristmasButton>
          )}
          <ThemeSwitcher />
        </RightControls>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
