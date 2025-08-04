import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa"; // Icônes burger et croix de FontAwesome
// import ThemeSwitcher from "../molecules/ThemeSwitcher";
import LanguageSelector from "../molecules/LanguageSelector";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour ouvrir/fermer le menu
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Styles pour le menu latéral
  const sidebarStyle = {
    position: "fixed" as "fixed",
    top: 0,
    left: isOpen ? 0 : "-250px", // Menu caché à gauche
    width: "250px",
    height: "100%",
    backgroundColor: "#333",
    color: "white",
    transition: "left 0.3s ease-in-out",
    zIndex: 9999, // Augmentation du z-index pour s'assurer qu'il est au-dessus de tout
    overflowX: "hidden" as "hidden",
    paddingTop: "20px", // Un peu d'espacement en haut pour le bouton de fermeture
    display: "flex", // Utilisation de Flexbox pour organiser le contenu
    flexDirection: "column" as "column", // Organise les éléments de manière verticale
    alignItems: "center" as "center", // Centre horizontalement les éléments
    justifyContent: "flex-start" as "flex-start", // Aligne les éléments au début verticalement
  };

  // Overlay pour fermer le menu en cliquant à l'extérieur
  const overlayStyle = {
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9998, // Juste en dessous de la sidebar
  };

  // Icône burger : simple icône positionnée en haut à gauche (modifiable)
  const BurgerButton = styled.button`
    align-items: center;
    font-size: 30px; // Taille de l'icône
    color: ${(props) => props.theme.text};
    background: none;
    border: none;
    cursor: pointer;
    padding-top: 8px;
    z-index: 10000; // Pour que le bouton soit au-dessus de la sidebar
  `;

  // Bouton pour fermer le sidebar
  const closeBtnStyle = {
    position: "absolute" as "absolute",
    top: "20px", // Position du bouton de fermeture
    right: "20px", // À droite
    fontSize: "24px", // Taille de l'icône de fermeture
    color: "white",
    background: "none",
    border: "none",
    cursor: "pointer",
  };

  const ulStyle = {
    listStyle: "none",
    padding: 0,
    textAlign: "center" as "center",
    width: "100%",
  };

  const liStyle = {
    margin: "20px 0",
  };

  const aStyle = {
    color: "white",
    textDecoration: "none",
    padding: "10px 20px",
    display: "block",
    fontSize: "18px",
  };

  // Style pour centrer les composants LanguageSelector et ThemeSwitcher
  const utilityContainerStyle = {
    margin: "20px 0", // Espacement vertical entre le LanguageSelector et ThemeSwitcher
    display: "flex",
    flexDirection: "column" as "column", // Aligne verticalement
    alignItems: "center" as "center", // Centre les éléments
    width: "100%", // Assure que les éléments prennent la largeur du parent
  };

  return (
    <div>
      {/* Bouton Burger */}
      <BurgerButton onClick={toggleSidebar}>
        <FaBars />
      </BurgerButton>

      {/* Menu latéral */}
      <div className="sidebar" style={sidebarStyle}>
        {/* Bouton pour fermer la sidebar */}
        <button style={closeBtnStyle} onClick={toggleSidebar}>
          <FaTimes /> {/* Icône de fermeture en croix */}
        </button>

        {/* Conteneur pour les utilitaires comme LanguageSelector et ThemeSwitcher */}
        <div style={utilityContainerStyle}>
          <LanguageSelector />
        </div>

        {/* Liens dans la sidebar */}
        <ul style={ulStyle}>
          <li style={liStyle}>
            <a style={aStyle} href="#">
              Home
            </a>
          </li>
          <li style={liStyle}>
            <a style={aStyle} href="#">
              About
            </a>
          </li>
          <li style={liStyle}>
            <a style={aStyle} href="#">
              Services
            </a>
          </li>
          <li style={liStyle}>
            <a style={aStyle} href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay qui ferme le menu lorsqu'on clique en dehors */}
      {isOpen && <div style={overlayStyle} onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Sidebar;
