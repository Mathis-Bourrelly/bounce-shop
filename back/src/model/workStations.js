const { DataTypes } = require('sequelize');
const { sequelize } = require('../core/postgres');

const workStations = sequelize.define('WorkStations', {
    workStationID: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    validMachineID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'ValidMachines',
            key: 'validMachineID',
        }
    },
    jobQualificationListID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'JobQualificationLists',
            key: 'jobQualificationListID',
        }
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

module.exports = workStations;
