const Todo = require('../models/Todo');

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.getAll();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }
    const newTodo = await Todo.create(title);
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.delete(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};