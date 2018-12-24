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

  it('returns all activities for /activities', (done) => {
    return request(app)
      .get('/activities')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const activityDALInstance = ActivityDAL.mock.instances[0];
        expect(activityDALInstance.all).toBeCalled();
        done();
      });
  });

  it('creates an activity for /activities', (done) => {
    return request(app)
      .post('/activities')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const activityDALInstance = ActivityDAL.mock.instances[0];
        expect(activityDALInstance.create).toBeCalled();
        done();
      });
  });
});
