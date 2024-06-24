'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('Ranges', null, {});
        await queryInterface.bulkInsert('Ranges', [
            { rangeID: 1, partID: 1, userID: '00000000-0000-0000-0000-000000000001' },
            { rangeID: 2, partID: 2, userID: '00000000-0000-0000-0000-000000000001' },
            { rangeID: 3, partID: 3, userID: '00000000-0000-0000-0000-000000000001' },
            { rangeID: 4, partID: 4, userID: '00000000-0000-0000-0000-000000000001' },
            { rangeID: 5, partID: 5, userID: '00000000-0000-0000-0000-000000000001' },
            { rangeID: 6, partID: 6, userID: '00000000-0000-0000-0000-000000000002' },
            { rangeID: 7, partID: 7, userID: '00000000-0000-0000-0000-000000000002' },
            { rangeID: 8, partID: 8, userID: '00000000-0000-0000-0000-000000000002' },
            { rangeID: 9, partID: 9, userID: '00000000-0000-0000-0000-000000000002' },
            { rangeID: 10, partID: 10, userID: '00000000-0000-0000-0000-000000000002' },
            { rangeID: 11, partID: 11, userID: '00000000-0000-0000-0000-000000000003' },
            { rangeID: 12, partID: 12, userID: '00000000-0000-0000-0000-000000000003' },
            { rangeID: 13, partID: 13, userID: '00000000-0000-0000-0000-000000000003' },
            { rangeID: 14, partID: 14, userID: '00000000-0000-0000-0000-000000000003' },
            { rangeID: 15, partID: 15, userID: '00000000-0000-0000-0000-000000000003' }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Ranges', null, {});
    }
};
