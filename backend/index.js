import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'test',
});

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.json('Hello this is the backend');
});

app.get('/books', (req, res) => {
  const q = 'SELECT * FROM books';
  db.query(q, (error, data) => {
    if (error) return res.json(error);
    return res.json(data);
  });
});

app.get('/books/:id', (req, res) => {
  const id = req.params.id;
  const q = 'SELECT * FROM books WHERE id = ?';

  db.query(q, id, (err, data) => {
    if (err) {
      console.error('Error in MySQL query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    console.log('Book has been fetched. Fetched Book ID:', id);
    return res.json(data);
  });
});

app.post('/books', (req, res) => {
  const q = 'INSERT INTO books (`title`, `desc`, `cover`, `price`) VALUES (?)';
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    parseInt(req.body.price, 10), // Parse price to an integer
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      console.error('Error in MySQL query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    console.log('Book has been created. Insert ID:', data.insertId);
    return res.json('Book has been created.');
  });
});

app.delete('/books/:id', (req, res) => {
  const id = req.params.id;
  const q = 'DELETE FROM books WHERE id = ?';

  db.query(q, id, (err, data) => {
    if (err) {
      console.error('Error in MySQL query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    console.log('Book has been deleted. Deleted ID:', id);
    return res.json('Book has been deleted.');
  });
});

app.put('/books/:id', (req, res) => {
  const id = req.params.id;
  const q =
    'UPDATE books SET `title` = ?, `desc` = ?, `cover` = ?, `price` = ? WHERE id = ?';

  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    parseInt(req.body.price, 10), // Parse price to an integer
  ];

  db.query(q, [...values, id], (err, data) => {
    if (err) {
      console.error('Error in MySQL query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    console.log('Book has been updated. Updated Book ID:', id);
    return res.json('Book has been updated.');
  });
});

app.listen(8800, () => {
  console.log(`Connected to backend. Listening port: 8800`);
});
