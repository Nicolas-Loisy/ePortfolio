import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Error403 from "../pages/error/Error403";
import Error404 from "../pages/error/Error404";
import ErrorGeneric from "../pages/error/ErrorGeneric";
import EnigmaPage from "../pages/EnigmaPage";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/403" element={<Error403 />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/error" element={<ErrorGeneric />} />
        <Route path="/enigma" element={<EnigmaPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
