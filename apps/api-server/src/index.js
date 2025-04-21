import express from 'express';
const app = express();
const port = 3001;

app.use(express.json());

app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong from Young Eagles backend!' });
});

app.listen(port, () => {
  console.log(`🚀 API server running on http://localhost:${port}`);
});
