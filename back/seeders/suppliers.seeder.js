'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('Suppliers', null, {});
        await queryInterface.bulkInsert('Suppliers', [
            { supplierID: 1, name: 'Supplier 1' },
            { supplierID: 2, name: 'Supplier 2' },
            { supplierID: 3, name: 'Supplier 3' }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Suppliers', null, {});
    }
};