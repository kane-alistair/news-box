const express = require('express');

const app = express();

const path = require('path');

app.use(express.static('client/build'));

app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'client', 'index.html');
  res.sendFile(indexPath);
});

app.listen(3000, () => {});
