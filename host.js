// app.js
const express = require('express');
const app = express();
const port = 3000; // You can use any port you prefer

app.get('/', (req, res) => {
  res.send('Hello, this is your backend!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
