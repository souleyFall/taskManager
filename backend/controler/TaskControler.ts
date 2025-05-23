import { Request, Response } from 'express';
import task from "../types/task";
import * as taskData from '../services/TaskServices';

// Récupère toutes les tâches et les renvoie sous forme de JSON
export function getAllTasks(req: Request, res: Response) :void {
    res.json(taskData.getAllTasks());
}

// Récupère une tâche spécifique par son ID
export function getTaskById(req: Request, res: Response) :void{
    try {
        const task :task = taskData.getTaskById(parseInt(req.params.id));
        if(task)
            res.json(task);
        else
            res.status(404).json({ message: "Tâche introuvable" });
    } catch (error) {
        res.status(404).json({ message: "Tâche introuvable" });
    }
}

// Supprime une tâche spécifique par son ID
export function deleteTask(req: Request, res: Response) :void{
    try {
        const deleted = taskData.deleteTask(parseInt(req.params.id));
        if(deleted)
            res.status(204).send();
        else
            res.status(404).json({ message: "Tâche introuvable ou déjà supprimée" });
    } catch (error) {
        res.status(404).json({ message: "Tâche introuvable ou déjà supprimée" });
    }
}

// Ajoute une nouvelle tâche
export function addTask(req: Request, res: Response){
    const {title, description, status}= req.body;
    const addedTask = taskData.addTask({title, description, status});
    if(addedTask)
        res.status(204).send();
    else
        res.status(404).json({ message: "Erreut lors de l'ajout" });
}

// Met à jour une tâche existante
export function updateTask(req: Request, res: Response){
    try {
        const isUpdated = taskData.updateTask(parseInt(req.params.id));
        if(isUpdated)
            res.status(204).send();
        else
            res.status(404).json({ message: "Erreut lors de la mise à jour" });
    } catch (error) {
        res.status(404).json({ message: "Erreut lors de la mise à jour" });
    }
}