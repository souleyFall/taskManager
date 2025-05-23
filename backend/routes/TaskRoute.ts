import { Router } from "express";
import { validate } from '../middleware/Validate';
import { taskSchema } from '../types/task';
import * as taskControler from '../controler/TaskControler';

// Initialisation du routeur
const router = Router();

//Définition des routers
router.get("/tasks", taskControler.getAllTasks);
router.get("/tasks/:id", taskControler.getTaskById);
router.delete("/tasks/:id", taskControler.deleteTask);
router.post("/tasks", validate(taskSchema), taskControler.addTask); // Route pour ajouter une nouvelle tâche, validate(taskSchema) pour valider les données reçues
router.patch("/tasks/:id", taskControler.updateTask);

export default router;
