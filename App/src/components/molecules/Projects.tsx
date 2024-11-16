import React from "react";
import styled from "styled-components";
import Card from "./Card"; // Import du composant Card

// Conteneur principal pour la liste des projets
const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  box-sizing: border-box;
  width: 74%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Titre de la section
const SectionTitle = styled.h2`
  color: ${(props) => props.theme.text};
  margin-bottom: 1rem;
  border-bottom: 5px solid #f9d342;
  padding-bottom: 0.5rem;
  align-self: flex-start;
  width: fit-content;

  @media (max-width: 768px) {
    align-self: flex-start;
    width: fit-content;
  }
`;

// Interface pour les données des projets
interface Project {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  imageSrc: string;
  techLogos: React.ReactNode[];
  demoLink: string;
}

interface ProjectsProps {
  title: string;
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ title, projects }) => {
  return (
    <ProjectsContainer>
      <SectionTitle>{title}</SectionTitle>
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          subtitle={project.subtitle}
          date={project.date}
          description={project.description}
          imageSrc={project.imageSrc}
          techLogos={project.techLogos}
          demoLink={project.demoLink}
        />
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
