import React from "react";
import Layout from "../components/templates/Layout";
import Banner from "../components/molecules/Banner";
import MainImage from "../components/atoms/MainImage";
import InfoSection from "../components/organisms/InfoSection";
import { useTranslation } from "react-i18next";
import bannerImageDark from "../assets/img/LOGO_NL_dark.svg";
import bannerImageLight from "../assets/img/LOGO_NL_white.svg";
import NavLink from "../components/atoms/NavLink";
import { FaGithub } from "react-icons/fa";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t("homepage.title")} displaySidebar>
      <Banner text="ePortfolio" height="100px" />
      <MainImage
        imgLight={bannerImageDark}
        imgDark={bannerImageLight}
        alt="Description of image"
        margin="10px 0"
        width="10%" // Largeur ajustée pour l'image
      />
      <InfoSection
        leftTitle="Documentation"
        leftText="Accédez facilement à toute la documentation dont vous avez besoin. Des guides pratiques et des explications claires pour tout maîtriser."
        rightTitle="IA & Machine Learning RAG"
        rightText="Notre IA, basée sur le modèle de génération augmentée de récupération (RAG), analyse les documentations pour répondre instantanément à vos questions. Posez votre question, elle trouvera la réponse dans les moindres détails."
      />
      {/* <NavLink to="https://github.com/Nicolas-Loisy">
        <FaGithub size={24} />
      </NavLink> */}
    </Layout>
  );
};

export default HomePage;
