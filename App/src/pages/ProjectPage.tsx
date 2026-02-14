import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import Layout from "../components/templates/Layout";
import ProjectDetail from "../components/molecules/ProjectDetail";
import { getProjectBySlug } from "../data/projectsData";

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const { theme } = useTheme();
  const dark = theme === "dark";

  const project = getProjectBySlug(slug);

  if (!project || !project.detailEnabled) {
    return <Navigate to="/404" replace />;
  }

  const imageSrc =
    typeof project.imageSrc === "function"
      ? project.imageSrc(dark)
      : project.imageSrc;

  const projectTitle = t(`${project.translationKey}.title`);
  const pageTitle = `${projectTitle} - Nicolas Loisy`;
  const pageDescription = t(`${project.translationKey}.description`);
  const pageUrl = `https://nicolasloisy.fr/project/${slug}`;

  // Keywords pour le SEO
  const pageKeywords = `${projectTitle}, Nicolas Loisy, projet, portfolio, développeur, machine learning, IA`;

  // Structured Data pour le projet
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: projectTitle,
    description: pageDescription,
    author: {
      "@type": "Person",
      name: "Nicolas Loisy",
      url: "https://nicolasloisy.fr",
    },
    dateCreated: t(`${project.translationKey}.date`),
    url: pageUrl,
    ...(project.demoLink && { codeRepository: project.demoLink }),
  };

  // Si un composant personnalisé est défini, l'utiliser à la place de ProjectDetail
  const CustomComponent = project.CustomDetailComponent;

  return (
    <Layout
      title={pageTitle}
      description={pageDescription}
      keywords={pageKeywords}
      structuredData={structuredData}
      url={pageUrl}
    >
      {CustomComponent ? (
        <CustomComponent />
      ) : (
        <ProjectDetail project={project} imageSrc={imageSrc} />
      )}
    </Layout>
  );
};

export default ProjectPage;
