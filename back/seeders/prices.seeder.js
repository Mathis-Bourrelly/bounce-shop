'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('Prices', null, {});
        await queryInterface.bulkInsert('Prices', [{
            "priceID": 1, "price": 12.99, "partID": 1, "date": "2023-01-01"},
            {"priceID": 2, "price": 12.49, "partID": 1, "date": "2023-02-15"},
            {"priceID": 3, "price": 11.99, "partID": 1, "date": "2023-03-20"},
            {"priceID": 4, "price": 9.99, "partID": 2, "date": "2023-01-01"},
            {"priceID": 5, "price": 8.99, "partID": 2, "date": "2023-02-28"},
            {"priceID": 6, "price": 7.99, "partID": 2, "date": "2023-04-15"},
            {"priceID": 7, "price": 29.99, "partID": 3, "date": "2023-01-01"},
            {"priceID": 8, "price": 27.99, "partID": 3, "date": "2023-03-10"},
            {"priceID": 9, "price": 25.99, "partID": 3, "date": "2023-05-01"},
            {"priceID": 10, "price": 5.99, "partID": 4, "date": "2023-01-01"},
            {"priceID": 11, "price": 5.49, "partID": 4, "date": "2023-02-20"},
            {"priceID": 12, "price": 4.99, "partID": 4, "date": "2023-04-05"},
            {"priceID": 13, "price": 19.99, "partID": 5, "date": "2023-01-01"},
            {"priceID": 14, "price": 18.49, "partID": 5, "date": "2023-03-15"},
            {"priceID": 15, "price": 16.99, "partID": 5, "date": "2023-05-10"},
            {"priceID": 16, "price": 7.49, "partID": 6, "date": "2023-01-01"},
            {"priceID": 17, "price": 6.99, "partID": 6, "date": "2023-03-01"},
            {"priceID": 18, "price": 6.49, "partID": 6, "date": "2023-05-15"},
            {"priceID": 19, "price": 23.99, "partID": 7, "date": "2023-01-01"},
            {"priceID": 20, "price": 21.99, "partID": 7, "date": "2023-04-01"},
            {"priceID": 21, "price": 19.99, "partID": 7, "date": "2023-06-20"},
            {"priceID": 22, "price": 14.99, "partID": 8, "date": "2023-01-01"},
            {"priceID": 23, "price": 13.99, "partID": 8, "date": "2023-03-05"},
            {"priceID": 24, "price": 12.99, "partID": 8, "date": "2023-05-15"},
            {"priceID": 25, "price": 17.99, "partID": 9, "date": "2023-01-01"},
            {"priceID": 26, "price": 16.49, "partID": 9, "date": "2023-03-10"},
            {"priceID": 27, "price": 14.99, "partID": 9, "date": "2023-05-20"},
            {"priceID": 28, "price": 3.99, "partID": 10, "date": "2023-01-01"},
            {"priceID": 29, "price": 3.49, "partID": 10, "date": "2023-02-15"},
            {"priceID": 30, "price": 2.99, "partID": 10, "date": "2023-04-01"},
            {"priceID": 31, "price": 49.99, "partID": 11, "date": "2023-01-01"},
            {"priceID": 32, "price": 47.99, "partID": 11, "date": "2023-03-20"},
            {"priceID": 33, "price": 45.99, "partID": 11, "date": "2023-06-01"},
            {"priceID": 34, "price": 8.99, "partID": 12, "date": "2023-01-01"},
            {"priceID": 35, "price": 7.99, "partID": 12, "date": "2023-04-15"},
            {"priceID": 36, "price": 6.99, "partID": 12, "date": "2023-07-01"},
            {"priceID": 37, "price": 15.99, "partID": 13, "date": "2023-01-01"},
            {"priceID": 38, "price": 14.49, "partID": 13, "date": "2023-03-10"},
            {"priceID": 39, "price": 12.99, "partID": 13, "date": "2023-05-15"},
            {"priceID": 40, "price": 3.29, "partID": 14, "date": "2023-01-01"},
            {"priceID": 41, "price": 2.99, "partID": 14, "date": "2023-02-28"},
            {"priceID": 42, "price": 2.49, "partID": 14, "date": "2023-05-10"},
            {"priceID": 43, "price": 4.49, "partID": 15, "date": "2023-01-01"},
            {"priceID": 44, "price": 4.19, "partID": 15, "date": "2023-03-15"},
            {"priceID": 45, "price": 3.89, "partID": 15, "date": "2023-06-01"
            }], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Prices', null, {});
    }
};
