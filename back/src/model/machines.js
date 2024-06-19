const { DataTypes } = require('sequelize');
const { sequelize } = require('../core/postgres');

const machines = sequelize.define('Machines', {
    machineID: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

module.exports = machines;
