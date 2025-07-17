import { useMemo } from "react";

interface SEOData {
  title: string;
  description: string;
  keywords: string;
  structuredData: object;
}

export const useSEO = (): SEOData => {
  return useMemo(() => ({
    title: "Nicolas Loisy - Développeur IA & Data Scientist | Portfolio",
    description: "Nicolas Loisy, Développeur Intelligence Artificielle et Data Scientist. Spécialisé en Python, React, Machine Learning, NLP. Portfolio de projets IA et développement web.",
    keywords: "Nicolas Loisy, développeur IA, data scientist, intelligence artificielle, machine learning, Python, React, TypeScript, portfolio, développeur web",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Nicolas Loisy",
      jobTitle: "Développeur Intelligence Artificielle & Data Scientist",
      description: "Développeur spécialisé en Intelligence Artificielle, Machine Learning et développement web",
      url: "https://nicolasloisy.fr",
      image: "https://nicolasloisy.fr/img/pp_nl.jpg",
      sameAs: [
        "https://linkedin.com/in/nicolas-loisy",
        "https://github.com/Nicolas-Loisy",
        "https://huggingface.co/Nicolas-Loisy",
      ],
      knowsAbout: [
        "Intelligence Artificielle",
        "Machine Learning",
        "Python",
        "React",
        "TypeScript",
        "Data Science",
      ],
      alumniOf: "Université Paris Cité",
      worksFor: {
        "@type": "Organization",
        name: "Eurelis",
      },
    }
  }), []);
};
