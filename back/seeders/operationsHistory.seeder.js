'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('OperationHistory', null, {});
        await queryInterface.bulkInsert('OperationHistories', [
            { operationID: 1, rangeID: 1, workStationID: 1, machineID: 1, workTime: 120 },
            { operationID: 2, rangeID: 2, workStationID: 2, machineID: 2, workTime: 150 },
            { operationID: 3, rangeID: 3, workStationID: 3, machineID: 3, workTime: 180 }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('OperationHistories', null, {});
    }
};
