const {DataTypes} = require('sequelize');
const {sequelize} = require('../core/postgres');
const parts = require("./parts");
const previousParts = sequelize.define('PreviousParts', {
        previousPartID: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        mainPartID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Parts',
                key: 'partID',
            }
        },
        prevLabel: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        partID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Parts',
                key: 'partID',
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    }
)
module.exports = previousParts;