// src/App.tsx
import React from "react";
import AppRouter from "./router/Router";
import { HelmetProvider } from "react-helmet-async";
import { ChristmasProvider, useChristmas } from "./contexts/ChristmasContext";
import Snowflakes from "./components/atoms/Snowflakes";

const AppContent: React.FC = () => {
  const { isChristmasMode } = useChristmas();

  return (
    <div className="App">
      {isChristmasMode && <Snowflakes />}
      <HelmetProvider>
        <AppRouter />
      </HelmetProvider>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ChristmasProvider>
      <AppContent />
    </ChristmasProvider>
  );
};

export default App;
