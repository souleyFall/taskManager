import { z } from 'zod';

// Définition du type Task pour une tâche complète
export type Task = {
    id :number;
    title :string;
    description :string;
    status :'pending' | 'done';
}

// Validation du formulaire avec Zod
export const taskSchema = z.object({
  title: z.string().min(1, 'Le titre est requis'),
  description: z.string().min(1, 'La description est requise'),
  status: z.enum(['pending', 'done']).default('pending'),
});

// Type pour les données du formulaire, utilisé lors de la création ou mise à jour
export type TaskFormData = z.infer<typeof taskSchema>;
