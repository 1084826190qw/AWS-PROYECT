const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Node.js Dockerizado');
});

app.listen(3000, () => {
  console.log('Servidor Node.js activo');
});
