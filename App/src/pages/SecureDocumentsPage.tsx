import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import {
  FileText,
  Download,
  Calendar,
  Lock,
  LogOut,
  Shield,
  Eye,
} from "lucide-react";
import Layout from "../components/templates/Layout";
import SecureLogin from "../components/molecules/SecureLogin";
import { isSessionValid, destroySession } from "../config/securityConfig";

// Types pour les documents
interface Document {
  id: string;
  title: string;
  description: string;
  fileName: string;
  filePath: string;
  date: string;
  size: string;
  type: "pdf" | "doc" | "image" | "other";
  category: string;
}

// Styled Components
const DocumentsContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 2rem;
  background: ${(props) => props.theme.cardBackground};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 1rem;
  backdrop-filter: blur(10px);
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.text};
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

const Subtitle = styled.p`
  color: ${(props) => props.theme.textSecondary};
  margin: 0.5rem 0 0 0;
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 1px solid ${(props) => props.theme.accent};
  color: ${(props) => props.theme.accent};
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.cardBackground};
  }
`;

const DocumentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const DocumentCard = styled.div`
  background: ${(props) => props.theme.cardBackground};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: ${(props) => props.theme.accent};
  }
`;

const DocumentHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const DocumentIcon = styled.div`
  background: ${(props) => props.theme.accent}20;
  border-radius: 0.5rem;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DocumentTitle = styled.h3`
  color: ${(props) => props.theme.text};
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  flex: 1;
  margin-right: 1rem;
`;

const DocumentDescription = styled.p`
  color: ${(props) => props.theme.textSecondary};
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

const DocumentMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.textSecondary};
  font-size: 0.9rem;
`;

const DocumentActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${(props) => props.theme.gradientPrimary};
  color: ${(props) => props.theme.text};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &.secondary {
    background: transparent;
    border: 1px solid ${(props) => props.theme.border};
    color: ${(props) => props.theme.textSecondary};

    &:hover {
      border-color: ${(props) => props.theme.accent};
      color: ${(props) => props.theme.text};
    }
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  background: ${(props) => props.theme.cardBackground};
  border: 2px dashed ${(props) => props.theme.border};
  border-radius: 1rem;
`;

const EmptyStateTitle = styled.h3`
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const EmptyStateDescription = styled.p`
  color: ${(props) => props.theme.textSecondary};
  max-width: 500px;
`;

const SecureDocumentsPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Exemple de documents (à remplacer par vos vrais documents)
  const [documents] = useState<Document[]>([
    {
      id: "1",
      title: "Rapport Technique Confidentiel",
      description:
        "Document technique détaillé du système de sécurité implémenté avec spécifications complètes.",
      fileName: "rapport-technique-confidentiel.html",
      filePath: "/secure-files/rapport-technique-confidentiel.html",
      date: "2024-08-16",
      size: "12 KB",
      type: "other",
      category: "Technique",
    },
    {
      id: "2",
      title: "Documentation Markdown",
      description:
        "Documentation en format Markdown contenant les informations de configuration et d'utilisation.",
      fileName: "exemple-document-confidentiel.md",
      filePath: "/secure-files/exemple-document-confidentiel.md",
      date: "2024-08-16",
      size: "2 KB",
      type: "other",
      category: "Documentation",
    },
    {
      id: "3",
      title: "Présentation Client Privée",
      description:
        "Présentation confidentielle pour un client spécifique avec données sensibles.",
      fileName: "presentation_client_prive.pdf",
      filePath: "/secure-files/presentation_client_prive.pdf",
      date: "2024-08-05",
      size: "1.8 MB",
      type: "pdf",
      category: "Commercial",
    },
  ]);

  useEffect(() => {
    // Vérifier la session au chargement
    const checkSession = async () => {
      try {
        const sessionValid = isSessionValid();
        setIsAuthenticated(sessionValid);
      } catch (error) {
        console.error("Erreur lors de la vérification de la session:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    destroySession();
    setIsAuthenticated(false);
  };

  const handleDownload = (doc: Document) => {
    // Créer un lien de téléchargement
    const link = window.document.createElement("a");
    link.href = doc.filePath;
    link.download = doc.fileName;
    link.target = "_blank";
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
  };

  const handlePreview = (doc: Document) => {
    // Ouvrir le document dans un nouvel onglet
    window.open(doc.filePath, "_blank");
  };

  const getFileIcon = (type: Document["type"]) => {
    switch (type) {
      case "pdf":
        return <FileText size={24} color="#e74c3c" />;
      case "doc":
        return <FileText size={24} color="#2980b9" />;
      case "image":
        return <FileText size={24} color="#27ae60" />;
      default:
        return <FileText size={24} />;
    }
  };

  if (isLoading) {
    return (
      <Layout
        title="Chargement..."
        description="Chargement de l'accès sécurisé"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "4px solid #f3f3f3",
              borderTop: "4px solid #3498db",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          />
        </div>
      </Layout>
    );
  }

  if (!isAuthenticated) {
    return (
      <SecureLogin
        onSuccess={handleLoginSuccess}
        title="Documents Confidentiels"
        description="Cette section contient des documents confidentiels. Veuillez vous authentifier pour y accéder."
      />
    );
  }

  return (
    <Layout
      title="Documents Sécurisés - Nicolas Loisy"
      description="Accès sécurisé aux documents confidentiels"
      displaySidebar={false}
    >
      <DocumentsContainer>
        <Header>
          <HeaderContent>
            <div
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "50%",
                padding: "1rem",
              }}
            >
              <Shield size={32} color="white" />
            </div>
            <div>
              <Title>Documents Confidentiels</Title>
              <Subtitle>
                Accès sécurisé • {documents.length} document
                {documents.length > 1 ? "s" : ""} disponible
                {documents.length > 1 ? "s" : ""}
              </Subtitle>
            </div>
          </HeaderContent>
          <LogoutButton onClick={handleLogout}>
            <LogOut size={16} />
            Se déconnecter
          </LogoutButton>
        </Header>

        {documents.length === 0 ? (
          <EmptyState>
            <Lock size={48} color="#94a3b8" style={{ marginBottom: "1rem" }} />
            <EmptyStateTitle>Aucun document disponible</EmptyStateTitle>
            <EmptyStateDescription>
              Il n'y a actuellement aucun document confidentiel disponible dans
              cette section. Veuillez revenir ultérieurement ou contacter
              l'administrateur.
            </EmptyStateDescription>
          </EmptyState>
        ) : (
          <DocumentsGrid>
            {documents.map((document) => (
              <DocumentCard key={document.id}>
                <DocumentHeader>
                  <DocumentIcon>{getFileIcon(document.type)}</DocumentIcon>
                </DocumentHeader>

                <DocumentTitle>{document.title}</DocumentTitle>
                <DocumentDescription>
                  {document.description}
                </DocumentDescription>

                <DocumentMeta>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Calendar size={14} />
                    {new Date(document.date).toLocaleDateString("fr-FR")}
                  </span>
                  <span>•</span>
                  <span>{document.size}</span>
                  <span>•</span>
                  <span>{document.category}</span>
                </DocumentMeta>

                <DocumentActions>
                  <ActionButton onClick={() => handleDownload(document)}>
                    <Download size={16} />
                    Télécharger
                  </ActionButton>
                  <ActionButton
                    className="secondary"
                    onClick={() => handlePreview(document)}
                  >
                    <Eye size={16} />
                    Aperçu
                  </ActionButton>
                </DocumentActions>
              </DocumentCard>
            ))}
          </DocumentsGrid>
        )}
      </DocumentsContainer>
    </Layout>
  );
};

export default SecureDocumentsPage;
