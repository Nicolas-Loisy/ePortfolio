import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ProjectConfig, ProjectSection } from "../../data/projectsData";

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
  margin: 0;
`;

const FeatureItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.text};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.6rem;
    width: 8px;
    height: 8px;
    background-color: ${(props) => props.theme.titleBorder || "#f9d342"};
    border-radius: 50%;
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

const QuoteBlock = styled.blockquote`
  border-left: 4px solid ${(props) => props.theme.titleBorder || "#f9d342"};
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  font-style: italic;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.cardBackground || "transparent"};
  border-radius: 0 8px 8px 0;
`;

const CodeBlock = styled.pre`
  background-color: ${(props) => props.theme.cardBackground || "#1e1e1e"};
  color: ${(props) => props.theme.text};
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 0.9rem;
  line-height: 1.5;
  border: 1px solid ${(props) => props.theme.borderColor || "#333"};
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  margin: 1rem 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }
`;

const LinksRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const LinkButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: ${(props) => props.theme.text || "#e3e3e3"};
  text-align: center;
  font-weight: bold;
  border-radius: 4px;
  border: 2px solid ${(props) => props.theme.titleBorder || "#f9d342"};
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.titleBorder || "#f9d342"};
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

// --- Section Renderers ---

const renderSection = (
  section: ProjectSection,
  t: TFunction,
  techLogos: React.ReactNode[],
  index: number
) => {
  const titleText = section.titleKey ? t(section.titleKey) : "";

  switch (section.type) {
    case "text": {
      const content = t(section.contentKey, { defaultValue: "" });
      if (!content) return null;
      return (
        <div key={index}>
          {titleText && <SectionTitle>{titleText}</SectionTitle>}
          <TextContent>{content}</TextContent>
        </div>
      );
    }

    case "features": {
      const features = t(section.contentKey, {
        returnObjects: true,
        defaultValue: [],
      });
      if (!Array.isArray(features) || features.length === 0) return null;
      return (
        <div key={index}>
          {titleText && <SectionTitle>{titleText}</SectionTitle>}
          <FeatureList>
            {(features as string[]).map((feature, i) => (
              <FeatureItem key={i}>{feature}</FeatureItem>
            ))}
          </FeatureList>
        </div>
      );
    }

    case "techStack": {
      if (!techLogos || techLogos.length === 0) return null;
      return (
        <div key={index}>
          {titleText && <SectionTitle>{titleText}</SectionTitle>}
          <TechGrid>
            {techLogos.map((logo, i) => (
              <React.Fragment key={i}>{logo}</React.Fragment>
            ))}
          </TechGrid>
        </div>
      );
    }

    case "quote": {
      const content = t(section.contentKey, { defaultValue: "" });
      if (!content) return null;
      return (
        <div key={index}>
          {titleText && <SectionTitle>{titleText}</SectionTitle>}
          <QuoteBlock>{content}</QuoteBlock>
        </div>
      );
    }

    case "code": {
      const content = t(section.contentKey, { defaultValue: "" });
      if (!content) return null;
      return (
        <div key={index}>
          {titleText && <SectionTitle>{titleText}</SectionTitle>}
          <CodeBlock>
            <code>{content}</code>
          </CodeBlock>
        </div>
      );
    }

    case "video": {
      const url = t(section.contentKey, { defaultValue: "" });
      if (!url) return null;
      return (
        <div key={index}>
          {titleText && <SectionTitle>{titleText}</SectionTitle>}
          <VideoWrapper>
            <iframe
              src={url}
              title={titleText || "Video"}
              allowFullScreen
            />
          </VideoWrapper>
        </div>
      );
    }

    case "gallery": {
      const images = t(section.contentKey, {
        returnObjects: true,
        defaultValue: [],
      });
      if (!Array.isArray(images) || images.length === 0) return null;
      return (
        <div key={index}>
          {titleText && <SectionTitle>{titleText}</SectionTitle>}
          <GalleryGrid>
            {(images as string[]).map((src, i) => (
              <img key={i} src={src} alt={`${titleText || "Gallery"} ${i + 1}`} />
            ))}
          </GalleryGrid>
        </div>
      );
    }

    case "links": {
      return null; // Links are handled in the footer
    }

    default:
      return null;
  }
};

// --- Main Component ---

interface ProjectDetailProps {
  project: ProjectConfig;
  imageSrc: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, imageSrc }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <BackLink to="/#projects">
        <ArrowLeft />
        {t("projects.backToProjects")}
      </BackLink>

      <HeroImage src={imageSrc} alt={t(`${project.translationKey}.title`)} />

      <Title>{t(`${project.translationKey}.title`)}</Title>
      <Subtitle>{t(`${project.translationKey}.subtitle`)}</Subtitle>
      <DateText>{t(`${project.translationKey}.date`)}</DateText>

      {project.sections.map((section, index) =>
        renderSection(section, t, project.techLogos, index)
      )}

      {(project.demoLink || project.githubLink) && (
        <LinksRow>
          {project.demoLink && (
            <LinkButton
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("global.redirectProject")}
            </LinkButton>
          )}
          {project.githubLink && (
            <LinkButton
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </LinkButton>
          )}
        </LinksRow>
      )}
    </Container>
  );
};

export default ProjectDetail;
