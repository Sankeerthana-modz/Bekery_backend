import express from 'express';
import bodyParser from 'body-parser';
import {connectToDatabase, getMiscellaneousData, updateUser } from "./pages/Db_connection.js";
import Trending from "./pages/Trending_items.js";
import User from "./pages/User.js";
import handleOrdersPost from "./pages/Todays_orders.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Connect to the database
connectToDatabase();

// Set up routes
app.get('/trending_items', Trending);
app.post('/user', User);
app.post('/orders', handleOrdersPost);
app.get('/read', getMiscellaneousData);

// Route to fetch miscellaneous data
app.get('/miscellaneous_1', (req, res) => {
  getMiscellaneousData((error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Failed to fetch miscellaneous data', details: error.message });
    }
    res.status(200).json({ data: results });
  });
});

// Route to update user information
app.put('/updateUser/:id', (req, res) => {
  const userId = req.params.id;
  const userData = req.body;

  updateUser(userId, userData, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to update user', details: err.message });
    }
    res.status(200).json({ message: 'User updated successfully', results });
  });

});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
