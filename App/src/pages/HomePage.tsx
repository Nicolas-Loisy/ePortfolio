import React from "react";
import Layout from "../components/templates/Layout";
import InfoSection from "../components/organisms/InfoSection";
import { useTranslation } from "react-i18next";
import ProfileCard from "../components/molecules/ProfileCard";
import About from "../components/molecules/About";
import Certification from "../components/molecules/Certification";
import Diplome from "../components/molecules/Diplome";
import Experience from "../components/molecules/Experience";
import Skills from "../components/molecules/Skills";
import SocialBar from "../components/molecules/SocialBar";

import pp from "../assets/img/pp_nl.jpg";
import eurelisLogo from "../assets/img/eurelis_logo.jpg";
import LogoUniversiteParisCite from "../assets/img/LogoUniversiteParisCite.png";
import LogoIutMontreuil from "../assets/img/logo_iut_montreuil.png";
import LogoDiderot from "../assets/img/logo_diderot.png";

import certif_ia from "../assets/files/nl_ia.jpg";
import certif_js from "../assets/files/nl_js.jpg";
import certif_py from "../assets/files/nl_py.jpg";
import Terminal from "../components/molecules/Terminal";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  const experiencesData = [
    {
      date: "Jan 2022 - Présent",
      title: "Développeur Full Stack",
      description: "Travail sur des projets web avec React et Symfony.",
      imageUrl: eurelisLogo,
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

  const diplomesData = [
    {
      date: "Jan 2022 - Présent",
      title: "Master 2 MIAGE - Université Paris Cité (Descartes)",
      description: "Travail sur des projets web avec React et Symfony.",
      imageUrl: LogoUniversiteParisCite,
    },
    {
      date: "Mar 2020 - Déc 2021",
      title: "L3 MIAGE - IUT Paris Cité (Descartes)",
      description:
        "Conception de solutions backend robustes avec PHP et MySQL.",
      imageUrl: LogoUniversiteParisCite,
    },
    {
      date: "Sep 2018 - Fév 2020",
      title: "DUT Informatique - IUT de Montreuil",
      description: "Participation au développement d'applications internes.",
      imageUrl: LogoIutMontreuil,
    },
    {
      date: "Sep 2018 - Fév 2020",
      title: "Bac Scientifique",
      description: "Participation au développement d'applications internes.",
      imageUrl: LogoDiderot,
    },
  ];

  const certifications = [
    {
      title: "Certified JavaScript Developer",
      description:
        "A comprehensive certification covering advanced JavaScript topics.",
      year: "2022",
      link: certif_js,
    },
    {
      title: "React Expert Certification",
      description:
        "Certification demonstrating mastery of React.js development.",
      year: "2021",
      link: certif_ia,
    },
    {
      title: "Full Stack Web Developer",
      description:
        "An extensive certification for full stack web development skills.",
      year: "2020",
      link: certif_py,
    },
  ];

  const texts = [
    "Hello, world!",
    // "This is a terminal simulation.",
    // "React is awesome!",
    // "Let's code more.",
    "Intégrateur d'IA",
    "Développeur PHP",
    "Développeur Symfony",
    "We love Eurelis! ♡",
    "We ♡ Eurelis!",
    "Formation : MIAGE",
    "La Documentation ma passion!",
    "MarkIA = MarkDown + IA",
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
      <Terminal texts={texts} />
      <Skills title="Compétences"></Skills>
      <Experience title="Experiences" experiences={experiencesData} />
      <Diplome title="Diplômes" diplomes={diplomesData} />
      <Certification title="Certifications" certifications={certifications} />
    </Layout>
  );
};

export default HomePage;
