const { DataTypes } = require('sequelize');
const { sequelize } = require('../core/postgres');

const operationHistories = sequelize.define('OperationHistories', {
    operationHistoryID: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    rangeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
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

module.exports = operationHistories;
