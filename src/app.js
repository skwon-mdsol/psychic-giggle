const express = require('express');
const app = express();
const activityRoutes = require('./activities/activityRoutes');

app.set('view engine', 'pug');
app.use('/', activityRoutes);
app.use('/assets', express.static('build'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Fitness App' });
});

module.exports = app;
