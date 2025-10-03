import React from "react";

import {
  FaPython,
  FaReact, // Add React icon
} from "react-icons/fa"; // Ajouter d'autres icônes si nécessaire
import {
  SiMongodb,
  SiGit,
  SiGnubash,
  SiDocker,
  SiHuggingface,
  SiTypescript,
  SiLangchain,
  SiFirebase,
  SiTsnode,
  SiNodedotjs,
  SiRaspberrypi, // Add TypeScript icon
} from "react-icons/si"; // Icônes supplémentaires

import Layout from "../components/templates/Layout";
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
import LinkedInPosts from "../components/molecules/LinkedInPosts";

import pp from "../assets/img/pp_nl.jpg";
import eurelisLogo from "../assets/img/eurelis_logo.jpg";
import LogoUniversiteParisCite from "../assets/img/LogoUniversiteParisCite.png";
import LogoIutMontreuil from "../assets/img/logo_iut_montreuil.png";
import LogoDiderot from "../assets/img/logo_diderot.png";
import LogoMarkia from "../assets/img/logo_markia.jpg";
import LogoJobo from "../assets/img/logo_jobo.png";
import LogoMeteoApp from "../assets/img/logo_meteo.svg";
import LogoEMortelRenartBouche from "../assets/img/logo_emortel_renart_bouche.png";
import LogoPiBot from "../assets/img/logo_pi_bot.jpg";
import LogoEnigma from "../assets/img/Enigma-logo.svg.png";
import TweetEmotion from "../assets/img/logo_tweetEmotion.png";
import FeatureEngineering from "../assets/img/logo_fe.png";

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

import logoNLw from "../assets/img/LOGO_NL_white.svg";
import logoNLb from "../assets/img/LOGO_NL_dark.svg";

import { useTheme } from "styled-components";
import DownloadButton from "../components/atoms/DownloadButton";
import { useSEO } from "../hooks/useSEO";

