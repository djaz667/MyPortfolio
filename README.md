# MyPortfolio

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](https://github.com/username/myportfolio)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.6-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

Un portfolio personnel moderne et interactif développé avec Next.js, présentant mes projets, compétences et expériences professionnelles.

## 🚀 À propos du projet

MyPortfolio est un site web portfolio personnel conçu pour présenter mes réalisations, compétences techniques et expériences professionnelles de manière élégante et moderne. Le site offre une expérience utilisateur fluide avec des animations sophistiquées et une interface responsive.

### Fonctionnalités principales

- **Page d'accueil** : Présentation personnelle avec animations et sections interactives
- **Projets** : Galerie détaillée de mes réalisations avec descriptions techniques
- **À propos** : Présentation de mon parcours et compétences
- **Contact** : Formulaire de contact et informations de contact
- **Témoignages** : Section pour afficher les retours clients
- **Design responsive** : Optimisé pour tous les appareils
- **Mode sombre/clair** : Thème adaptatif

## 🛠 Comment le projet a été créé

Ce projet a été initié avec `create-next-app` pour bénéficier de la structure moderne de Next.js 15 avec l'App Router.

### Étapes de développement

1. **Configuration initiale**
   - Création du projet avec `npx create-next-app@latest`
   - Configuration TypeScript et ESLint
   - Mise en place de Tailwind CSS v4 pour le styling

2. **Architecture UI/UX**
   - Intégration de Radix UI pour les composants accessibles
   - Configuration des icônes avec Lucide React
   - Mise en place du système de thème avec next-themes

3. **Animations et interactions**
   - Intégration de Framer Motion pour les animations fluides
   - Ajout d'effets visuels avec Motion et Three.js
   - Création de composants interactifs (carrousels, modales)

4. **Structure des données**
   - Organisation des données de projets dans des fichiers TypeScript
   - Configuration des types et interfaces
   - Mise en place de la gestion d'état

## 🛠 Technologies utilisées

### Frontend
- **Next.js 15** - Framework React avec App Router
- **React 19** - Bibliothèque JavaScript pour l'interface utilisateur
- **TypeScript** - JavaScript typé pour une meilleure maintenabilité

### Styling & UI
- **Tailwind CSS v4** - Framework CSS utilitaire
- **Radix UI** - Composants primitifs accessibles
- **Lucide Icons** - Bibliothèque d'icônes moderne
- **Tailwind Animate** - Animations CSS

### Animations & Visualisations
- **Framer Motion** - Bibliothèque d'animations React
- **Motion** - Animations performantes
- **Three.js** - Bibliothèque 3D pour les visualisations
- **React Three Fiber** - Rendu React pour Three.js
- **Cobe** - Globe 3D interactif

### Formulaires & Validation
- **React Hook Form** - Gestion des formulaires
- **Zod** - Validation des schémas de données

### Base de données
- **Drizzle ORM** - ORM TypeScript
- **LibSQL** - Base de données SQL

### Outils de développement
- **ESLint** - Linting du code
- **Turbopack** - Bundler rapide pour le développement

## 📁 Structure du projet

```
myportfolio/
├── public/                 # Assets statiques (images, icônes)
│   └── assets/            # Images des projets
├── src/
│   ├── app/               # Pages Next.js (App Router)
│   │   ├── layout.tsx     # Layout principal
│   │   ├── page.tsx       # Page d'accueil
│   │   ├── projets/       # Pages des projets
│   │   ├── a-propos/      # Page à propos
│   │   ├── contact/       # Page contact
│   │   └── temoignages/   # Page témoignages
│   ├── components/        # Composants réutilisables
│   │   ├── ui/           # Composants UI de base (shadcn/ui)
│   │   ├── Navbar.tsx    # Barre de navigation
│   │   ├── Footer.tsx    # Pied de page
│   │   └── ...
│   ├── lib/              # Utilitaires et configurations
│   │   ├── projects-data.ts # Données des projets
│   │   └── utils.ts      # Fonctions utilitaires
│   └── hooks/            # Hooks personnalisés
├── package.json          # Dépendances et scripts
├── tailwind.config.js    # Configuration Tailwind
├── next.config.ts        # Configuration Next.js
└── tsconfig.json         # Configuration TypeScript
```

## 🚀 Installation et configuration

### Prérequis

- Node.js 18+ ou 20+
- npm, yarn, pnpm ou bun

### Installation

1. **Clonez le repository**
   ```bash
   git clone https://github.com/username/myportfolio.git
   cd myportfolio
   ```

2. **Installez les dépendances**
   ```bash
   npm install
   # ou
   bun install
   ```

3. **Variables d'environnement** (si nécessaire)
   Créez un fichier `.env.local` à la racine avec vos variables :
   ```env
   # Exemple de variables (adapter selon vos besoins)
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

## 📋 Commandes disponibles

### Développement
```bash
npm run dev      # Lance le serveur de développement avec Turbopack
```

### Production
```bash
npm run build    # Construit l'application pour la production
npm run start    # Lance le serveur de production
```

### Qualité du code
```bash
npm run lint     # Vérifie la qualité du code avec ESLint
```

## 🎯 Utilisation

### Navigation
- **/** - Page d'accueil avec présentation
- **/projets** - Liste des projets avec filtres
- **/projets/[id]** - Détails d'un projet spécifique
- **/a-propos** - Présentation personnelle
- **/contact** - Formulaire de contact
- **/temoignages** - Avis et témoignages

### Fonctionnalités interactives
- **Galerie de projets** : Navigation filtrée par catégories
- **Animations au scroll** : Effets d'apparition fluides
- **Thème adaptatif** : Basculement automatique sombre/clair
- **Formulaire de contact** : Validation en temps réel
- **Visualisations 3D** : Globe interactif et animations

## 🚀 Déploiement

### Sur Vercel (recommandé)

1. **Connectez votre repository GitHub à Vercel**
2. **Déployez automatiquement** : Chaque push déclenche un déploiement
3. **Configuration** : Vercel détecte automatiquement Next.js

### Autres plateformes

Le projet peut être déployé sur :
- **Netlify**
- **Railway**
- **Heroku**
- **Docker** (avec configuration personnalisée)

### Variables d'environnement en production

Configurez les variables suivantes selon votre environnement :
```env
NEXT_PUBLIC_SITE_URL=https://votredomaine.com
# Autres variables selon vos intégrations
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commitez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

### Guidelines de développement

- Respectez la structure des composants existants
- Utilisez TypeScript pour tout nouveau code
- Testez vos changements sur différents appareils
- Suivez les conventions de nommage existantes

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Contact

**Votre Nom**
- Email : votre.email@example.com
- LinkedIn : [Votre LinkedIn](https://linkedin.com/in/votreprofil)
- Portfolio : [votredomaine.com](https://votredomaine.com)
- GitHub : [@votregithub](https://github.com/votregithub)

---

⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !
