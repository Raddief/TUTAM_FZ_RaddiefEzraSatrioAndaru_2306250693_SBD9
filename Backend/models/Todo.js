const pool = require('../config/db');

class Todo {
static async getAll() {
    const { rows } = await pool.query(
        'SELECT id, title, completed, created_at FROM todos ORDER BY created_at DESC'
    );
    return rows;
    }

static async create(title) {
    const { rows } = await pool.query(
      'INSERT INTO todos (title, completed) VALUES ($1, $2) RETURNING *',
    [title, false]
    );
    return rows[0];
}

static async delete(id) {
    await pool.query('DELETE FROM todos WHERE id = $1', [id]);
}
}

module.exports = Todo;