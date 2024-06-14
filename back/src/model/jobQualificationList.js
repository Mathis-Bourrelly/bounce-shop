const { DataTypes } = require('sequelize');
const { sequelize } = require('../core/postgres');

const JobQualificationList = sequelize.define('JobQualificationList', {
    JobQualificationListID: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

module.exports = JobQualificationList;
