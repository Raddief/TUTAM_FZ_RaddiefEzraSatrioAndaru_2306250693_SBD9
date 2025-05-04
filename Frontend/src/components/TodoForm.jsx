import { useState } from 'react';
import axios from 'axios';

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    try {
      const response = await axios.post('http://localhost:5000/api/todos', { title });
      onAdd(response.data);
      setTitle('');
    } catch (err) {
      console.error('Error adding todo:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-10 group">
      <div className="flex gap-3 items-stretch">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="✏️ Apa yah?"
          className="flex-1 px-6 py-4 text-xl border-2 border-blue-200 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all"
        />
        <button
          type="submit"
          className="px-8 py-4 text-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
        >
          ➕ Add Task
        </button>
      </div>
    </form>
  );
}