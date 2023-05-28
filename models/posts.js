import { DataTypes } from 'sequelize';

const columns = {
  id: {
    // value: 'Test post',
    primaryKey: true,
    type: DataTypes.NUMBER
  },
  createdAt: {
    // value: 'Test post',
    type: DataTypes.DATE
  },
  updatedAt: {
    // value: 'Test post',
    type: DataTypes.DATE
  },
  title: {
    // value: 'Test post',
    type: DataTypes.STRING
  },
  content: {
    // value: 'Peter la anguila',
    type: DataTypes.TEXT
  }
}

function init(sequelize) {
  const mymodel = sequelize.define('posts', columns);
  return mymodel;
}

export default {
  init,
  columns
};