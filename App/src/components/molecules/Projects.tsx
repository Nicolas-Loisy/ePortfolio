import React from "react";
import styled from "styled-components";
import Card from "./Card"; // Import du composant Card

// Conteneur principal pour la liste des projets
const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem; // Ajoute un espacement entre les cartes
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
  box-sizing: border-box;
`;

// Titre de la section
const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${(props) => props.theme.text || "#333"};
  margin-bottom: 1rem;
  border-bottom: 5px solid ${(props) => props.theme.border || "#f9d342"};
  padding-bottom: 0.5rem;
  align-self: flex-start;
  width: fit-content;
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
    <>
      <SectionTitle>{title}</SectionTitle>
      <ProjectsContainer>
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
    </>
  );
};

export default Projects;
