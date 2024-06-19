'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Operations', null, {});
        await queryInterface.bulkInsert('Operations', [
            { operationID: 1, rangeID: 1, workStationID: 1, machineID: 1, worktime: 120 },
            { operationID: 2, rangeID: 2, workStationID: 2, machineID: 2, worktime: 150 },
            { operationID: 3, rangeID: 3, workStationID: 3, machineID: 3, worktime: 180 }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Operations', null, {});
    }
};
