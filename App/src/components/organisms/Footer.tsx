import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.footerBackground};
  color: ${(props) => props.theme.footerText};
`;

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <p>{t("components.organisms.footer.text", { year: currentYear })}</p>
    </FooterContainer>
  );
};

export default Footer;
