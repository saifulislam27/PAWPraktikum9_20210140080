require('dotenv').config();
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());

// Koneksi ke MongoDB Atlas
const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
let db;

client.connect(err => {
  if (err) throw err;
  db = client.db('bookDB'); // Nama database
  console.log('Connected to MongoDB');
});

// Server listener
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
