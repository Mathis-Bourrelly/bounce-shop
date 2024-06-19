const { DataTypes } = require('sequelize');
const { sequelize } = require('../core/postgres');

const validMachines = sequelize.define('ValidMachines', {
    validMachineID: {
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

module.exports = validMachines;
