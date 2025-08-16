import { useState, useEffect } from 'react';
import { isSessionValid } from '../config/securityConfig';

/**
 * Hook personnalisé pour gérer l'état d'authentification des documents sécurisés
 */
export const useSecureAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      try {
        const authenticated = isSessionValid();
        setIsAuthenticated(authenticated);
      } catch (error) {
        console.error('Erreur lors de la vérification de l\'authentification:', error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();

    // Vérifier périodiquement si la session est toujours valide
    const interval = setInterval(checkAuth, 60000); // Vérification toutes les minutes

    return () => clearInterval(interval);
  }, []);

  const logout = () => {
    const { destroySession } = require('../config/securityConfig');
    destroySession();
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    isLoading,
    logout,
    setIsAuthenticated
  };
};
