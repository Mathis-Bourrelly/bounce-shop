const {DataTypes} = require('sequelize');
const {sequelize} = require('../core/postgres');
const parts = sequelize.define('Parts', {
        partID: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        isBought: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        isDeliverable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        isRaw: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        isIntermediate: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        rangeID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        partListID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        supplierID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    }
)

module.exports = parts;