import Sequelize from 'sequelize';

import Planet from '../app/models/Planet';

import databaseConfig from '../config/database';

const models = [Planet];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
