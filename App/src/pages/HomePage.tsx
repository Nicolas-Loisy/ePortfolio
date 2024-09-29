import React from "react";
import Layout from "../components/templates/Layout";
import InfoSection from "../components/organisms/InfoSection";
import { useTranslation } from "react-i18next";
import ProfileCard from "../components/molecules/ProfileCard";
import pp from "../assets/img/pp_nl.jpg";
import SocialBar from "../components/molecules/SocialBar";
import About from "../components/molecules/About";
import Skills from "../components/molecules/Skills";
import Experience from "../components/molecules/Experience";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  // Exemples de données à passer au composant Experience
  const experiencesData = [
    {
      date: "Jan 2022 - Présent",
      title: "Développeur Full Stack",
      description: "Travail sur des projets web avec React et Symfony.",
    },
    {
      date: "Mar 2020 - Déc 2021",
      title: "Ingénieur Logiciel",
      description:
        "Conception de solutions backend robustes avec PHP et MySQL.",
    },
    {
      date: "Sep 2018 - Fév 2020",
      title: "Stagiaire Développeur",
      description: "Participation au développement d'applications internes.",
    },
  ];

  return (
    <Layout title={t("homepage.title")} displaySidebar>
      {/* <Banner text="ePortfolio" height="100px" />
      <MainImage
        imgLight={bannerImageDark}
        imgDark={bannerImageLight}
        alt="Description of image"
        margin="10px 0"
        width="10%" // Largeur ajustée pour l'image
      /> */}
      <ProfileCard
        imageSrc={pp}
        name="Nicolas Loisy"
        // title="Fullstack Developer"
        title="Développeur Web & Intégrateur d'Intelligence Artificielle"
      />
      <SocialBar
        github="https://github.com/Nicolas-Loisy"
        huggingface="https://huggingface.co/Nicolas-Loisy"
        linkedin="https://www.linkedin.com/in/nicolas-loisy/"
        email="nicolas.loisy@yahoo.fr"
      />

      <About
        title="À propos de moi"
        description="Je suis développeur web passionné par l'informatique dans son ensemble. Ma curiosité me pousse à explorer divers domaines tels que la technologie, l'intelligence artificielle et l'électronique. J'aime trouver des solutions à des problèmes techniques et relever des défis.<br /><br /> Chaque jour, j'ai la chance de travailler dans un environnement stimulant où je peux appliquer mes compétences tout en apprenant constamment. Mes passions pour l'informatique et la technologie me permettent de prendre du plaisir à créer et à innover, tout en m'enrichissant en connaissances et en expériences. Mon objectif est de continuer à évoluer dans ce domaine fascinant."
      />

      <Skills title="Compétences"></Skills>

      <Experience title="Experiences" experiences={experiencesData} />
    </Layout>
  );
};

export default HomePage;
