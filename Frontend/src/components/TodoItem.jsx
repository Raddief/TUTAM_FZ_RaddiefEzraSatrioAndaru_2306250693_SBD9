import axios from 'axios';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

const TodoItem = ({ todo, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${todo.id}`);
      onDelete(todo.id);
    } catch (err) {
      console.error('Error deleting todo:', err);
    }
  };

  const formattedDate = format(new Date(todo.created_at), 'dd MMMM yyyy', { locale: id });

  return (
    <div className="relative p-6 mb-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-400">
      <div className="flex justify-between items-start">
        <div className="pr-6">
          <p className={`text-2xl font-medium ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
            {todo.title}
          </p>
          <p className="text-lg text-blue-600 mt-2">
            📅 Created: {formattedDate}
          </p>
        </div>
        <button
          onClick={handleDelete}
          className="p-3 text-red-400 hover:text-white hover:bg-red-500 rounded-full transition-colors duration-200 text-xl"
          aria-label="Delete"
        >
          🗑️
        </button>
      </div>
      
      {!todo.completed && (
        <div className="absolute bottom-4 right-4 text-sm font-medium text-green-600 animate-pulse">
          ⚡ Active
        </div>
      )}
    </div>
  );
};

export default TodoItem;