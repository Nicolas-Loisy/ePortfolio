// src/App.tsx
import React from "react";
import AppRouter from "./router/Router";
import { HelmetProvider } from "react-helmet-async";

const App: React.FC = () => {
  return (
    <div className="App">
      <HelmetProvider>
        <AppRouter />
      </HelmetProvider>
    </div>
  );
};

export default App;
