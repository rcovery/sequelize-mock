'use strict';

import { basename as _basename } from 'path';
import Sequelize from 'sequelize';
import SequelizeMock from 'sequelize-mock';
import config from '../config/config.json';
import Posts from '../models/posts';

const db = {};
let sequelize;

if (process.env.NODE_ENV == 'test') {
  sequelize = new SequelizeMock(config[process.env.NODE_ENV]);
} else {
  sequelize = new Sequelize(config[process.env.NODE_ENV]);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const models = {
  posts: Posts.init(sequelize),
}

export { models };
export default db;
