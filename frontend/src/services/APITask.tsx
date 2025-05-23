import { Task, TaskFormData } from '../types/TaskType';

// URL de base de l'API backend
const API_URL = 'http://localhost:5000/api/tasks';

/**
 * 📥 Récupère toutes les tâches depuis l'API
 */
export async function getTasks() :Promise<Task[]>{
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des tâches');
  }
  return response.json();
};

/**
 * Crée une nouvelle tâche via l'API
 * @param task - les données du formulaire (title, description, status)
 */
export async function createTask(task: TaskFormData){
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  
  if (!response.ok) {
    throw new Error('Erreur lors de la création de la tâche');
  }
};

/**
 * Supprime une tâche avec son ID
 * @param id - identifiant de la tâche à supprimer
 */
export async function deleteTask(id: number){
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error('Erreur lors de la suppression de la tâche');
  }
};

/**
 * Change le statut d'une tâche (pending/done)
 * @param id - identifiant de la tâche à mettre à jour
 */
export async function updateTaskStatus(id: number){
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    throw new Error('Erreur lors de la mise à jour de la tâche');
  }
};

