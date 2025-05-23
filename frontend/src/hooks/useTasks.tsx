import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getTasks, createTask, deleteTask, updateTaskStatus } from '../services/APITask';
import { TaskFormData } from '../types/TaskType';

// Hook personnalisé pour gérer les tâches
export function useTasks(){
  const queryClient = useQueryClient(); // Permet de manipuler le cache

  // Récupération des tâches via useQuery
  const { data: tasks = [], isLoading } = useQuery({
    queryKey: ['tasks'],      // Clé de cache pour identifier cette query
    queryFn: getTasks,
  });

  // Mutation pour créer une tâche
  const createTaskMutation = useMutation({
    mutationFn: (newTask: TaskFormData) => createTask(newTask),
    onSuccess: () => {
      // Invalider le cache pour re-fetch après ajout
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  // Mutation pour supprimer une tâche
  const deleteTaskMutation = useMutation({
    mutationFn: (id: number) => deleteTask(id),
    onSuccess: () => {
      // Mise à jour
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  // Mutation pour changer le statut d'une tâche
  const updateTaskStatusMutation = useMutation({
    mutationFn: (id: number) => updateTaskStatus(id),
    onSuccess: () => {
      // Mise à jour
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  // Fonctions à utiliser à l’extérieur 

  // Ajoute une tâche
  const addTask = (task: TaskFormData) => {
    createTaskMutation.mutate(task);
  };
  
  // Supprime une tâche
  const removeTask = (id: number) => {
    deleteTaskMutation.mutate(id);
  };
  
  // Change le statut (done <=> pending)
  const toggleTaskStatus = (id: number) => {
    updateTaskStatusMutation.mutate(id);
  };

  // 🧺 Export des données et fonctions utiles
  return {
    tasks,
    isLoading,
    addTask,
    removeTask,
    toggleTaskStatus,
  };
};
