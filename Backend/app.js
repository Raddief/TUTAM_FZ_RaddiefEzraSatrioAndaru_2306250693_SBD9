const express = require('express');
const cors = require('cors');
const todosRouter = require('./routes/todo.route');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/todos', todosRouter);

app.get('/', (req, res) => {
  res.send('Todo API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});