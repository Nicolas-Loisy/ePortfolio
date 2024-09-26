import React from "react";
import styled from "styled-components";
import useTheme from "../../hooks/useTheme";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Button = styled.button`
  background: none;
  border: 0px solid;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.highlight};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
    opacity: 0.3;
  }

  &:hover svg {
    position: relative;
    z-index: 1;
  }
`;

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? (
        <MdOutlineLightMode size={24} />
      ) : (
        <MdOutlineDarkMode size={24} />
      )}
    </Button>
  );
};

export default ThemeToggleButton;
