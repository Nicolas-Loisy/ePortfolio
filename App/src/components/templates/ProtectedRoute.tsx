import React from "react";
import { useSecureAuth } from "../../hooks/useSecureAuth";
import SecureLogin from "../molecules/SecureLogin";

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  loginTitle?: string;
  loginDescription?: string;
}

/**
 * Composant de route protégée pour les sections sécurisées
 * Affiche le formulaire de connexion si l'utilisateur n'est pas authentifié
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  fallback,
  loginTitle = "Accès Sécurisé",
  loginDescription = "Veuillez vous authentifier pour accéder à cette section.",
}) => {
  const { isAuthenticated, isLoading, setIsAuthenticated } = useSecureAuth();

  if (isLoading) {
    return (
      <div>
        {fallback || (
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
        )}
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <SecureLogin
        onSuccess={() => setIsAuthenticated(true)}
        title={loginTitle}
        description={loginDescription}
      />
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
