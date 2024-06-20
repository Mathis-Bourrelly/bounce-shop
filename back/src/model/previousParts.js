const {DataTypes} = require('sequelize');
const {sequelize} = require('../core/postgres');
const previousParts = sequelize.define('previousParts', {
        previousPartID: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        partListID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'PartLists',
                key: 'partListID',
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