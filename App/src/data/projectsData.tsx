import React from "react";
import { FaPython, FaReact } from "react-icons/fa";
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
  SiRaspberrypi,
} from "react-icons/si";

import LogoMarkia from "../assets/img/logo_markia.jpg";
import LogoJobo from "../assets/img/logo_jobo.png";
import LogoMeteoApp from "../assets/img/logo_meteo.svg";
import LogoEMortelRenartBouche from "../assets/img/logo_emortel_renart_bouche.png";
import LogoPiBot from "../assets/img/logo_pi_bot.jpg";
import LogoEnigma from "../assets/img/Enigma-logo.svg.png";
import TweetEmotion from "../assets/img/logo_tweetEmotion.png";
import FeatureEngineering from "../assets/img/logo_fe.png";
import LogoGLaDOS from "../assets/img/GLaDOS_logo.png";
import logoNLw from "../assets/img/LOGO_NL_white.svg";
import logoNLb from "../assets/img/LOGO_NL_dark.svg";

import TweetEmotionDetail from "../components/molecules/TweetEmotionDetail";
import GladosDetail from "../components/molecules/GladosDetail";

// --- Types ---

export type SectionType =
  | "text"
  | "features"
  | "techStack"
  | "gallery"
  | "links"
  | "video"
  | "code"
  | "quote";

export interface ProjectSection {
  type: SectionType;
  titleKey?: string;
  contentKey: string;
}

export interface ProjectConfig {
  slug: string;
  translationKey: string;
  imageSrc: string | ((dark: boolean) => string);
  techLogos: React.ReactNode[];
  demoLink: string;
  detailRoute: string;
  githubLink?: string;
  detailEnabled?: boolean;
  sections: ProjectSection[];
  /** Composant React personnalisé pour remplacer la page configurable */
  CustomDetailComponent?: React.ComponentType;
}

// --- Data ---

