# Section Documents Sécurisés

Cette fonctionnalité permet de créer une section protégée par mot de passe pour partager des documents confidentiels.

## Fonctionnalités

### 🔐 Authentification par mot de passe statique

- Mot de passe configurable via les variables d'environnement
- Session sécurisée avec expiration automatique (1 heure par défaut)
- Stockage local de la session pour une expérience utilisateur fluide

### 📁 Gestion des documents

- Interface élégante pour afficher les documents
- Support de différents types de fichiers (PDF, DOC, images)
- Prévisualisation et téléchargement des documents
- Métadonnées des documents (date, taille, catégorie)

### 🔄 Gestion de session

- Déconnexion manuelle disponible
- Expiration automatique de la session
- Vérification de la validité de la session

## Configuration

### Variables d'environnement

Ajoutez dans votre fichier `.env` :

```env
REACT_APP_DOCUMENTS_PASSWORD=VotreMotDePasseSecurise2024!
```

### Structure des fichiers

Les documents sécurisés doivent être placés dans :

```
public/secure-files/
```

## Utilisation

### Accès à la section

1. Rendez-vous sur `/documents`
2. Ou cliquez sur le bouton "Accès Documents Sécurisés" depuis la page d'accueil
3. Saisissez le mot de passe configuré
4. Accédez aux documents confidentiels

### Ajout de nouveaux documents

1. **Placez vos fichiers** dans le dossier `public/secure-files/`

2. **Mettez à jour la liste des documents** dans `SecureDocumentsPage.tsx` :

```typescript
const documents: Document[] = [
  {
    id: "unique-id",
    title: "Titre du document",
    description: "Description détaillée",
    fileName: "nom-du-fichier.pdf",
    filePath: "/secure-files/nom-du-fichier.pdf",
    date: "2024-08-16",
    size: "2.5 MB",
    type: "pdf",
    category: "Technique",
  },
  // Ajouter d'autres documents...
];
```

## Sécurité

### Bonnes pratiques

- ✅ Utilisez un mot de passe fort et unique
- ✅ Changez régulièrement le mot de passe
- ✅ Ne commitez jamais le mot de passe dans le code source
- ✅ Configurez une expiration de session appropriée

### Limitations

- ⚠️ Cette solution utilise un mot de passe statique partagé
- ⚠️ Les fichiers sont accessibles directement via leur URL si l'on connaît le chemin
- ⚠️ La sécurité repose sur l'obscurité du chemin et le mot de passe

### Améliorations possibles

- Authentification individuelle avec Firebase Auth
- Chiffrement des fichiers côté serveur
- Logs d'accès et audit trail
- Restrictions IP
- Authentification à deux facteurs

## Personnalisation

### Thème et style

Les composants utilisent le système de thème existant de l'application. Pour personnaliser :

1. **Couleurs** : Modifiez les variables dans `themes.ts`
2. **Animations** : Ajustez les transitions CSS dans les styled-components
3. **Layout** : Modifiez les grilles et espacements dans `SecureDocumentsPage.tsx`

### Traductions

Les textes sont traduisibles via le système i18n :

- **Français** : `src/translations/locales/fr/translation.json`
- **Anglais** : `src/translations/locales/en/translation.json`

Clés disponibles sous `secure.*`

## Structure des composants

```
src/
├── components/
│   └── molecules/
│       ├── SecureLogin.tsx       # Composant de connexion
│       └── SecureAccessButton.tsx # Bouton d'accès depuis l'accueil
├── config/
│   └── securityConfig.ts         # Configuration sécurité
├── pages/
│   └── SecureDocumentsPage.tsx   # Page principale des documents
└── translations/
    └── locales/
        ├── fr/translation.json   # Traductions françaises
        └── en/translation.json   # Traductions anglaises
```

## Route

La route `/documents` est automatiquement ajoutée au router principal.

## Support

Cette fonctionnalité est prête à l'emploi et s'intègre parfaitement avec :

- ✅ Système de thèmes (dark/light)
- ✅ Traductions i18n
- ✅ Design responsive
- ✅ Routing React Router
- ✅ Styled Components
