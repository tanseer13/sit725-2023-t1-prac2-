const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/add', (req, res) => {

  const { num1, num2 } = req.query;


  const result = parseInt(num1) + parseInt(num2);


  res.send(`The sum of ${num1} and ${num2} is ${result}`);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
