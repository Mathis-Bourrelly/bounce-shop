'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('Ranges', null, {});
        await queryInterface.bulkInsert('Ranges', [
            { rangeID: 1, partID: 1, userID: '00000000-0000-0000-0000-000000000001' },
            { rangeID: 2, partID: 2, userID: '00000000-0000-0000-0000-000000000002' },
            { rangeID: 3, partID: 3, userID: '00000000-0000-0000-0000-000000000003' }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Ranges', null, {});
    }
};
