// db_connection.js
import mysql from 'mysql';

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "cr",
  database: "user_mysql"
});

// Test the connection when the app starts
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
  } else {
    console.log('Connected to the database with thread ID ' + connection.threadId);
    connection.release();
  }
});

// Function to fetch miscellaneous data
export const getMiscellaneousData = (callback) => {
  pool.query("SELECT * FROM `miscellaneous_1`", (error, results) => {
    if (error) {
      console.error('Error fetching miscellaneous data:', error);
      return callback(error, null);
    }
    callback(null, results);
  });
};

// Function to update user information
export const updateUser = (userId, userData, callback) => {
  const { name, email, password } = userData;
  const sql = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?';
  const values = [name, email, password, userId];

  pool.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error updating user:', err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

export { getMiscellaneousData, updateUser };
export default pool;
