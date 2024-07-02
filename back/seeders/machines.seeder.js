'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('Machines', null, {});
        await queryInterface.bulkInsert('Machines', [
            { machineID: 1,label:"Thermo-40" },
            { machineID: 2,label:"Pol-600" },
            { machineID: 3,label:"Lazer-2000"  }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Machines', null, {});
    }
};
