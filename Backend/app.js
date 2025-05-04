import express from 'express';
import cors from 'cors';
import todoRoutes from './routes/todo.routes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: [
    'https://tutam9-raddiefezrasatrioandaru.vercel.app',
    'http://localhost:5173'
  ],
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// Health Check
app.get('/', (req, res) => {
  res.status(200).json({ status: 'API is running' });
});

export default app;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}