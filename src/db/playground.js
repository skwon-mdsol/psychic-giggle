const Activity = require('../activities/Activity');

(async function () {
  try {
    await Activity.sync({ force: true });
    console.log('Activity Table created');
    return;
  } catch (err) {
    return;
  }
})();

