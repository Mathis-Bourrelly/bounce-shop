const { DataTypes } = require('sequelize');
const { sequelize } = require('../core/postgres');

const operationLists = sequelize.define('OperationLists', {
    operationID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Operations',
            key: 'operationID',
        },
        primaryKey: true,
    },
    rangeID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Ranges',
            key: 'rangeID',
        },
        primaryKey: true,
    },
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

module.exports = operationLists;
