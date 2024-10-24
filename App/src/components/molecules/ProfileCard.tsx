import React from "react";
import styled from "styled-components";

interface ProfileSectionProps {
  imageSrc: string;
  name: string;
  title: string;
}

// Conteneur principal centré horizontalement et verticalement
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center; // Centre le contenu horizontalement
  align-items: center; // Centre le contenu verticalement
  width: 100%;
  box-sizing: border-box;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse; // Sur mobile, l'image est au-dessus du texte
    text-align: center; // Centre le texte en dessous de l'image sur mobile
  }
`;

// Conteneur pour le texte (nom et titre)
const TextContainer = styled.div`
  margin-right: 2rem; // Espacement entre le texte et l'image
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Aligne le texte à gauche dans la colonne
  width: 40%;

  @media (max-width: 768px) {
    margin-right: 0; // Annuler la marge sur mobile
    align-items: center; // Centre le texte sur mobile
    width: 100%;
  }
`;

// Style pour le nom
const Name = styled.h2`
  color: ${(props) => props.theme.text};
  margin-bottom: 0.5rem;
  //   padding-bottom: 0.5rem;
  //   position: relative; // Position relative pour la ligne en dessous
  //   display: inline-block; // Permet à la ligne de s'ajuster au texte
  //   border-bottom: 5px solid #f9d342; // Ligne jaune sous le nom
`;

// Style pour le titre
const Title = styled.h3`
  color: ${(props) => props.theme.secondaryText};
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

const ImgContainer = styled.div`
  //   margin-right: 2rem; // Espacement entre le texte et l'image
  //   display: flex;
  //   flex-direction: column;
  //   align-items: flex-end; // Aligne le texte à droite dans la colonne
  //   width: 40%;

  //   @media (max-width: 768px) {
  //     margin-right: 0; // Annuler la marge sur mobile
  //     align-items: center; // Centre le texte sur mobile
  //   }
`;

// Style pour l'image
const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem; // Ajouter un espacement en dessous de l'image sur mobile
    width: 150px;
    height: 150px;
  }
`;

const ProfileSection: React.FC<ProfileSectionProps> = ({
  imageSrc,
  name,
  title,
}) => {
  return (
    <ProfileContainer>
      {/* Conteneur du texte à gauche */}
      <TextContainer>
        <Name>{name}</Name>
        <Title>{title}</Title>
      </TextContainer>

      <ImgContainer>
        {/* Image de profil à droite (ou au-dessus sur mobile) */}
        <ProfileImage src={imageSrc} alt={name} />
      </ImgContainer>
    </ProfileContainer>
  );
};

export default ProfileSection;
