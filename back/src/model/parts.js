const {DataTypes} = require('sequelize');
const {sequelize} = require('../core/postgres');
const suppliers = require("./suppliers");
const ranges = require("./ranges");
const prices = require("./prices");
const previousParts = require("./previousParts");

const parts = sequelize.define('Parts', {
        partID: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        type: {
            type: DataTypes.CHAR(1),
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        supplierID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Suppliers',
                key: 'supplierID',
            },
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

parts.belongsTo(suppliers, {
    foreignKey: {
        name: 'supplierID',
    }});

parts.hasOne(ranges, {
    foreignKey: {
        name: 'partID',
    }});

parts.hasMany(prices, {
    foreignKey: 'partID',
});

parts.hasMany(previousParts, {
    foreignKey: 'mainPartID',
});
module.exports = parts;