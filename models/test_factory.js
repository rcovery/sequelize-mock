const Sequelize = require('sequelize');

const columns = {
    id: {
        type: Sequelize.SMALLINT,
        mock: 1
    },
    name: {
        type: Sequelize.STRING,
        mock: 'Mugman'
    },
}

module.exports = {
    columns
}