'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('Operations', null, {});
        await queryInterface.bulkInsert('Operations', [
            { rangeID: 1, label: "polissage", workStationID: 1, machineID: 1, workTime: 120 },
            { rangeID: 2, label: "thermoformage",workStationID: 2, machineID: 2, workTime: 150 },
            { rangeID: 3, label: "découpe laser",workStationID: 3, machineID: 3, workTime: 180 }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Operations', null, {});
    }
};
