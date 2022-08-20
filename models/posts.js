'use strict';
const {
  Model, DataTypes
} = require('sequelize');

const columns = {
  title: {
    value: 'Test post',
    type: DataTypes.STRING
  },
  content: {
    value: 'Peter la anguila',
    type: DataTypes.TEXT
  }
}

function init() {
  (sequelize) => {
    class posts extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        // define association here
      }
    }
    posts.init(Object.keys(columns).map(v => {
      return {
        [v]: v.type
      }
    }), {
      sequelize,
      modelName: 'posts',
    });
    return posts;
  }
}

export {
  init,
  columns
};