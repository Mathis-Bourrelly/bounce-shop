const { DataTypes } = require('sequelize');
const { sequelize } = require('../core/postgres');

const machines = sequelize.define('Machines', {
    machineID: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
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

module.exports = machines;
