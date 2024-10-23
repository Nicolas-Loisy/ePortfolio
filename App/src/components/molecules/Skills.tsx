import React from "react";
import styled from "styled-components";
import {
  FaPython,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa"; // Ajouter d'autres icônes si nécessaire
import {
  SiSymfony,
  SiMysql,
  SiMongodb,
  SiNeo4J,
  SiGit,
  SiGnubash,
  SiDocker,
  SiHuggingface,
} from "react-icons/si"; // Icônes supplémentaires

// Conteneur principal pour les compétences
const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column; // Change pour afficher le titre au-dessus
  align-items: flex-start; // Aligne le titre à gauche
  padding: 2rem; // Espacement autour du conteneur
  box-sizing: border-box;
  width: fit-content; // La largeur s'adapte au contenu
  margin: 0 auto; // Centre le conteneur horizontalement
`;

// Conteneur pour les cartes avec largeur maximale
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // Permet aux cartes de passer à la ligne si nécessaire
  justify-content: center; // Centre les cartes horizontalement
  max-width: 1200px; // Largeur maximale des cartes
  width: 100%; // Prend toute la largeur disponible
`;

// Style pour chaque carte de compétence
const SkillCard = styled.div`
  background-color: ${(props) =>
    props.theme.cardBackground}; // Couleur de fond de la carte
  border: 1px solid ${(props) => props.theme.borderColor}; // Bordure de la carte
  border-radius: 8px; // Coins arrondis
  padding: 1rem; // Espacement interne
  margin: 1rem; // Marge entre les cartes
  flex: 1 1 150px; // Permet aux cartes de s'étendre et de se réduire
  max-width: 150px; // Largeur maximale de chaque carte
  text-align: center; // Centre le texte
  transition: transform 0.3s; // Animation au survol

  &:hover {
    transform: scale(1.05); // Grossissement au survol
  }

  @media (max-width: 768px) {
    flex: 1 1 50px; // Permet aux cartes de s'étendre et de se réduire

    max-width: 150px; // Largeur maximale de chaque carte
    padding: 0.5rem; // Espacement interne
  }
`;

// Style pour le titre de la compétence
const SkillTitle = styled.h3`
  font-size: 1rem; // Taille de la police
  color: ${(props) => props.theme.text}; // Couleur du texte
  margin: 0; // Pas de marge
`;

// Style pour l'icône de compétence
const SkillIcon = styled.div`
  font-size: 2rem; // Taille de l'icône
  margin-bottom: 0.5rem; // Espace entre l'icône et le titre
  color: ${(props) => props.theme.text}; // Couleur de l'icône
`;

// Style pour le titre
const SectionTitle = styled.h2`
  color: ${(props) => props.theme.text}; // Couleur du texte
  margin-bottom: 1rem; // Espacement en bas du titre
  border-bottom: 5px solid #f9d342; // Ligne sous le titre
  padding-bottom: 0.5rem; // Espacement intérieur
  width: fit-content; // La largeur du titre s'adapte à son contenu
`;

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Symfony", icon: <SiSymfony /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "IA", icon: <SiHuggingface /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Neo4J", icon: <SiNeo4J /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Bash", icon: <SiGnubash /> },
  { name: "Docker", icon: <SiDocker /> },
];

const Skills: React.FC<{ title: string }> = ({ title }) => {
  return (
    <SkillsContainer>
      <SectionTitle>{title}</SectionTitle>
      {/* Conteneur pour les cartes */}
      <CardsContainer>
        {skills.map((skill) => (
          <SkillCard key={skill.name}>
            <SkillIcon>{skill.icon}</SkillIcon> {/* Affiche l'icône */}
            <SkillTitle>{skill.name}</SkillTitle>
          </SkillCard>
        ))}
      </CardsContainer>
    </SkillsContainer>
  );
};

export default Skills;
