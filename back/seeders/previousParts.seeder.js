'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('PreviousParts', null, {});
        await queryInterface.bulkInsert('PreviousParts', [
            { previousPartID: 1, prevLabel: 'Part 1', partID: 2, mainPartID: 1, quantity: 50 },
            { previousPartID: 2, prevLabel: 'Part 2', partID: 3, mainPartID: 1, quantity: 100 },
            { previousPartID: 3, prevLabel: 'Part 3', partID: 4, mainPartID: 1, quantity: 150 }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('PreviousParts', null, {});
    }
};
