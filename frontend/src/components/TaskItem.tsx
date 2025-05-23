import { Task } from '../types/TaskType';
import '../assets/main.css';

// Props attendues par le composant TaskItem
type TaskItemProps = {
  task: Task;
  onDelete(id: number) :void;
  onStatusChange(id: number) :void;
}

// Composant d'affichage d'une tâche
export function TaskItem({ task, onDelete, onStatusChange }: TaskItemProps){
  
  // Fonction pour changer le statut (done <=> pending)
  function toggleStatus(){
    onStatusChange(task.id);
  };

  return (
    <div className={`task-item ${task.status === 'done' ? 'completed' : ''}`}>
      <div className="task-content">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-actions">
        <button 
          className={`status-button ${task.status === 'done' ? 'status-done' : 'status-pending'}`}
          onClick={toggleStatus}
        >
          {task.status === 'done' ? 'Terminée' : 'À faire'}
        </button>
        <button 
          className="delete-button" 
          onClick={() => onDelete(task.id)}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};