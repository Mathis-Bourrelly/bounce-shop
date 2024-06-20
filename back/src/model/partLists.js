const {DataTypes} = require('sequelize');
const {sequelize} = require('../core/postgres');
const partLists = sequelize.define('PartLists', {
        partListID: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        partID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Parts',
                key: 'partID',
            }
        }
    },
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    }
)

module.exports = partLists;