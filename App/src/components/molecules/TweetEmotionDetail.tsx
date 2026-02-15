import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FaPython } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";

// Images
import TweetEmotionLogo from "../../assets/img/logo_tweetEmotion.png";
import WorkflowSchema from "../../assets/img/tweet-emotion/workflow_schema.jpg";
import OutputStructure from "../../assets/img/tweet-emotion/output_structure.jpg";
import GptApiCall from "../../assets/img/tweet-emotion/gpt_api_call.jpg";
import FormulaPrecision from "../../assets/img/tweet-emotion/formula_precision.jpg";
import FormulaRecall from "../../assets/img/tweet-emotion/formula_recall.jpg";
import FormulaF1 from "../../assets/img/tweet-emotion/formula_f1.jpg";
import MetricsComparison from "../../assets/img/tweet-emotion/metrics_comparison.jpg";
import ExecutionTime from "../../assets/img/tweet-emotion/execution_time.jpg";
import ConfusionMatrices from "../../assets/img/tweet-emotion/confusion_matrices.jpg";

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

const ImageFigure = styled.figure`
  margin: 1.5rem 0;
  text-align: center;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.borderColor || "#333"};
`;

const ImageCaption = styled.figcaption`
  font-size: 0.9rem;
  color: ${(props) => props.theme.subtitle || "#666"};
  margin-top: 0.5rem;
  font-style: italic;
`;

const ModelCard = styled.div`
  background: ${(props) => props.theme.cardBackground || "#1e1e1e"};
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem 0;
  border: 1px solid ${(props) => props.theme.borderColor || "#333"};
`;

const ModelHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ModelIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.titleBorder || "#f9d342"};
  border-radius: 50%;
  color: #1e1e1e;

  svg {
    width: 28px;
    height: 28px;
  }
`;

const ModelTitle = styled.h4`
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
  margin: 0;
`;

const ModelDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${(props) => props.theme.text};
  margin: 0;
`;

const FormulaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

const FormulaCard = styled.div`
  text-align: center;
  padding: 1rem;
  background: ${(props) => props.theme.cardBackground || "#1e1e1e"};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.borderColor || "#333"};
`;

const FormulaImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 0.5rem;
`;

const FormulaLabel = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.titleBorder || "#f9d342"};
  font-weight: 600;
  margin: 0;
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

const HighlightTitle = styled.h4`
  font-size: 1.1rem;
  color: ${(props) => props.theme.titleBorder || "#f9d342"};
  margin: 0 0 0.5rem;
`;

const HighlightText = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.text};
  margin: 0;
  line-height: 1.6;
`;

const GPTIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
  </svg>
);

// --- Main Component ---

