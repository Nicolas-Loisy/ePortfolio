import React from "react";
import styled from "styled-components";
import InfoColumn from "../molecules/InfoColumn";
import VerticalDivider from "../atoms/VerticalDivider";

interface InfoSectionProps {
  leftTitle: string;
  leftText: string;
  rightTitle: string;
  rightText: string;
  dividerColor?: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  leftTitle,
  leftText,
  rightTitle,
  rightText,
  dividerColor = "#e0e0e0",
}) => {
  return (
    <Section>
      <InfoColumn title={leftTitle} text={leftText} />
      <VerticalDivider color={dividerColor} />
      <InfoColumn title={rightTitle} text={rightText} />
    </Section>
  );
};

export default InfoSection;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;
