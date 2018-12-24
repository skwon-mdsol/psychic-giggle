class ActivityDAL {
  constructor (model) {
    this.model = model;
  }

  all () {
    return this.model.findAll();
  }

  getAllByCategory (params) {
    return this.model.findAll({ where: { category: params.category } });
  }

  create (params) {
    return this.model.create(params);
  }
}

module.exports = ActivityDAL;
