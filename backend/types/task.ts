import { z } from 'zod';

// Définition du type TypeScript représentant une tâche
type task = {
    id :number;
    title :string;
    description :string;
    status :'pending' | 'done';
}

// Schéma de validation Zod utilisé pour valider les entrées utilisateur
export const taskSchema = z.object({
  title: z.string().min(1, { message: "Le titre est requis" }),
  description: z.string().min(1, { message: "La description est requise" }),
  status: z.enum(['pending', 'done']),
});

export default task;

// Type dérivé automatiquement du schéma Zod (pratique pour les validations ou middleware)
export type TaskInput = z.infer<typeof taskSchema>;
