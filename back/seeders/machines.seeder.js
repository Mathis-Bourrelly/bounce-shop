'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Machines', null, {});
        await queryInterface.bulkInsert('Machines', [
            { machineID: 1 },
            { machineID: 2 },
            { machineID: 3 }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Machines', null, {});
    }
};
