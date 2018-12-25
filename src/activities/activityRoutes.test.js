const request = require('supertest');
const activityRoutes = require('./activityRoutes');
const ActivityDAL = require('./activityDAL');
const Activity = require('./activity');
const app = require('express')();

app.use('/', activityRoutes);

jest.mock('./activity');
jest.mock('./activityDAL');

describe('activityRoutes', () => {
  beforeEach(() => {
    Activity.mockClear();
    ActivityDAL.mockClear();
  });

  it('returns all activities for /activities', async () => {
    await request(app)
      .get('/activities')
      .set('Accept', 'application/json')
      .expect(200);

    expect(ActivityDAL.mock.instances[0].all).toBeCalled();
  });

  it('creates an activity for /activities', async () => {
    await request(app)
      .post('/activities')
      .expect(200);

    expect(ActivityDAL.mock.instances[0].create).toBeCalled();
  });
});
