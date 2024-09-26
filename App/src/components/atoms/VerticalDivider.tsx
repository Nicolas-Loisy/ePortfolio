import React from "react";
import styled from "styled-components";

interface VerticalDividerProps {
  color?: string;
  width?: string;
}

const VerticalDivider: React.FC<VerticalDividerProps> = ({
  color = "#e0e0e0",
  width = "2px",
}) => {
  return <Divider color={color} width={width} />;
};

export default VerticalDivider;

const Divider = styled.div<{ color: string; width: string }>`
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
  margin: 0 40px;
`;
