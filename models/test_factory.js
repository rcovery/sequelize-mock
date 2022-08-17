const Sequelize = require('sequelize');

const columns = {
    id: Sequelize.SMALLINT,
    name: Sequelize.STRING
}

module.exports = {
    columns
}