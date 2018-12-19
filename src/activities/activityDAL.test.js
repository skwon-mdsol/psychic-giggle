const ActivityDAL = require('./activityDAL');

describe('ActivityDAL', () => {
  let model, activityDAL;

  beforeEach(() => {
    model = {
      findAll: jest.fn(),
      create: jest.fn()
    }
    activityDAL = new ActivityDAL(model);
  });

  it('gets all activities', () => {
    activityDAL.all();
    expect(model.findAll).toBeCalled();
  });

  it('gets activities by category', () => {
    activityDAL.getAllByCategory({ category: 'running' });
    expect(model.findAll).toBeCalledWith({ where: { category: 'running' } });
  });

  it('creates an activity', () => {
    const params = {
      category: 'running',
      start: new Date(),
      end: new Date(),
      description: 'It\'s hard'
    }

    activityDAL.create(params);
    expect(model.create).toBeCalledWith(params);
  });
});
