'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('WorkStations', null, {});
        await queryInterface.bulkInsert('WorkStations', [
            { workStationID: 1, validMachineID: 1, jobQualificationID: 1, label:"atelier A1" },
            { workStationID: 2, validMachineID: 2, jobQualificationID: 2, label:"atelier A2" },
            { workStationID: 3, validMachineID: 3, jobQualificationID: 3, label:"atelier B1" }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('WorkStations', null, {});
    }
};
