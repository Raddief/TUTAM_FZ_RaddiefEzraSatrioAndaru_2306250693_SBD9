import pool from '../config/db.js';

class Todo {
  static async getAll() {
    try {
      const query = 'SELECT * FROM todos ORDER BY created_at DESC';
      const { rows } = await pool.query(query);
      return rows;
    } catch (err) {
      console.error('Error in getAll:', err);
      throw err;
    }
  }

  static async create(title) {
    try {
      const query = 'INSERT INTO todos (title, completed) VALUES ($1, $2) RETURNING *';
      const values = [title, false];
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (err) {
      console.error('Error in create:', err);
      throw err;
    }
  }

  static async delete(id) {
    try {
      const query = 'DELETE FROM todos WHERE id = $1';
      await pool.query(query, [id]);
    } catch (err) {
      console.error('Error in delete:', err);
      throw err;
    }
  }
}

export default Todo;