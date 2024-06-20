const {DataTypes} = require('sequelize');
const {sequelize} = require('../core/postgres');
const prices = sequelize.define('Prices', {
        priceID: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    }
)

module.exports = prices;