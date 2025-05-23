import React from 'react';
import { Task } from '../types/TaskType';
import { TaskItem } from './TaskItem';
import '../assets/main.css';

// Props attendues par le composant TaskList
type TaskListProps = {
  tasks: Task[];
  isLoading: boolean;
  onDelete(id: number) :void;
  onStatusChange(id: number) :void;
}

// Composant principal
export function TaskList({ tasks, isLoading, onDelete, onStatusChange }: TaskListProps){
  //en chargement
  if (isLoading) {
    return <div className="loading">Chargement...</div>;
  }

  //liste vide
  if (tasks.length === 0) {
    return <div className="no-tasks">Aucune tâche pour le moment</div>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
};
