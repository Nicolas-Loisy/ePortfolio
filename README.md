# ePortfolio - Nicolas Loisy

Portfolio personnel présentant mes projets, compétences et parcours en tant que développeur IA et Data Scientist.

Site en ligne : [nicolasloisy.fr](https://nicolasloisy.fr)

## Technologies

- **Frontend** : React 18, TypeScript, Styled Components
- **Build** : Vite
- **Internationalisation** : i18next (FR/EN)
- **Authentification** : Firebase Auth
- **Hébergement** : Raspberry Pi 5

## Installation

```bash
cd App
npm install
```

## Configuration

Créer un fichier `.env` à la racine du dossier `App` :

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Commandes

```bash
# Serveur de développement
npm run dev

# Build production
npm run build

# Prévisualiser le build
npm run preview
```

## Structure du projet

```
App/
├── public/          # Assets statiques (favicon, sitemap, robots.txt)
├── src/
│   ├── assets/      # Images et fichiers
│   ├── components/  # Composants React (atoms, molecules, organisms)
│   ├── contexts/    # Contextes React (thème, etc.)
│   ├── data/        # Données des projets
│   ├── pages/       # Pages de l'application
│   ├── router/      # Configuration du routeur
│   ├── styles/      # Styles globaux et thèmes
│   └── translations/# Fichiers de traduction i18n
├── index.html       # Point d'entrée HTML
├── vite.config.ts   # Configuration Vite
└── tsconfig.json    # Configuration TypeScript
```

## Projets présentés

- **GLaDOS** - Assistant vocal IA sur Raspberry Pi
- **TweetEmotion** - Benchmark ML pour classification de sentiments
- **Enigma** - Simulateur de la machine Enigma
- **MarkIA** - Éditeur Markdown avec IA
- **Et plus...**

## Licence

Projet personnel - Tous droits réservés.

## Contact

- LinkedIn : [nicolas-loisy](https://linkedin.com/in/nicolas-loisy)
- GitHub : [Nicolas-Loisy](https://github.com/Nicolas-Loisy)
