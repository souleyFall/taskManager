import task from "../types/task";
import { tasks } from "./data/TaskData";

// Génère un nouvel ID unique pour une nouvelle tâche
// Cherche le plus grand ID existant, puis ajoute 1
function generateId() :number{
    return Math.max(...tasks.map(task => task.id), 0) + 1;
}

// Récupère toutes les tâches (copie des objets pour éviter la mutation directe)
//retourne une copie pour éviter de toucher à l'original
function getAllTasks() :task[]{
    return tasks.map(t => ({ ...t }));
}

// Récupère une tâche par son ID
function getTaskById(id :number) :task{
    const task = tasks.find(t => t.id === id);
    if (!task) {
        throw new Error('Tâche introuvable');
    }
    return task;
}

// Supprime une tâche par ID
function deleteTask(id :number) :boolean{
    const indexOfTaskToDelete = tasks.findIndex(task => task.id === id);
    if (indexOfTaskToDelete==-1) {
        throw new Error('Tâche inexistante ou déjà supprimée');
    }
    tasks.splice(indexOfTaskToDelete, 1);
    return true;
}

// Ajoute une nouvelle tâche
function addTask(data :{title :string, description :string, status : 'pending' | 'done' }) :task{
    const newTask :task={
        id: generateId(), // ID généré automatiquement
        ...data
    };
    tasks.push(newTask);
    return newTask;
}

// Met à jour le statut d'une tâche (toggle entre 'pending' et 'done')
function updateTask(id :number) :boolean{
    const indexOfTaskToUpdate = tasks.findIndex(task => task.id === id);
    if (indexOfTaskToUpdate==-1) {
        throw new Error('Tâche inexistante');
    }
    tasks[indexOfTaskToUpdate].status==='pending' 
        ? tasks[indexOfTaskToUpdate].status='done' 
        : tasks[indexOfTaskToUpdate].status='pending';
    return true;
}

// Export des fonctions pour les utiliser ailleurs (ex: dans le contrôleur)
export { getAllTasks, getTaskById, deleteTask, addTask, updateTask };
