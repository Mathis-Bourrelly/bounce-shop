const { Sequelize } = require('sequelize');
require('dotenv').config();
const { PostgresDialect } = require("@sequelize/postgres");

exports.sequelize = new Sequelize({
    dialect: 'postgres',
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.HOST,
    port: process.env.DB_PORT,
    ssl: true,
    clientMinMessages: 'notice',
});

const modelDefiners = [
    require('../model/jobQualifications'),
    require('../model/users'),
    require('../model/validMachines'),
    require('../model/workStations'),
    require('../model/machines'),
    require('../model/suppliers'),
    require('../model/parts'),
    require('../model/previousParts'),
    require('../model/ranges'),
    require('../model/operations'),
    require('../model/OperationHistories'),
    require('../model/prices'),
];

for (const modelDefiner of modelDefiners) {
    modelDefiner.sync();
}



