// components/atoms/NavLink.tsx
import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(RouterNavLink)`
  position: relative; /* Needed for positioning the ::before pseudo-element */
  color: inherit;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 0; /* Adding padding to give space for the underline effect */

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px; /* Thickness of the underline */
    bottom: 0; /* Position the underline at the bottom of the text */
    left: 50%; /* Start drawing from the center */
    background-color: currentColor; /* Use the text color for the underline */
    transition: width 0.3s ease, left 0.3s ease; /* Animate width and left properties */
  }

  &:hover::before {
    width: 100%; /* Extend the width to cover the entire text */
    left: 0; /* Reset the starting point to the left */
  }
`;

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return <Link to={to}>{children}</Link>;
};

export default NavLink;
