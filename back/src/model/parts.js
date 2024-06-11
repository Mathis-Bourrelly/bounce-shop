const {DataTypes} = require('sequelize');
const {sequelize} = require('../core/postgres');
const parts = sequelize.define('parts', {
        partsID: {
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
        isRow: {
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
        title_key: {
            type: DataTypes.CHAR,
            allowNull: false,
        },
        background: {
            type: DataTypes.CHAR,
            allowNull: false,
        },
        brandImage: {
            type: DataTypes.CHAR,
            allowNull: false,
        },
        image: {
            type: DataTypes.CHAR,
            allowNull: false,
        },
        author_key: {
            type: DataTypes.CHAR,
            allowNull: false,
        },
        description_key: {
            type: DataTypes.CHAR,
            allowNull: false,
        },
        isAvailable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        price: {
            type: DataTypes.CHAR,
            allowNull: false,
        },

    },
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    }
)

module.exports = products;