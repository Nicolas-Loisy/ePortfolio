import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Layout from "../../components/templates/Layout";
import imgError from "../../assets/img/LOGO_NL.jpg";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: calc(100vh - 100px); /* Ajuste la hauteur pour remonter le contenu */
  margin-top: -50px; /* Ajuste la marge supérieure pour remonter encore plus */
`;

const ErrorImage = styled.img`
  margin-top: 1rem;
  max-width: 30%;
`;

const ErrorGeneric: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t("error.generic.title")}>
      <ErrorContainer>
        <h1>{t("error.generic.title")}</h1>
        <p>{t("error.generic.description")}</p>
        <ErrorImage
          src={imgError}
          alt="Markia - Error Image"
          title="Markia - Error Image"
        />
      </ErrorContainer>
    </Layout>
  );
};

export default ErrorGeneric;
