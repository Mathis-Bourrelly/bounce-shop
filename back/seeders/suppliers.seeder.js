'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('Suppliers', null, {});
        await queryInterface.bulkInsert('Suppliers', [
            { "supplierID": 1, "name": "PingPong Inc." },
            { "supplierID": 2, "name": "Sportive Equipments Ltd." },
            { "supplierID": 3, "name": "Table Tennis World" },
            { "supplierID": 4, "name": "Sports Gear Pro" },
            { "supplierID": 5, "name": "Playground Sports Supplies" },
            { "supplierID": 6, "name": "Ace Rackets Co." },
            { "supplierID": 7, "name": "Bounce and Spin Sports" },
            { "supplierID": 8, "name": "NetMaster Supplies" },
            { "supplierID": 9, "name": "Swift Racquets" },
            { "supplierID": 10, "name": "PingPong Paradise" }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Suppliers', null, {});
    }
};