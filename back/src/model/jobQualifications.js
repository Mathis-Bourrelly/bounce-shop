const { DataTypes } = require('sequelize');
const { sequelize } = require('../core/postgres');

const jobQualifications = sequelize.define('JobQualifications', {
    jobQualificationID: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    userID: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'users',
            key: 'userID',
        }
    },
    label: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

module.exports = jobQualifications;
