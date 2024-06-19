const { DataTypes } = require('sequelize');
const { sequelize } = require('../core/postgres');

const operations = sequelize.define('Operations', {
    operationID: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    rangeID: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    workStationID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'WorkStations',
            key: 'workStationID',
        }
    },
    machineID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Machines',
            key: 'machineID',
        }
    },
    worktime: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

module.exports = operations;
