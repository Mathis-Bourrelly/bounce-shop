const {DataTypes} = require('sequelize');
const {sequelize} = require('../core/postgres');
const suppliers = sequelize.define('Suppliers', {
        supplierID: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    }
)

module.exports = suppliers;