const cv_nl = "/files/CV_Nicolas_Loisy.pdf";
const certif_ia = "/files/nl_ia.jpg";
const certif_js = "/files/nl_js.jpg";
const certif_py = "/files/nl_py.jpg";

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const dark = theme === "dark";

  // SEO data from custom hook
  const { title, description, keywords, structuredData } = useSEO();

  const experiencesData = [
    {
      date: t("experience.date1"),
      title: t("experience.title1"),
      description: t("experience.description1"),
      imageUrl: eurelisLogo,
    },
    {
      date: t("experience.date2"),
      title: t("experience.title2"),
      description: t("experience.description2"),
      imageUrl: eurelisLogo,
    },
    {
      date: t("experience.date3"),
      title: t("experience.title3"),
      description: t("experience.description3"),
      imageUrl: eurelisLogo,
    },
  ];

  const diplomesData = [
    {
      date: t("diplome.date1"),
      title: t("diplome.title1"),
      description: t("diplome.description1"),
      imageUrl: LogoUniversiteParisCite,
    },
    {
      date: t("diplome.date2"),
      title: t("diplome.title2"),
      description: t("diplome.description2"),
      imageUrl: LogoUniversiteParisCite,
    },
    {
      date: t("diplome.date3"),
      title: t("diplome.title3"),
      description: t("diplome.description3"),
      imageUrl: LogoIutMontreuil,
    },
    {
      date: t("diplome.date4"),
      title: t("diplome.title4"),
      description: t("diplome.description4"),
      imageUrl: LogoDiderot,
    },
  ];

  const certifications = [
    {
      title: t("certification.title3"),
      description: t("certification.description3"),
      year: t("certification.year3"),
      link: certif_ia,
    },
    {
      title: t("certification.title2"),
      description: t("certification.description2"),
      year: t("certification.year2"),
      link: certif_py,
    },
    {
      title: t("certification.title1"),
      description: t("certification.description1"),
      year: t("certification.year1"),
      link: certif_js,
    },
  ];

  const texts = [
    t("terminal.text1"),
    t("terminal.text2"),
    t("terminal.text3"),
    t("terminal.text4"),
    t("terminal.text5"),
    t("terminal.text6"),
    t("terminal.text7"),
    t("terminal.text8"),
    t("terminal.text9"),
  ];

  const projectData = [
    {
      title: t("projects.featureEngineering.title"),
      subtitle: t("projects.featureEngineering.subtitle"),
      date: t("projects.featureEngineering.date"),
      description: t("projects.featureEngineering.description"),
      imageSrc: FeatureEngineering,
      techLogos: [<FaPython />, <SiHuggingface />],
      demoLink: "",
    },
    {
      title: t("projects.tweetLearning.title"),
      subtitle: t("projects.tweetLearning.subtitle"),
      date: t("projects.tweetLearning.date"),
      description: t("projects.tweetLearning.description"),
      imageSrc: TweetEmotion,
      techLogos: [<FaPython />, <SiHuggingface />],
      demoLink: "",
    },
    {
      title: t("projects.enigma.title"),
      subtitle: t("projects.enigma.subtitle"),
      date: t("projects.enigma.date"),
      description: t("projects.enigma.description"),
      imageSrc: LogoEnigma,
      techLogos: [<FaPython />],
      demoLink: "https://nicolasloisy.fr/enigma",
    },
    {
      title: t("projects.ePortfolio.title"),
      subtitle: t("projects.ePortfolio.subtitle"),
      date: t("projects.ePortfolio.date"),
      description: t("projects.ePortfolio.description"),
      imageSrc: dark ? logoNLb : logoNLw,
      techLogos: [<FaReact />, <SiTypescript />, <SiRaspberrypi />],
      demoLink: "",
    },
    {
      title: t("projects.markIA.title"),
      subtitle: t("projects.markIA.subtitle"),
      date: t("projects.markIA.date"),
      description: t("projects.markIA.description"),
      imageSrc: LogoMarkia,
      techLogos: [
        <FaReact />,
        <SiTypescript />,
        <SiHuggingface />,
        <SiMongodb />,
        <SiLangchain />,
        <SiFirebase />,
      ],
      demoLink: "https://www.markia.fr/",
    },
    {
      title: t("projects.jobo.title"),
      subtitle: t("projects.jobo.subtitle"),
      date: t("projects.jobo.date"),
      description: t("projects.jobo.description"),
      imageSrc: LogoJobo,
      techLogos: [<FaReact />, <SiMongodb />, <SiHuggingface />, <SiTsnode />],
      demoLink: "",
    },
    {
      title: t("projects.meteoApp.title"),
      subtitle: t("projects.meteoApp.subtitle"),
      date: t("projects.meteoApp.date"),
      description: t("projects.meteoApp.description"),
      imageSrc: LogoMeteoApp,
      techLogos: [<FaReact />, <SiFirebase />],
      demoLink: "",
    },
    {
      title: t("projects.eMortels.title"),
      subtitle: t("projects.eMortels.subtitle"),
      date: t("projects.eMortels.date"),
      description: t("projects.eMortels.description"),
      imageSrc: LogoEMortelRenartBouche,
      techLogos: [<FaReact />, <SiNodedotjs />, <SiMongodb />],
      demoLink: "",
    },
    {
      title: t("projects.discordPiBot.title"),
      subtitle: t("projects.discordPiBot.subtitle"),
      date: t("projects.discordPiBot.date"),
      description: t("projects.discordPiBot.description"),
      imageSrc: LogoPiBot,
      techLogos: [
        <FaPython />,
        <SiGnubash />,
        <SiDocker />,
        <SiGit />,
        <SiRaspberrypi />,
      ],
      demoLink: "",
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

  const friseData = dark ? darkLogo : whiteLogo;

  // LinkedIn posts data - Ajoutez vos URLs d'iframe LinkedIn ici
  // Pour obtenir l'URL d'iframe : sur LinkedIn, cliquez sur "..." puis "Intégrer" sur votre post
  const linkedInPostsData = [
    {
      id: "1",
      idIframeUrl: "7379872156538646528",
    },
    // {
    //   id: "2",
    //   idIframeUrl: "7379872156538646528",
    // },
    // {
    //   id: "3",
    //   idIframeUrl: "7379872156538646528",
    // },
  ];

  return (
    <Layout
      title={title}
      description={description}
      keywords={keywords}
      structuredData={structuredData}
      displaySidebar
    >
      <main>
        <header>
          <h1 style={{ visibility: "hidden", height: 0, margin: 0 }}>
            Nicolas Loisy - Développeur IA, Python & Web | Portfolio
          </h1>
        </header>

        <ProfileCard
          imageSrc={pp}
          name={t("profile.name")}
          title={t("profile.title")}
        />

        <section aria-label="Informations de contact">
          <SocialBar
            github={t("social.github")}
            huggingface={t("social.huggingface")}
            linkedin={t("social.linkedin")}
            email={t("social.email")}
          />
        </section>

        <section aria-label="Terminal interactif">
          <TerminalLite texts={texts} />
        </section>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "1.5rem 0",
          }}
        >
          <DownloadButton href={cv_nl}>
            {t("homepage.downloadcv")}
          </DownloadButton>
        </div>

        <section aria-label="À propos">
          <About
            title={t("about.title")}
            description={t("about.description")}
          />
        </section>

        <section aria-label="Compétences techniques">
          <Skills title={t("skills.title")} />
        </section>

        <section aria-label="Expériences professionnelles">
          <Experience
            title={t("experience.title")}
            experiences={experiencesData}
          />
        </section>

        <section aria-label="Diplômes et formation">
          <Diplome title={t("diplome.title")} diplomes={diplomesData} />
        </section>

        <section aria-label="Certifications">
          <Certification
            title={t("certification.title")}
            certifications={certifications}
          />
        </section>

        <section aria-label="Projets réalisés">
          <Projects title={t("projects.title")} projects={projectData} />
        </section>

        <section aria-label="Publications LinkedIn">
          <LinkedInPosts
            title={t("linkedin.title")}
            posts={linkedInPostsData}
          />
        </section>

        <section aria-label="Frise chronologique">
          <Frise images={friseData} />
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
