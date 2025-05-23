import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema, TaskFormData } from '../types/TaskType';
import '../assets/main.css';

// Props attendues : une fonction onSubmit qui reçoit les données validées
type TaskFormProps = {
  onSubmit(data: TaskFormData) :void;
}

// Composant du formulaire
export function TaskForm({ onSubmit }: TaskFormProps){
  // Initialisation de react-hook-form avec Zod comme validateur
  const {
    register,                   // Permet d’enregistrer les champs du formulaire
    handleSubmit,               
    reset,                      // Pour réinitialiser le formulaire après soumission
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema) as any,    //validation zod
    defaultValues: {           // 🧾 Valeurs initiales du form
      title: '',
      description: '',
      status: 'pending',
    },
  });

  // Fonction déclenchée quand le formulaire est soumis et valide
  function submitHandler(data: TaskFormData){
    onSubmit(data);
    reset();
  };

  //retourne le formulaire
  return (
    <form onSubmit={handleSubmit(submitHandler)} className="task-form">
      <div className="form-group">
        <label htmlFor="title">Titre</label>
        <input
          id="title"
          type="text"
          {...register('title')}
          className={errors.title ? 'input-error' : ''}
        />
        {errors.title && <p className="error-message">{errors.title.message}</p>}
      </div>
      
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          {...register('description')}
          className={errors.description ? 'input-error' : ''}
        />
        {errors.description && <p className="error-message">{errors.description.message}</p>}
      </div>
      <button type="submit" className="submit-button">Ajouter la tâche</button>
    </form>
  );
};
