'use strict';

import { basename as _basename } from 'path';
import Sequelize from 'sequelize';
import config from '../config/config.json';
import Posts from '../models/posts';

const db = {};

const sequelize = new Sequelize(config[process.env.NODE_ENV]);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const models = {
  posts: Posts.init(sequelize),
}

export { models };
export default db;
