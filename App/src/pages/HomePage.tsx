import React from "react";

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

import { projectsConfig } from "../data/projectsData";

import pp from "../assets/img/pp_nl.jpg";
import eurelisLogo from "../assets/img/eurelis_logo.jpg";
import LogoUniversiteParisCite from "../assets/img/LogoUniversiteParisCite.png";
import LogoIutMontreuil from "../assets/img/logo_iut_montreuil.png";
import LogoDiderot from "../assets/img/logo_diderot.png";

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
import DownloadButton from "../components/atoms/DownloadButton";
import AnchorNavArrows from "../components/atoms/AnchorNavArrows";
import { useSEO } from "../hooks/useSEO";

const cv_nl = "/files/CV_Nicolas_Loisy.pdf";
const memoire_nl = "/files/NicolasLoisy_Memoire.pdf";
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
    // Ajout Sinequa Design Specialist
    {
      title: t("certification.title6"),
      description: t("certification.description6"),
      year: t("certification.year6"),
      link: "https://university.chapsvision.com/redirect/api/certification/7067662244641226",
    },
    // Ajout Sinequa V11 Practical Basics
    {
      title: t("certification.title5"),
      description: t("certification.description5"),
      year: t("certification.year5"),
      link: "https://university.chapsvision.com/api/certification/3259644365865782",
    },
    // Ajout Sinequa Certified Professional
    {
      title: t("certification.title4"),
      description: t("certification.description4"),
      year: t("certification.year4"),
      link: "https://university.chapsvision.com/api/certification/7562952816856628",
    },
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

  const projectData = projectsConfig.map((p) => ({
    title: t(`${p.translationKey}.title`),
    subtitle: t(`${p.translationKey}.subtitle`),
    date: t(`${p.translationKey}.date`),
    description: t(`${p.translationKey}.description`),
    imageSrc: typeof p.imageSrc === "function" ? p.imageSrc(dark) : p.imageSrc,
    techLogos: p.techLogos,
    demoLink: p.demoLink,
    detailLink: p.detailEnabled && (p.sections.length > 0 || p.CustomDetailComponent) ? p.detailRoute : undefined,
  }));

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
    {
      id: "2",
      url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7381728949665419264?collapsed=1",
    },
    {
      id: "3",
      idIframeUrl: "7369722803526213633",
    },
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
          <h1 id="home" style={{ visibility: "hidden", height: 0, margin: 0 }}>
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

        <section id="terminal" aria-label="Terminal interactif">
          <TerminalLite texts={texts} />
        </section>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "1.5rem 0",
            verticalAlign: "middle",
          }}
        >
          <DownloadButton href={cv_nl}>
            {t("homepage.downloadcv")}
          </DownloadButton>
          <DownloadButton href={memoire_nl}>
            {t("homepage.downloadmemoire")}
          </DownloadButton>
        </div>

        <section id="about" aria-label="À propos">
          <About
            title={t("about.title")}
            description={t("about.description")}
          />
        </section>

        <section id="skills" aria-label="Compétences techniques">
          <Skills title={t("skills.title")} />
        </section>

        <section id="experience" aria-label="Expériences professionnelles">
          <Experience
            title={t("experience.title")}
            experiences={experiencesData}
          />
        </section>

        <section id="diplome" aria-label="Diplômes et formation">
          <Diplome title={t("diplome.title")} diplomes={diplomesData} />
        </section>

        <section id="certifications" aria-label="Certifications">
          <Certification
            title={t("certification.title")}
            certifications={certifications}
          />
        </section>

        <section id="projects" aria-label="Projets réalisés">
          <Projects title={t("projects.title")} projects={projectData} />
        </section>

        <section id="linkedin" aria-label="Publications LinkedIn">
          <LinkedInPosts
            title={t("linkedin.title")}
            posts={linkedInPostsData}
          />
        </section>

        <section aria-label="Frise chronologique">
          <Frise images={friseData} />
        </section>
        <AnchorNavArrows
          anchors={[
            "about",
            "skills",
            "experience",
            "diplome",
            "certifications",
            "projects",
            "linkedin",
          ]}
        />
      </main>
    </Layout>
  );
};

export default HomePage;
