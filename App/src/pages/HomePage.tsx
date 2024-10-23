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

import Frise from "../components/molecules/Frise";
import TerminalLite from "../components/molecules/TerminalLite";
import Projects from "../components/molecules/Projects";

import pp from "../assets/img/pp_nl.jpg";
import eurelisLogo from "../assets/img/eurelis_logo.jpg";
import LogoUniversiteParisCite from "../assets/img/LogoUniversiteParisCite.png";
import LogoIutMontreuil from "../assets/img/logo_iut_montreuil.png";
import LogoDiderot from "../assets/img/logo_diderot.png";

import LogoIA_1 from "../assets/img/eurelis_logo.jpg";

import certif_ia from "../assets/files/nl_ia.jpg";
import certif_js from "../assets/files/nl_js.jpg";
import certif_py from "../assets/files/nl_py.jpg";

import logoIA1b from "../assets/img/logo/logo_ia_1_b.svg";
import logoIA2b from "../assets/img/logo/logo_ia_2_b.svg";
import logoIA3b from "../assets/img/logo/logo_ia_3_b.svg";
import logoIA4b from "../assets/img/logo/logo_ia_4_b.svg";
import logoIA5b from "../assets/img/logo/logo_ia_5_b.svg";
import logoIA6b from "../assets/img/logo/logo_ia_6_b.svg";
import logoIA7b from "../assets/img/logo/logo_ia_7_b.svg";
import logoIA8b from "../assets/img/logo/logo_ia_8_b.svg";
import logoIA9b from "../assets/img/logo/logo_ia_9_b.svg";
import logoIA10b from "../assets/img/logo/logo_ia_10_b.svg";

import logoIA1w from "../assets/img/logo/logo_ia_1_w.svg";
import logoIA2w from "../assets/img/logo/logo_ia_2_w.svg";
import logoIA3w from "../assets/img/logo/logo_ia_3_w.svg";
import logoIA4w from "../assets/img/logo/logo_ia_4_w.svg";
import logoIA5w from "../assets/img/logo/logo_ia_5_w.svg";
import logoIA6w from "../assets/img/logo/logo_ia_6_w.svg";
import logoIA7w from "../assets/img/logo/logo_ia_7_w.svg";
import logoIA8w from "../assets/img/logo/logo_ia_8_w.svg";
import logoIA9w from "../assets/img/logo/logo_ia_9_w.svg";
import logoIA10w from "../assets/img/logo/logo_ia_10_w.svg";
import { useTheme } from "styled-components";

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
    "Formation : MIAGE",
    "La Documentation ma passion!",
    "MarkIA = MarkDown + IA",
    "sudo rm -rf /*",
  ];

  const projectData = [
    {
      title: "Projet 1",
      subtitle: "Sous-titre du projet 1",
      date: "Janvier 2024",
      description: "Description du projet 1.",
      imageSrc: "https://via.placeholder.com/200x150",
      techLogos: [
        "https://via.placeholder.com/40x40",
        "https://via.placeholder.com/40x40",
      ],
      demoLink: "https://example.com/demo1",
    },
    {
      title: "Projet 2",
      subtitle: "Sous-titre du projet 2",
      date: "Février 2024",
      description: "Description du projet 2.",
      imageSrc: "https://via.placeholder.com/200x150",
      techLogos: [
        "https://via.placeholder.com/40x40",
        "https://via.placeholder.com/40x40",
      ],
      demoLink: "https://example.com/demo2",
    },
  ];

  const whiteLogo = [
    logoIA1w,
    logoIA2w,
    logoIA3w,
    logoIA4w,
    logoIA5w,
    logoIA6w,
    logoIA7w,
    logoIA8w,
    logoIA9w,
    logoIA10w,
  ];

  const darkLogo = [
    logoIA1b,
    logoIA2b,
    logoIA3b,
    logoIA4b,
    logoIA5b,
    logoIA6b,
    logoIA7b,
    logoIA8b,
    logoIA9b,
    logoIA10b,
  ];

  const { theme } = useTheme();
  console.log(theme);
  const friseData = theme === "dark" ? darkLogo : whiteLogo;

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
      <TerminalLite texts={texts} />
      <About
        title="À propos de moi"
        description="Je suis développeur web passionné par l'informatique dans son ensemble. Ma curiosité me pousse à explorer divers domaines tels que la technologie, l'intelligence artificielle et l'électronique. J'aime trouver des solutions à des problèmes techniques et relever des défis.<br /><br /> Chaque jour, j'ai la chance de travailler dans un environnement stimulant où je peux appliquer mes compétences tout en apprenant constamment. Mes passions pour l'informatique et la technologie me permettent de prendre du plaisir à créer et à innover, tout en m'enrichissant en connaissances et en expériences. Mon objectif est de continuer à évoluer dans ce domaine fascinant."
      />
      {/* <Terminal texts={texts} />
      <TerminalLite texts={texts} /> */}
      <Skills title="Compétences"></Skills>
      <Experience title="Experiences" experiences={experiencesData} />
      <Diplome title="Diplômes" diplomes={diplomesData} />
      <Certification title="Certifications" certifications={certifications} />
      <Projects title="Mes Projets" projects={projectData} />
      <Frise images={friseData} speed={100} freeze />
    </Layout>
  );
};

export default HomePage;
