'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('PreviousParts', null, {});
        await queryInterface.bulkInsert('PreviousParts', [
                { "prevLabel": "Balles de Ping Pong", "partID": 2, "mainPartID": 1, "quantity": 50 },
                { "prevLabel": "Filet de Ping Pong", "partID": 3, "mainPartID": 1, "quantity": 100 },
                { "prevLabel": "Raquette de Ping Pong", "partID": 4, "mainPartID": 1, "quantity": 150 },
                { "prevLabel": "Housse de Raquette", "partID": 5, "mainPartID": 2, "quantity": 30 },
                { "prevLabel": "Table de Ping Pong pliable", "partID": 6, "mainPartID": 2, "quantity": 20 },
                { "prevLabel": "Ensemble de 4 supports", "partID": 7, "mainPartID": 2, "quantity": 10 },
                { "prevLabel": "Boîte de rangement pour balles", "partID": 8, "mainPartID": 3, "quantity": 40 },
                { "prevLabel": "Pack de 100 balles", "partID": 9, "mainPartID": 3, "quantity": 25 },
                { "prevLabel": "Raquette débutant", "partID": 10, "mainPartID": 3, "quantity": 35 },
                { "prevLabel": "Filet de rechange", "partID": 11, "mainPartID": 4, "quantity": 45 },
                { "prevLabel": "Table de Ping Pong compétition", "partID": 12, "mainPartID": 4, "quantity": 15 },
                { "prevLabel": "Housse de transport", "partID": 13, "mainPartID": 4, "quantity": 60 },
                { "prevLabel": "Set de 3 balles fluorescentes", "partID": 14, "mainPartID": 5, "quantity": 70 },
                { "prevLabel": "Support de raquette", "partID": 15, "mainPartID": 5, "quantity": 80 },
                { "prevLabel": "Boîte de rangement pour raquette", "partID": 1, "mainPartID": 5, "quantity": 90 },
                { "prevLabel": "Kit de nettoyage pour raquette", "partID": 16, "mainPartID": 6, "quantity": 65 },
                { "prevLabel": "Sangle de transport", "partID": 17, "mainPartID": 6, "quantity": 75 },
                { "prevLabel": "Ensemble de 2 raquettes", "partID": 18, "mainPartID": 6, "quantity": 85 },
                { "prevLabel": "Balles de compétition", "partID": 19, "mainPartID": 7, "quantity": 55 },
                { "prevLabel": "Table de Ping Pong intérieure", "partID": 20, "mainPartID": 7, "quantity": 95 },
                { "prevLabel": "Caoutchouc pour raquette", "partID": 21, "mainPartID": 7, "quantity": 50 },
                { "prevLabel": "Boîte de rangement pour balles", "partID": 22, "mainPartID": 8, "quantity": 60 },
                { "prevLabel": "Housse imperméable pour table", "partID": 23, "mainPartID": 8, "quantity": 40 },
                { "prevLabel": "Ciseaux de découpe", "partID": 24, "mainPartID": 8, "quantity": 70 },
                { "prevLabel": "Ensemble de 5 balles", "partID": 25, "mainPartID": 9, "quantity": 35 },
                { "prevLabel": "Table de Ping Pong professionnelle", "partID": 26, "mainPartID": 9, "quantity": 65 },
                { "prevLabel": "Colle pour raquette", "partID": 27, "mainPartID": 9, "quantity": 45 },
                { "prevLabel": "Filet avec support", "partID": 28, "mainPartID": 10, "quantity": 55 },
                { "prevLabel": "Protège-poignet", "partID": 29, "mainPartID": 10, "quantity": 75 },
                { "prevLabel": "Sac de transport", "partID": 30, "mainPartID": 10, "quantity": 85 }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('PreviousParts', null, {});
    }
};
