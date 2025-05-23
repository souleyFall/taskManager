import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';
import { useTasks } from '../hooks/useTasks';
import '../assets/main.css';

// Configuration de base du client React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 0,
      refetchOnWindowFocus: true,
    },
  },
});

// Composant principale du site
function TaskApp() {
    // Utilisation du hook pour manipuler les tâches
    const { tasks, isLoading, addTask, removeTask, toggleTaskStatus } = useTasks();
    
    return (
        <div className="task-app">
            <h1>Gestionnaire de tâches</h1>
            <div className="app-container">
                <div className="form-container">
                    <h2>Ajouter une tâche</h2>
                    <TaskForm onSubmit={addTask} />
                </div>
                <div className="list-container">
                    <h2>Liste des tâches</h2>
                    <TaskList
                        tasks={tasks}
                        isLoading={isLoading}
                        onDelete={removeTask}
                        onStatusChange={toggleTaskStatus}
                    />
                </div>
            </div>
        </div>
    );
}

// Page principale avec le contexte React Query
function HomePage() {
    return (
        <QueryClientProvider client={queryClient}>
            <TaskApp />
        </QueryClientProvider>
    );
}

export default HomePage;