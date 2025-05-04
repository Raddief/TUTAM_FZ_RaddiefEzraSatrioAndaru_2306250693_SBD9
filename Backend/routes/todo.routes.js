import express from 'express';
import { 
  getAllTodos, 
  createTodo, 
  deleteTodo 
} from '../controllers/todo.controller.js';

const router = express.Router();

router.get('/', getAllTodos);
router.post('/', createTodo);
router.delete('/:id', deleteTodo);

export default router;