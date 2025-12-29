export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  content: string;
  technologies: string[];
  gallery: string[];
  client: string;
  year: string;
  link?: string;
  codeSnippet?: {
    language: string;
    code: string;
    description: string;
  };
}

export const projects: Project[] = [
  {
    id: "ntas-securite-batiments",
    title: "NTAS - Sécurité des Bâtiments",
    category: "Solutions BMS & Sécurité",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/acc-1766945278351.jpeg?width=8000&height=8000&resize=contain",
    description: "Intégration des solutions de sécurité pour les bâtiments.",
    content: "Le projet NTAS a consisté en la refonte d'un site web moderne et performant pour renforcer leur présence en ligne. Le site propose une interface claire et intuitive pour présenter leurs services et solutions de surveillance, comme le contrôle d'accès, la vidéosurveillance intelligente et la détection d’intrusion. Des technologies légères, évolutives et soigneusement sélectionnées assurent un développement rapide, un contrôle total de la structure et une expérience utilisateur optimale.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    gallery: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/acc-1766945278351.jpeg?width=8000&height=8000&resize=contain",
      "/assets/2.jpg",
      "/assets/3.jpg",
    ],
    client: "NTAS",
    year: "2025",
  },


  {
    id: "gestion-centre-formation",
    title: "Gestion de Centre de Formation",
    category: "Application Web",
    image: "/assets/photo3.jpg",
    description: "Solution full-stack complète pour la gestion administrative et pédagogique d'un centre de formation.",
    content: "Ce projet consistait à digitaliser l'ensemble des processus d'un centre de formation. Nous avons développé une plateforme permettant la gestion des inscriptions, le suivi pédagogique des apprenants, la planification des cours et la génération automatique des documents administratifs. L'interface a été conçue pour être intuitive tant pour les administrateurs que pour les formateurs.\n\nLe système gère également les émargements numériques, les bilans de fin de formation et l'édition des attestations de réussite, réduisant ainsi la charge administrative de 60%.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "MongoDB", "Node.js", "Express.js"],
    gallery: [
      "/assets/photo1.jpg",
      "/assets/photo2.jpg",
      "/assets/photo4.jpg"
    ],
    client: "Institut Supérieur de Formation",
    year: "2024",
  },



  {
    id: "budgetflow-mobile",
    title: "MyBudget Mobile",
    category: "Mobile",
    image: "/assets/m1.jpeg",
    description: "Application mobile intuitive de gestion budgétaire personnelle, axée sur l'UX.",
    content: "MyBudget est une application mobile de gestion d'argent personnelle 100 % locale et sécurisée, basée sur la méthode des enveloppes. Elle permet aux utilisateurs de suivre leurs dépenses, visualiser le solde restant par catégorie, créer des enveloppes personnalisées et analyser leurs finances sans compte bancaire ni connexion internet. Simple, privée et intuitive, MyBudget aide à mieux gérer son budget et à limiter les dépenses impulsives.",
    technologies: ["Flutter", "Dart", "Figma", "SQLite"],
    gallery: [
      "/assets/m1.jpeg",
      "/assets/m2.jpeg",
      "/assets/m3.jpeg",
      "/assets/m4.jpeg"
    ],
    client: "Just-Me",
    year: "2025",
  },


  {
    id: "integration-odoo-digitalisation",
    title: "Intégration Odoo & Digitalisation",
    category: "Solutions Entreprise",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
    description: "Déploiement de modules Odoo sur mesure et optimisation digitale pour une entreprise de sécurité.",
    content: "Pour ce client dans le secteur de la sécurité, nous avons implémenté une solution ERP basée sur Odoo. Le projet incluait la personnalisation des modules de gestion des interventions, la facturation automatisée et la mise en place d'un tableau de bord de suivi opérationnel en temps réel pour la direction.\n\nLa solution a permis de connecter les agents sur le terrain via une interface mobile dédiée pour la saisie des rapports d'intervention immédiats.",
    technologies: ["Odoo", "Python", "PostgreSQL", "XML", "Docker"],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000"
    ],
    client: "NTAS",
    year: "2024",
  },
];
