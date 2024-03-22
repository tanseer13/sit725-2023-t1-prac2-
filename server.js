const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());
app.get('/add', (req, res) => {

  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid numbers provided' });
  }
  const sum = num1 + num2;  
  res.json({ result: sum });
});
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js Calculator API');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
