const express = require('express');
const router = express.Router();
const ActivityDAL = require('./activityDAL');
const Activity = require('./activity');

router.route('/activities')
  .get(async (req, res) => {
    const activity = new ActivityDAL(Activity);
    const activities = await activity.all();
    res.json(activities);
  })
  .post(async (req, res) => {
    const activity = new ActivityDAL(Activity);
    const newActivity = await activity.create(req.params);
    res.json(newActivity);
  });

module.exports = router;
