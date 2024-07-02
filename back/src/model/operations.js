const { DataTypes } = require('sequelize');
const { sequelize } = require('../core/postgres');
const ranges = require("./ranges");
const operationLists = require("./operationLists");
const suppliers = require("./suppliers");
const machines = require("./machines");
const workStations = require("./workStations");

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
    workTime: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    label: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});
operations.belongsTo(machines, {
    foreignKey: {
        as: 'Machine',
        name: 'machineID',
    }});

operations.belongsTo(workStations, {
    foreignKey: {
        as: 'WorkStation',
        name: 'workStationID',
    }});


module.exports = operations;
