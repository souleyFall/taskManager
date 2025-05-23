import task from "../../types/task";

// Liste statique de tâches — fait office de fausse BDD en mémoire
export const tasks: task[] = [
  {
    id: 1,
    title: 'Créer le repo GitHub',
    description: 'Initialiser le dépôt pour le projet de gestion de tâches.',
    status: 'done',
  },
  {
    id: 2,
    title: 'Mettre en place Express',
    description: 'Configurer le serveur backend avec Express et TypeScript.',
    status: 'pending',
  },
  {
    id: 3,
    title: 'Coder l’API POST /tasks',
    description: 'Permettre l’ajout d’une nouvelle tâche via le frontend.',
    status: 'pending',
  },
  {
    id: 4,
    title: 'Ajouter le formulaire React',
    description: 'Créer un composant formulaire pour ajouter des tâches.',
    status: 'done',
  },
];

