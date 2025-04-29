const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'API is running' });
});

app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
}
);
