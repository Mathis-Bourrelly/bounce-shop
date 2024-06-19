const { DataTypes } = require('sequelize');
const { sequelize } = require('../core/postgres');

const operationHistory = sequelize.define('OperationHistory', {
    operationID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'Operations',
            key: 'operationID',
        }
    },
    rangeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    workStationID: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    machineID: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    workTime: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

module.exports = operationHistory;
