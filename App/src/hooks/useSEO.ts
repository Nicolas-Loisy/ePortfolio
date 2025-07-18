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
    keywords: "Nicolas Loisy, développeur IA, data scientist, intelligence artificielle, machine learning, Python, React, TypeScript, portfolio, développeur web, PHP, Symfony, MongoDB, Docker, LlamaIndex, Langchain, RAG, IEEE",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": "https://nicolasloisy.fr/#person",
          "name": "Nicolas Loisy",
          "givenName": "Nicolas",
          "familyName": "Loisy",
          "jobTitle": [
            "Développeur Intelligence Artificielle",
            "Développeur Python",
            "Data Scientist",
            "Développeur Web"
          ],
          "description": "Développeur spécialisé en Intelligence Artificielle, Machine Learning, Python et développement web. Passionné par l'IA et les nouvelles technologies.",
          "url": "https://nicolasloisy.fr",
          "image": "https://nicolasloisy.fr/img/pp_nl.jpg",
          "mainEntityOfPage": "https://nicolasloisy.fr/#person",
          "sameAs": [
            "https://linkedin.com/in/nicolas-loisy",
            "https://github.com/Nicolas-Loisy",
            "https://huggingface.co/Nicolas-Loisy"
          ],
          "knowsAbout": [
            "Intelligence Artificielle",
            "Machine Learning",
            "Deep Learning",
            "Natural Language Processing",
            "Computer Vision",
            "Python",
            "React",
            "TypeScript",
            "Data Science",
            "Web Development",
            "API Development",
            "RAG",
            "IA",
            "AI",
            "LlamaIndex"
          ],
          "skills": [
            "Python",
            "PHP",
            "Symfony",
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "ReactNative",
            "NodeJS",
            "NodeTS",
            "Intelligence Artificielle",
            "LlamaIndex",
            "Langchain",
            "AI",
            "IA",
            "RAG",
            "MySQL",
            "MongoDB",
            "Neo4J",
            "Git",
            "Bash",
            "Docker",
            "Raspberry Pi"
          ],
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Université Paris Cité",
            "url": "https://u-paris.fr/"
          },
          "worksFor": [
            {
              "@type": "Organization",
              "@id": "https://nicolasloisy.fr/#nicolas-loisy",
              "name": "Nicolas Loisy",
              "url": "https://nicolasloisy.fr/"
            },
            {
              "@type": "Organization",
              "@id": "https://nicolasloisy.fr/#eurelis",
              "name": "Eurelis",
              "url": "https://eurelis.com/"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://nicolasloisy.fr/#nicolas-loisy",
          "name": "Nicolas Loisy",
          "url": "https://nicolasloisy.fr/",
          "description": "Développement en Intelligence Artificielle, Python, Data Science et développement web",
          "founder": {
            "@id": "https://nicolasloisy.fr/#person"
          },
          "employee": {
            "@id": "https://nicolasloisy.fr/#person"
          },
          "serviceType": [
            "Développement Intelligence Artificielle",
            "Développement Python",
            "Data Science",
            "Développement Web"
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://nicolasloisy.fr/#eurelis",
          "name": "Eurelis",
          "url": "https://eurelis.com/",
          "description": "Société de transformation digitale, spécialisée dans le développement de solutions en Intelligence Artificielle, Web et Mobile.",
          "employee": {
            "@id": "https://nicolasloisy.fr/#person"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://nicolasloisy.fr/#website",
          "url": "https://nicolasloisy.fr/",
          "name": "Nicolas Loisy - Portfolio",
          "publisher": {
            "@id": "https://nicolasloisy.fr/#person"
          },
          "description": "Portfolio professionnel de Nicolas Loisy, développeur IA et data scientist",
          "inLanguage": "fr-FR"
        },
        {
          "@type": "WebPage",
          "@id": "https://nicolasloisy.fr/#webpage",
          "url": "https://nicolasloisy.fr/",
          "name": "Nicolas Loisy - Développeur IA & Data Scientist | Portfolio",
          "about": {
            "@id": "https://nicolasloisy.fr/#person"
          },
          "isPartOf": {
            "@id": "https://nicolasloisy.fr/#website"
          }
        }
      ]
    }
  }), []);
};
