import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import useTheme from "../../hooks/useTheme";

// Importez les deux versions du GIF
import lightGifLoading from "../../assets/img/logo_markai_loading.gif";
import darkGifLoading from "../../assets/img/logo_markai_loading-for-dark.gif";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
`;

// Style pour le GIF
const LoadingGif = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
`;

// Style pour le texte
const LoadingText = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
`;

const LoadingSpinner: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const gifLoadingSrc = theme === "light" ? lightGifLoading : darkGifLoading;

  return (
    <LoadingContainer>
      <LoadingGif src={gifLoadingSrc} alt={t("global.loading")} />
      <LoadingText>{t("global.loading")}</LoadingText>
    </LoadingContainer>
  );
};

export default LoadingSpinner;
