import { DataTypes } from 'sequelize';

const columns = {
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
  return sequelize.define('posts', columns);
}

export default {
  init,
  columns
};