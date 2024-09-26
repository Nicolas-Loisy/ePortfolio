import React from "react";
import styled from "styled-components";
import ThemeSwitcher from "../molecules/ThemeSwitcher";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <ThemeSwitcher />
    </HeaderContainer>
  );
};

export default Header;
