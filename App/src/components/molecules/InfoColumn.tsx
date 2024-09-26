import React from "react";
import styled from "styled-components";

interface InfoColumnProps {
  title: string;
  text: string;
  titleFontSize?: string;
  textFontSize?: string;
}

const InfoColumn: React.FC<InfoColumnProps> = ({
  title,
  text,
  titleFontSize = "1.8rem",
  textFontSize = "1.2rem",
}) => {
  return (
    <Column>
      <Title fontSize={titleFontSize}>{title}</Title>
      <Text fontSize={textFontSize}>{text}</Text>
    </Column>
  );
};

export default InfoColumn;

const Column = styled.div`
  flex: 1;
  padding: 0 20px;
`;

const Title = styled.h2<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  margin-bottom: 20px;
`;

const Text = styled.p<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  line-height: 1.6;
`;
