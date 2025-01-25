import React from "react";
// import Layout from "../components/templates/Layout";
import { useTranslation } from "react-i18next";
import App from "../components/enigma-components/App";

const EnigmaPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    // <Layout title={t("enigma.title")}>
    <App />
    // </Layout>
  );
};

export default EnigmaPage;
