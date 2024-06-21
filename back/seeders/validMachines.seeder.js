'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('ValidMachines', null, {});
        await queryInterface.bulkInsert('ValidMachines', [
            { validMachineID: 1 },
            { validMachineID: 2 },
            { validMachineID: 3 }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('ValidMachines', null, {});
    }
};
