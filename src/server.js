const express = require('express');
const app = express();
// TODO: make port an env var
const port = 3000;

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
