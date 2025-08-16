/**
 * Configuration de sécurité pour l'accès aux documents
 */
export const SECURITY_CONFIG = {
  // Mot de passe statique pour accéder aux documents sécurisés
  DOCUMENTS_PASSWORD: process.env.REACT_APP_DOCUMENTS_PASSWORD,
  
  // Durée de la session (en millisecondes) - 1 heure par défaut
  SESSION_DURATION: 60 * 60 * 1000,
  
  // Clé pour le stockage local
  SESSION_STORAGE_KEY: 'documents_access_session',
};

/**
 * Vérifie si le mot de passe fourni est correct
 */
export const verifyPassword = (password: string): boolean => {
  return password === SECURITY_CONFIG.DOCUMENTS_PASSWORD;
};

/**
 * Crée une session d'accès sécurisé
 */
export const createSecureSession = (): void => {
  const session = {
    authenticated: true,
    timestamp: Date.now(),
    expiresAt: Date.now() + SECURITY_CONFIG.SESSION_DURATION,
  };
  localStorage.setItem(SECURITY_CONFIG.SESSION_STORAGE_KEY, JSON.stringify(session));
};

/**
 * Vérifie si la session actuelle est valide
 */
export const isSessionValid = (): boolean => {
  try {
    const sessionData = localStorage.getItem(SECURITY_CONFIG.SESSION_STORAGE_KEY);
    if (!sessionData) return false;
    
    const session = JSON.parse(sessionData);
    const now = Date.now();
    
    return session.authenticated && now < session.expiresAt;
  } catch (error) {
    console.error('Erreur lors de la vérification de la session:', error);
    return false;
  }
};

/**
 * Détruit la session actuelle
 */
export const destroySession = (): void => {
  localStorage.removeItem(SECURITY_CONFIG.SESSION_STORAGE_KEY);
};
