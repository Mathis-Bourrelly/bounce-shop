'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('PreviousParts', null, {});
        await queryInterface.bulkInsert('PreviousParts', [
            { previousPartID: 1, partID: 1, quantity: 50 },
            { previousPartID: 2, partID: 2, quantity: 100 },
            { previousPartID: 3, partID: 3, quantity: 150 }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('PreviousParts', null, {});
    }
};
