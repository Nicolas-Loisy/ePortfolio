import React, { useState } from "react";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour ouvrir/fermer le menu
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Styles en ligne pour grand écran (PC)
  const sidebarStyle = {
    position: "fixed" as "fixed",
    top: 0,
    left: isOpen ? 0 : "-250px", // Menu caché à gauche
    width: "250px", // Largeur fixe pour PC
    height: "100%",
    backgroundColor: "#333",
    color: "white",
    transition: "left 0.3s ease-in-out",
    zIndex: 999,
    paddingTop: "60px",
    overflowX: "hidden",
  };

  // Styles en ligne pour mobile (petits écrans)
  const sidebarMobileStyle = {
    position: "fixed" as "fixed",
    top: 0,
    left: isOpen ? 0 : "-100vw", // Cache le menu en dehors de l'écran sur mobile
    width: "100vw", // Le menu prend toute la largeur de l'écran sur mobile
    height: "100vh", // Le menu prend toute la hauteur sur mobile
    backgroundColor: "#333",
    color: "white",
    transition: "left 0.3s ease-in-out",
    zIndex: 999,
    paddingTop: "60px",
    display: "flex",
    flexDirection: "column" as "column",
  };

  const overlayStyle = {
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 998,
  };

  const burgerBtnStyle = {
    position: "fixed" as "fixed",
    top: "20px",
    left: "20px",
    width: "40px",
    height: "30px",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
    cursor: "pointer",
    zIndex: 1000,
    background: "none",
    border: "none",
  };

  const burgerLineStyle = {
    width: "100%",
    height: "4px",
    backgroundColor: "black",
    transition: "all 0.3s ease-in-out",
  };

  const firstLineStyle = (open: boolean) => ({
    ...burgerLineStyle,
    transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
  });

  const secondLineStyle = (open: boolean) => ({
    ...burgerLineStyle,
    opacity: open ? 0 : 1,
  });

  const thirdLineStyle = (open: boolean) => ({
    ...burgerLineStyle,
    transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none",
  });

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
    fontSize: "18px", // Taille du texte par défaut
  };

  // Media query pour le style conditionnel sur petits écrans
  const mobileMediaQuery = `
    @media (max-width: 768px) {
      .sidebar {
        left: ${isOpen ? 0 : "-100vw"};
        width: 100vw;
        height: 100vh;
      }

      .sidebar a {
        font-size: 24px;
      }
    }
  `;

  return (
    <div>
      {/* Applique les styles dynamiques sur mobile */}
      <style>{`
        @media (max-width: 768px) {
          .sidebar {
            left: ${isOpen ? "0" : "-100vw"};
            width: 100vw;
            height: 100vh;
          }
        }
      `}</style>

      {/* Bouton Burger */}
      <button style={burgerBtnStyle} onClick={toggleSidebar}>
        <div style={firstLineStyle(isOpen)}></div>
        <div style={secondLineStyle(isOpen)}></div>
        <div style={thirdLineStyle(isOpen)}></div>
      </button>

      {/* Menu latéral */}
      <div
        className="sidebar"
        style={
          window.innerWidth <= 768
            ? (sidebarMobileStyle as React.CSSProperties)
            : (sidebarStyle as React.CSSProperties)
        }
      >
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
