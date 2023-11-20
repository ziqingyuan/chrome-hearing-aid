const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/one_sentence_desc', (req, res) => {
  if (req.url) {
    res.send(JSON.stringify({content: "received"}));
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});