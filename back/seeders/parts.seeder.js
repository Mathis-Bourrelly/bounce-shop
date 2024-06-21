'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('Parts', null, {});
        await queryInterface.bulkInsert('Parts', [
            {
                isBought: true,
                isDeliverable: false,
                isRaw: true,
                isIntermediate: false,
                quantity: 100,
                supplierID: 1,
                label: 'Part 1',
                description: 'Description for part 1'
            },
            {
                isBought: false,
                isDeliverable: true,
                isRaw: false,
                isIntermediate: true,
                quantity: 200,
                supplierID: 2,
                label: 'Part 2',
                description: 'Description for part 2'
            },
            {
                isBought: true,
                isDeliverable: true,
                isRaw: false,
                isIntermediate: false,
                quantity: 300,
                supplierID: 3,
                label: 'Part 3',
                description: 'Description for part 3'
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Parts', null, {});
    }
};

