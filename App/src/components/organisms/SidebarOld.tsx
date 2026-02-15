import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import Logo from "../molecules/Logo";
import { useTranslation } from "react-i18next";

const SidebarWrapper = styled.div<{ isOpen: boolean; bottomOffset: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => (props.isOpen ? "250px" : "60px")};
  height: ${({ bottomOffset }) => `calc(100vh - ${bottomOffset}px)`};
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  border-right: 1px solid ${(props) => props.theme.borderColor};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;
`;

const LogoContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: ${(props) => props.theme.background};
  z-index: 10;
  padding-top: 0.15rem;
  padding-left: ${(props) => (props.isOpen ? "2rem" : "0.4rem")};
  margin-bottom: 0.77rem;
  transition: padding-left 0.3s ease;
  img {
    max-height: 100%;
  }
`;

const SidebarContainer = styled.div<{
  isOpen: boolean;
  center?: boolean;
}>`
  flex-grow: 1;
  padding-left: 3px;
  padding-right: 3px;
  overflow-y: auto;
  margin-bottom: 3rem;
  transition: transform 0.3s ease;
  display: ${(props) => (props.center ? "flex" : "block")};
  align-items: center;
  justify-content: center;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-101%)"};
`;

const ToggleButton = styled.button<{ isOpen: boolean }>`
  position: absolute;
  ${(props) =>
    props.isOpen
      ? `
    bottom: 10px;
    left: 210px;
  `
      : `
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
  `}
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1000;
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
  transition: left 0.3s ease, bottom 0.3s ease, top 0.3s ease,
    transform 0.3s ease;
`;

const Sidebar: React.FC<{
  logoLight: string;
  logoDark: string;
  siteName: string;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ logoLight, logoDark, siteName, isOpen, onToggle }) => {
  const [bottomOffset, setBottomOffset] = useState(0);
  const { t: _t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (footerRect.top < windowHeight) {
          setBottomOffset(windowHeight - footerRect.top);
        } else {
          setBottomOffset(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    if (onToggle) onToggle();
  };

  return (
    <SidebarWrapper isOpen={isOpen} bottomOffset={bottomOffset}>
      <ToggleButton onClick={toggleSidebar} isOpen={isOpen}>
        {isOpen ? <FaAnglesLeft /> : <FaAnglesRight />}
      </ToggleButton>
      <LogoContainer isOpen={isOpen}>
        {isOpen ? (
          <Logo
            to="/"
            lightSrc={logoLight}
            darkSrc={logoDark}
            alt="logo"
            siteName={siteName}
          />
        ) : (
          <Logo
            to="/"
            lightSrc={logoLight}
            darkSrc={logoDark}
            alt="logo"
            siteName={""}
          />
        )}
      </LogoContainer>
      <SidebarContainer isOpen={isOpen}></SidebarContainer>
    </SidebarWrapper>
  );
};

export default Sidebar;
