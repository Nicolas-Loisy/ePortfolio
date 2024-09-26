import React, { createContext, useState, ReactNode, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../style/themes";
import GlobalStyle from "../style/GlobalStyle";

// Clé pour sauvegarder le thème dans localStorage
const localStorageThemeKey = "user-preferred-theme";

interface ThemeContextProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Vérifier s'il y a un thème sauvegardé dans le localStorage
  const savedTheme = localStorage.getItem(localStorageThemeKey) as
    | "light"
    | "dark"
    | null;

  // Initialiser le state avec le thème sauvegardé ou "light" par défaut
  const [theme, setTheme] = useState<"light" | "dark">(savedTheme || "light");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem(localStorageThemeKey, newTheme); // Sauvegarder le nouveau thème
      return newTheme;
    });
  };

  // Mettre à jour dynamiquement l'attribut `data-color-mode` de l'élément <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-color-mode", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
