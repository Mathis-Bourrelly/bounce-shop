'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('OperationHistory', null, {});
        await queryInterface.bulkInsert('OperationHistories', [
            { rangeID: 1, label: "polissage", workStationID: 1, machineID: 1, workTime: 100 },
            { rangeID: 2, label: "thermoformage",workStationID: 2, machineID: 2, workTime: 120 },
            { rangeID: 3, label: "découpe laser",workStationID: 3, machineID: 3, workTime: 300 }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('OperationHistories', null, {});
    }
};
