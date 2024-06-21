const { DataTypes } = require('sequelize');
const { sequelize } = require('../core/postgres');
const parts = require("./parts");

const ranges = sequelize.define('Ranges', {
    rangeID: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    partID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Parts',
            key: 'partID',
        }
    },
    userID: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Users',
            key: 'userID',
        }
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

module.exports = ranges;
