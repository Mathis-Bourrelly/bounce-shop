'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('WorkStations', null, {});
        await queryInterface.bulkInsert('WorkStations', [
            { workStationID: 1, validMachineID: 1, jobQualificationListID: 1 },
            { workStationID: 2, validMachineID: 2, jobQualificationListID: 2 },
            { workStationID: 3, validMachineID: 3, jobQualificationListID: 3 }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('WorkStations', null, {});
    }
};
