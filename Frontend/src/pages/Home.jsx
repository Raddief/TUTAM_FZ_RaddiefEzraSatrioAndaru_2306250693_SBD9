import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
import { motion, AnimatePresence } from 'framer-motion';
import { API_BASE_URL } from '../config/config';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL || API_BASE_URL;

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/todos`);
        setTodos(response.data);
      } catch (err) {
        setError('Failed to load todos');
        console.error('Error fetching todos:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, [API_URL]);

  const handleAddTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">
        Your Tasks
      </h1>
      
      <TodoForm onAdd={handleAddTodo} />
      
      <div className="space-y-4 mt-8">
        {isLoading ? (
          <div className="flex justify-center py-16">
            <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <p className="text-2xl text-center text-red-500 py-8">{error}</p>
        ) : todos.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-lg">
            <p className="text-2xl text-gray-500">Belum ada task, silahkan tambah :)</p>
          </div>
        ) : (
          <AnimatePresence>
            {todos.map(todo => (
              <motion.div
                key={todo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <TodoItem todo={todo} onDelete={handleDeleteTodo} />
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}