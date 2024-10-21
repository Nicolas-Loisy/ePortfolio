import React from "react";
import styled from "styled-components";
import Card from "./Card"; // Import du composant Card

// Conteneur principal pour la liste des projets
const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// Titre de la section
const SectionTitle = styled.h2`
  color: ${(props) => props.theme.text};
  margin-bottom: 1.5rem;
  border-bottom: 5px solid ${(props) => props.theme.titleBorder || "#f9d342"};
  padding-bottom: 0.5rem;
  align-self: flex-start;
  width: fit-content;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

// Interface pour les données des projets
interface Project {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  imageSrc: string;
  techLogos: string[];
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
