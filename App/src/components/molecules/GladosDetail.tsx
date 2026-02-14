import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { FaPython } from "react-icons/fa";
import { SiDocker, SiRaspberrypi, SiHuggingface } from "react-icons/si";

// Images
import LogoGLaDOS from "../../assets/img/GLaDOS_logo.png";

// --- Styled Components ---

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.titleBorder || "#f9d342"};
  }

  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(-4px);
  }
`;

const HeroImage = styled.img`
  display: block;
  max-width: 280px;
  max-height: 280px;
  object-fit: contain;
  margin: 0 auto 2rem;
  border-radius: 12px;

  @media (max-width: 768px) {
    max-width: 200px;
    max-height: 200px;
  }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.theme.text};
  margin: 0 0 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.3rem;
  color: ${(props) => props.theme.subtitle || "#666"};
  font-weight: normal;
  margin: 0 0 0.25rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const DateText = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.year || "#999"};
  margin: 0 0 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  color: ${(props) => props.theme.text};
  margin: 2.5rem 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid ${(props) => props.theme.titleBorder || "#f9d342"};
  width: fit-content;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const TextContent = styled.div`
  font-size: 1rem;
  line-height: 1.8;
  color: ${(props) => props.theme.text};
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const FeatureItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.text};

  &::before {
    content: "▸";
    position: absolute;
    left: 0;
    color: ${(props) => props.theme.titleBorder || "#f9d342"};
    font-weight: bold;
  }
`;

const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;

  svg {
    width: 40px;
    height: 40px;
    color: ${(props) => props.theme.text};
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.titleBorder || "#f9d342"};
    }
  }

  @media (max-width: 768px) {
    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

const HighlightBox = styled.div`
  background: ${(props) =>
    props.theme.theme === "dark"
      ? "linear-gradient(135deg, rgba(249, 211, 66, 0.08) 0%, rgba(249, 211, 66, 0.02) 100%)"
      : "linear-gradient(135deg, rgba(249, 211, 66, 0.15) 0%, rgba(249, 211, 66, 0.05) 100%)"};
  border-left: 4px solid ${(props) => props.theme.titleBorder || "#f9d342"};
  padding: 1.5rem;
  border-radius: 0 8px 8px 0;
  margin: 1.5rem 0;
`;

const HighlightText = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.text};
  margin: 0;
  line-height: 1.6;
`;

const DocumentCard = styled.div`
  background: ${(props) => props.theme.cardBackground || "#1e1e1e"};
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border: 1px solid ${(props) => props.theme.borderColor || "#333"};
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const DocumentIcon = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.titleBorder || "#f9d342"};
  border-radius: 12px;
  color: #1e1e1e;
  flex-shrink: 0;

  svg {
    width: 32px;
    height: 32px;
  }
`;

const DocumentInfo = styled.div`
  flex: 1;
`;

const DocumentTitle = styled.h4`
  font-size: 1.1rem;
  color: ${(props) => props.theme.text};
  margin: 0 0 0.5rem;
`;

const DocumentDescription = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.subtitle || "#666"};
  margin: 0;
  line-height: 1.5;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${(props) => props.theme.titleBorder || "#f9d342"};
  color: #1e1e1e;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(249, 211, 66, 0.4);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

// --- Main Component ---

const GladosDetail: React.FC = () => {
  const { t } = useTranslation();

  const features = t("projects.glados.features", {
    returnObjects: true,
  }) as string[];

  return (
    <Container>
      <BackLink to="/#projects">
        <ArrowLeft />
        {t("projects.backToProjects")}
      </BackLink>

      <HeroImage src={LogoGLaDOS} alt={t("projects.glados.title")} />

      <Title>{t("projects.glados.title")}</Title>
      <Subtitle>{t("projects.glados.subtitle")}</Subtitle>
      <DateText>{t("projects.glados.date")}</DateText>

      {/* Overview */}
      <SectionTitle>{t("projects.detailSections.overview")}</SectionTitle>
      <TextContent>{t("projects.glados.longDescription")}</TextContent>

      {/* Features */}
      <SectionTitle>{t("projects.detailSections.features")}</SectionTitle>
      <FeatureList>
        {Array.isArray(features) &&
          features.map((feature, index) => (
            <FeatureItem key={index}>{feature}</FeatureItem>
          ))}
      </FeatureList>

      {/* Technical Challenges */}
      <SectionTitle>{t("projects.detailSections.challenges")}</SectionTitle>
      <HighlightBox>
        <HighlightText>{t("projects.glados.challenges")}</HighlightText>
      </HighlightBox>

      {/* IR Document */}
      <SectionTitle>{t("gladosDetail.irSection.title")}</SectionTitle>
      <TextContent>{t("gladosDetail.irSection.description")}</TextContent>

      <DocumentCard>
        <DocumentIcon>
          <FileText />
        </DocumentIcon>
        <DocumentInfo>
          <DocumentTitle>
            {t("gladosDetail.irSection.documentTitle")}
          </DocumentTitle>
          <DocumentDescription>
            {t("gladosDetail.irSection.documentDescription")}
          </DocumentDescription>
        </DocumentInfo>
        <DownloadButton
          href="/files/IR_NicolasLoisy_scientific_paper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <Download />
          {t("gladosDetail.irSection.downloadButton")}
        </DownloadButton>
      </DocumentCard>

      {/* Tech Stack */}
      <SectionTitle>{t("projects.detailSections.techStack")}</SectionTitle>
      <TechGrid>
        <FaPython />
        <SiDocker />
        <SiRaspberrypi />
        <SiHuggingface />
      </TechGrid>
    </Container>
  );
};

export default GladosDetail;