const TweetEmotionDetail: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <BackLink to="/#projects">
        <ArrowLeft />
        {t("projects.backToProjects")}
      </BackLink>

      <HeroImage src={TweetEmotionLogo} alt={t("tweetEmotionDetail.title")} />

      <Title>{t("tweetEmotionDetail.title")}</Title>
      <Subtitle>{t("tweetEmotionDetail.subtitle")}</Subtitle>
      <DateText>{t("tweetEmotionDetail.date")}</DateText>

      {/* Introduction */}
      <SectionTitle>{t("tweetEmotionDetail.sections.intro.title")}</SectionTitle>
      <TextContent>{t("tweetEmotionDetail.sections.intro.content")}</TextContent>

      {/* Workflow Schema */}
      <SectionTitle>{t("tweetEmotionDetail.sections.methodology.title")}</SectionTitle>
      <TextContent>{t("tweetEmotionDetail.sections.methodology.content")}</TextContent>
      <ImageFigure>
        <StyledImage src={WorkflowSchema} alt={t("tweetEmotionDetail.images.workflow")} />
        <ImageCaption>{t("tweetEmotionDetail.images.workflow")}</ImageCaption>
      </ImageFigure>

      {/* Models */}
      <SectionTitle>{t("tweetEmotionDetail.sections.models.title")}</SectionTitle>
      <TextContent>{t("tweetEmotionDetail.sections.models.intro")}</TextContent>

      <ModelCard>
        <ModelHeader>
          <ModelIcon>
            <FaPython />
          </ModelIcon>
          <ModelTitle>{t("tweetEmotionDetail.models.custom.title")}</ModelTitle>
        </ModelHeader>
        <ModelDescription>{t("tweetEmotionDetail.models.custom.description")}</ModelDescription>
      </ModelCard>

      <ModelCard>
        <ModelHeader>
          <ModelIcon>
            <SiHuggingface />
          </ModelIcon>
          <ModelTitle>{t("tweetEmotionDetail.models.huggingface.title")}</ModelTitle>
        </ModelHeader>
        <ModelDescription>{t("tweetEmotionDetail.models.huggingface.description")}</ModelDescription>
      </ModelCard>

      <ModelCard>
        <ModelHeader>
          <ModelIcon>
            <GPTIcon />
          </ModelIcon>
          <ModelTitle>{t("tweetEmotionDetail.models.gpt.title")}</ModelTitle>
        </ModelHeader>
        <ModelDescription>{t("tweetEmotionDetail.models.gpt.description")}</ModelDescription>
      </ModelCard>

      {/* GPT Implementation */}
      <SectionTitle>{t("tweetEmotionDetail.sections.gptImplementation.title")}</SectionTitle>
      <TextContent>{t("tweetEmotionDetail.sections.gptImplementation.content")}</TextContent>
      <ImageFigure>
        <StyledImage src={OutputStructure} alt={t("tweetEmotionDetail.images.outputStructure")} />
        <ImageCaption>{t("tweetEmotionDetail.images.outputStructure")}</ImageCaption>
      </ImageFigure>
      <ImageFigure>
        <StyledImage src={GptApiCall} alt={t("tweetEmotionDetail.images.gptApiCall")} />
        <ImageCaption>{t("tweetEmotionDetail.images.gptApiCall")}</ImageCaption>
      </ImageFigure>

      {/* Metrics */}
      <SectionTitle>{t("tweetEmotionDetail.sections.metrics.title")}</SectionTitle>
      <TextContent>{t("tweetEmotionDetail.sections.metrics.content")}</TextContent>
      <FormulaGrid>
        <FormulaCard>
          <FormulaImage src={FormulaPrecision} alt="Precision" />
          <FormulaLabel>Precision</FormulaLabel>
        </FormulaCard>
        <FormulaCard>
          <FormulaImage src={FormulaRecall} alt="Recall" />
          <FormulaLabel>Recall</FormulaLabel>
        </FormulaCard>
        <FormulaCard>
          <FormulaImage src={FormulaF1} alt="F1-Score" />
          <FormulaLabel>F1-Score</FormulaLabel>
        </FormulaCard>
      </FormulaGrid>

      {/* Results */}
      <SectionTitle>{t("tweetEmotionDetail.sections.results.title")}</SectionTitle>
      <TextContent>{t("tweetEmotionDetail.sections.results.content")}</TextContent>

      <ImageFigure>
        <StyledImage src={MetricsComparison} alt={t("tweetEmotionDetail.images.metricsComparison")} />
        <ImageCaption>{t("tweetEmotionDetail.images.metricsComparison")}</ImageCaption>
      </ImageFigure>
      <TextContent>{t("tweetEmotionDetail.resultsAnalysis.metricsComparison")}</TextContent>

      <ImageFigure>
        <StyledImage src={ExecutionTime} alt={t("tweetEmotionDetail.images.executionTime")} />
        <ImageCaption>{t("tweetEmotionDetail.images.executionTime")}</ImageCaption>
      </ImageFigure>
      <TextContent>{t("tweetEmotionDetail.resultsAnalysis.executionTime")}</TextContent>

      <ImageFigure>
        <StyledImage src={ConfusionMatrices} alt={t("tweetEmotionDetail.images.confusionMatrices")} />
        <ImageCaption>{t("tweetEmotionDetail.images.confusionMatrices")}</ImageCaption>
      </ImageFigure>
      <TextContent>{t("tweetEmotionDetail.resultsAnalysis.confusionMatrices")}</TextContent>

      {/* Key Findings */}
      <SectionTitle>{t("tweetEmotionDetail.sections.findings.title")}</SectionTitle>
      <HighlightBox>
        <HighlightTitle>{t("tweetEmotionDetail.findings.huggingface.title")}</HighlightTitle>
        <HighlightText>{t("tweetEmotionDetail.findings.huggingface.content")}</HighlightText>
      </HighlightBox>
      <HighlightBox>
        <HighlightTitle>{t("tweetEmotionDetail.findings.gpt.title")}</HighlightTitle>
        <HighlightText>{t("tweetEmotionDetail.findings.gpt.content")}</HighlightText>
      </HighlightBox>
      <HighlightBox>
        <HighlightTitle>{t("tweetEmotionDetail.findings.custom.title")}</HighlightTitle>
        <HighlightText>{t("tweetEmotionDetail.findings.custom.content")}</HighlightText>
      </HighlightBox>

      {/* Conclusion */}
      <SectionTitle>{t("tweetEmotionDetail.sections.conclusion.title")}</SectionTitle>
      <TextContent>{t("tweetEmotionDetail.sections.conclusion.content")}</TextContent>

      {/* Tech Stack */}
      <SectionTitle>{t("projects.detailSections.techStack")}</SectionTitle>
      <TechGrid>
        <FaPython />
        <SiHuggingface />
      </TechGrid>
    </Container>
  );
};

export default TweetEmotionDetail;