export const projectsConfig: ProjectConfig[] = [
  {
    slug: "glados",
    translationKey: "projects.glados",
    imageSrc: LogoGLaDOS,
    techLogos: [
      <FaPython />,
      <SiDocker />,
      <SiRaspberrypi />,
      <SiHuggingface />,
    ],
    demoLink: "",
    detailRoute: "/project/glados",
    detailEnabled: true,
    CustomDetailComponent: GladosDetail,
    sections: [],
  },
  {
    slug: "feature-engineering",
    translationKey: "projects.featureEngineering",
    imageSrc: FeatureEngineering,
    techLogos: [<FaPython />, <SiHuggingface />],
    demoLink: "",
    detailRoute: "/project/feature-engineering",
    detailEnabled: false,
    sections: [
      {
        type: "text",
        titleKey: "projects.detailSections.overview",
        contentKey: "projects.featureEngineering.longDescription",
      },
      {
        type: "features",
        titleKey: "projects.detailSections.features",
        contentKey: "projects.featureEngineering.features",
      },
      {
        type: "techStack",
        titleKey: "projects.detailSections.techStack",
        contentKey: "projects.featureEngineering",
      },
    ],
  },
  {
    slug: "tweet-emotion",
    translationKey: "projects.tweetLearning",
    imageSrc: TweetEmotion,
    techLogos: [<FaPython />, <SiHuggingface />],
    demoLink: "",
    detailRoute: "/project/tweet-emotion",
    detailEnabled: true,
    CustomDetailComponent: TweetEmotionDetail,
    sections: [],
  },
  {
    slug: "enigma",
    translationKey: "projects.enigma",
    imageSrc: LogoEnigma,
    techLogos: [<FaPython />],
    demoLink: "https://nicolasloisy.fr/enigma",
    detailRoute: "/enigma",
    sections: [],
  },
  {
    slug: "eportfolio",
    translationKey: "projects.ePortfolio",
    imageSrc: (dark: boolean) => (dark ? logoNLb : logoNLw),
    techLogos: [<FaReact />, <SiTypescript />, <SiRaspberrypi />],
    demoLink: "",
    detailRoute: "/project/eportfolio",
    detailEnabled: false,
    sections: [
      {
        type: "text",
        titleKey: "projects.detailSections.overview",
        contentKey: "projects.ePortfolio.longDescription",
      },
      {
        type: "features",
        titleKey: "projects.detailSections.features",
        contentKey: "projects.ePortfolio.features",
      },
      {
        type: "techStack",
        titleKey: "projects.detailSections.techStack",
        contentKey: "projects.ePortfolio",
      },
    ],
  },
  {
    slug: "markia",
    translationKey: "projects.markIA",
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
    detailRoute: "/project/markia",
    detailEnabled: false,
    sections: [
      {
        type: "text",
        titleKey: "projects.detailSections.overview",
        contentKey: "projects.markIA.longDescription",
      },
      {
        type: "features",
        titleKey: "projects.detailSections.features",
        contentKey: "projects.markIA.features",
      },
      {
        type: "techStack",
        titleKey: "projects.detailSections.techStack",
        contentKey: "projects.markIA",
      },
    ],
  },
  {
    slug: "jobo",
    translationKey: "projects.jobo",
    imageSrc: LogoJobo,
    techLogos: [<FaReact />, <SiMongodb />, <SiHuggingface />, <SiTsnode />],
    demoLink: "",
    detailRoute: "/project/jobo",
    detailEnabled: false,
    sections: [
      {
        type: "text",
        titleKey: "projects.detailSections.overview",
        contentKey: "projects.jobo.longDescription",
      },
      {
        type: "features",
        titleKey: "projects.detailSections.features",
        contentKey: "projects.jobo.features",
      },
      {
        type: "techStack",
        titleKey: "projects.detailSections.techStack",
        contentKey: "projects.jobo",
      },
    ],
  },
  {
    slug: "meteo-app",
    translationKey: "projects.meteoApp",
    imageSrc: LogoMeteoApp,
    techLogos: [<FaReact />, <SiFirebase />],
    demoLink: "",
    detailRoute: "/project/meteo-app",
    detailEnabled: false,
    sections: [
      {
        type: "text",
        titleKey: "projects.detailSections.overview",
        contentKey: "projects.meteoApp.longDescription",
      },
      {
        type: "techStack",
        titleKey: "projects.detailSections.techStack",
        contentKey: "projects.meteoApp",
      },
    ],
  },
  {
    slug: "emortels",
    translationKey: "projects.eMortels",
    imageSrc: LogoEMortelRenartBouche,
    techLogos: [<FaReact />, <SiNodedotjs />, <SiMongodb />],
    demoLink: "",
    detailRoute: "/project/emortels",
    detailEnabled: false,
    sections: [
      {
        type: "text",
        titleKey: "projects.detailSections.overview",
        contentKey: "projects.eMortels.longDescription",
      },
      {
        type: "techStack",
        titleKey: "projects.detailSections.techStack",
        contentKey: "projects.eMortels",
      },
    ],
  },
  {
    slug: "discord-pi-bot",
    translationKey: "projects.discordPiBot",
    imageSrc: LogoPiBot,
    techLogos: [
      <FaPython />,
      <SiGnubash />,
      <SiDocker />,
      <SiGit />,
      <SiRaspberrypi />,
    ],
    demoLink: "",
    detailRoute: "/project/discord-pi-bot",
    detailEnabled: false,
    sections: [
      {
        type: "text",
        titleKey: "projects.detailSections.overview",
        contentKey: "projects.discordPiBot.longDescription",
      },
      {
        type: "features",
        titleKey: "projects.detailSections.features",
        contentKey: "projects.discordPiBot.features",
      },
      {
        type: "techStack",
        titleKey: "projects.detailSections.techStack",
        contentKey: "projects.discordPiBot",
      },
    ],
  },
];

export const getProjectBySlug = (
  slug: string | undefined,
): ProjectConfig | undefined => {
  return projectsConfig.find((p) => p.slug === slug);
};
