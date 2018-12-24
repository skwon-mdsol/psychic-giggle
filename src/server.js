const express = require('express');
const app = require('./app');
// TODO: make port an env var
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
