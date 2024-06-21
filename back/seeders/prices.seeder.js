'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('Prices', null, {});
        await queryInterface.bulkInsert('Prices', [
            { priceID: 1, price: 100.50, partID: 1, date: new Date('2023-01-01') },
            { priceID: 2, price: 200.75, partID: 2, date: new Date('2023-02-01') },
            { priceID: 3, price: 300.20, partID: 3, date: new Date('2023-03-01') }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Prices', null, {});
    }
};
