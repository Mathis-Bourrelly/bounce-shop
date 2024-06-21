const {DataTypes} = require('sequelize');
const {sequelize} = require('../core/postgres');
const parts = require('./parts')

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
        partID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Parts',
                key: 'partID',
            },
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