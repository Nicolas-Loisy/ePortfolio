import React from "react";
import styled from "styled-components";

const StyledDownloadButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: ${(props) => props.theme.text || "#e3e3e3"};
  text-align: center;
  font-weight: bold;
  border-radius: 4px;
  border: 2px solid ${(props) => props.theme.titleBorder || "#f9d342"};
  text-decoration: none;
  margin: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  vertical-align: bottom;

  &:hover {
    background-color: ${(props) => props.theme.titleBorder || "#f9d342"};
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

interface DownloadButtonProps {
  href: string;
  children: React.ReactNode;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ href, children }) => {
  return (
    <StyledDownloadButton href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </StyledDownloadButton>
  );
};

export default DownloadButton;
