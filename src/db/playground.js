const { Activity, ActivityDAL } = require('../activities/Activity');

(async function () {
  try {
    const activities = await ActivityDAL.all();
    console.log(activities)
    console.log('Activity Table created');
    return;
  } catch (err) {
    console.error(err)
    return;
  }
})();

