import mysql from 'mysql';

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "cr",
  database: "user_mysql"
});// Define the connectToDatabase function
export const connectToDatabase = () => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database:', err.message);
      return;
    }
    console.log('Connected to the database with thread ID', connection.threadId);
    connection.release();
  });
};


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
  const { date,trending,} = userData;
  let sql = "";
  const values = []
  if(date && trending){
    values.push(date);
    values.push(trending);
    sql = "UPDATE miscellaneous_1 SET date = ? , trending = ? WHERE id = ?"
  } else if(date){
    values.push(date)
    sql = "UPDATE miscellaneous_1 SET date = ? WHERE id = ?"
  } else if(trending){
    values.push(trending);
    sql = "UPDATE miscellaneous_1 SET trending = ? WHERE  ?"
  } else {
    return;
  }
  values.push(userId)
  console.log(values)

  pool.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error updating user:', err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

// export { getMiscellaneousData, updateUser };
export default pool;
