// components\templates\Layout.tsx

import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import logoDark from "../../assets/img/LOGO_NL.jpg";
import logoLight from "../../assets/img/LOGO_NL.jpg";
import Sidebar from "../organisms/Sidebar";
import { useTranslation } from "react-i18next";

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContainer = styled.main<{}>`
  margin-left: 0;
  margin-top: 55px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  flex-grow: 1;
  overflow-x: hidden;
  box-sizing: border-box;
  transition: margin-left 0.3s ease; /* Ajout de la transition */
`;

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  displaySidebar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  displaySidebar = false,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar
        logoLight={logoDark}
        logoDark={logoLight}
        siteName={t("global.siteName")}
        fixed={false}
        hideOnScroll={false}
      />
      <LayoutContainer>
        {displaySidebar && <Sidebar />}

        <MainContainer>{children}</MainContainer>
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default Layout;
