import React from "react";
import styled from "styled-components";
import ThemeToggleButton from "../atoms/ThemeToggleButton";

const SwitcherContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThemeSwitcher: React.FC = () => {
  return (
    <SwitcherContainer>
      <ThemeToggleButton />
    </SwitcherContainer>
  );
};

export default ThemeSwitcher;
