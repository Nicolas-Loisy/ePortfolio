import React from "react";
import styled from "styled-components";
import { IoLanguage } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { getAvailableLanguages } from "../../translations/i18n";

const Selector = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover .dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const LanguageText = styled.span`
  margin-left: 0.5rem;
  display: flex;
  color: ${(props) => props.theme.text};
  align-items: center;
  font-size: 14px;
  font-weight: bold;
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  background-color: ${(props) => props.theme.navBarBackground};
  border: 1px solid ${(props) => props.theme.highlight};
  border-radius: 4px;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const DropdownItem = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: ${(props) => props.theme.highlight};
  }
`;

const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation();

  // Récupérer toutes les langues disponibles dynamiquement
  const availableLanguages = getAvailableLanguages();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Selector>
      <IoLanguage size={24} />
      <LanguageText>{t("language_name")}</LanguageText>
      <Dropdown className="dropdown">
        {availableLanguages.map((lngCode) => (
          <DropdownItem key={lngCode} onClick={() => changeLanguage(lngCode)}>
            {i18n.getFixedT(lngCode)("language_name")}{" "}
            {/* Utilise la traduction pour le nom de la langue */}
          </DropdownItem>
        ))}
      </Dropdown>
    </Selector>
  );
};

export default LanguageSelector;
