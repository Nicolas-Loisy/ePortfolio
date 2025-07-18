import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  author?: string;
  url?: string;
  image?: string;
  type?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  author = "Nicolas Loisy",
  url = "https://nicolasloisy.fr",
  image = "https://nicolasloisy.fr/img/pp_nl.jpg",
  type = "website",
  structuredData,
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="fr-FR" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.country" content="France" />

        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="blS9Z2j-1VFTbRqIOBu5U4HYLdSQUpVc4AQPKfV4wp8"
        />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        {description && (
          <meta property="og:description" content={description} />
        )}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta
          property="og:image:alt"
          content="Photo de profil de Nicolas Loisy"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Nicolas Loisy Portfolio" />

        {/* Canonical */}
        <link rel="canonical" href={url} />

        {/* Professional Keywords */}
        <meta
          name="skills"
          content="Python, React, TypeScript, Intelligence Artificielle, Machine Learning, Data Science, Développement Web"
        />
        <meta
          name="profession"
          content="Développeur IA, Développeur Web, Développeur Python, Data Scientist"
        />
      </Helmet>

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </>
  );
};

export default SEO;
