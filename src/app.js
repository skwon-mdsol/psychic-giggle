const express = require('express');
const app = express();
const activityRoutes = require('./activities/activityRoutes');

app.use('/', activityRoutes);

module.exports = app;
