'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('WorkStations', null, {});
        await queryInterface.bulkInsert('WorkStations', [
            { workStationID: 1, validMachineID: 1, JobQualificationListID: 1 },
            { workStationID: 2, validMachineID: 2, JobQualificationListID: 2 },
            { workStationID: 3, validMachineID: 3, JobQualificationListID: 3 }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('WorkStations', null, {});
    }
};
