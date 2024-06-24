'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('Parts', null, {});
        await queryInterface.bulkInsert('Parts', [{
            "isBought": true,
            "isDeliverable": false,
            "isRaw": true,
            "isIntermediate": false,
            "quantity": 100,
            "supplierID": 1,
            "label": "Balles de Ping Pong",
            "description": "Lot de 6 balles de Ping Pong pour entraînement"
        }, {
            "isBought": false,
            "isDeliverable": true,
            "isRaw": false,
            "isIntermediate": false,
            "quantity": 100,
            "supplierID": 2,
            "label": "Filet de Ping Pong",
            "description": "Filet de Ping Pong rétractable pour tables standards"
        }, {
            "isBought": true,
            "isDeliverable": true,
            "isRaw": false,
            "isIntermediate": true,
            "quantity": 100,
            "supplierID": 3,
            "label": "Raquette de Ping Pong",
            "description": "Raquette professionnelle avec revêtement anti-adhérent"
        }, {
            "isBought": false,
            "isDeliverable": false,
            "isRaw": true,
            "isIntermediate": false,
            "quantity": 100,
            "supplierID": 4,
            "label": "Housse de Raquette",
            "description": "Housse de protection pour raquette de Ping Pong"
        }, {
            "isBought": true,
            "isDeliverable": false,
            "isRaw": true,
            "isIntermediate": false,
            "quantity": 100,
            "supplierID": 5,
            "label": "Table de Ping Pong pliable",
            "description": "Table de Ping Pong d'extérieur avec système de pliage rapide"
        }, {
            "isBought": false,
            "isDeliverable": true,
            "isRaw": false,
            "isIntermediate": false,
            "quantity": 100,
            "supplierID": 6,
            "label": "Ensemble de 4 supports",
            "description": "Ensemble de supports pour fixer un filet de Ping Pong sur n'importe quelle surface"
        }, {
            "isBought": true,
            "isDeliverable": true,
            "isRaw": true,
            "isIntermediate": true,
            "quantity": 100,
            "supplierID": 7,
            "label": "Boîte de rangement pour balles",
            "description": "Boîte de rangement pratique pour balles de Ping Pong"
        }, {
            "isBought": false,
            "isDeliverable": false,
            "isRaw": false,
            "isIntermediate": true,
            "quantity": 100,
            "supplierID": 8,
            "label": "Pack de 100 balles",
            "description": "Pack économique de 100 balles de Ping Pong pour un usage intensif"
        }, {
            "isBought": true,
            "isDeliverable": true,
            "isRaw": true,
            "isIntermediate": false,
            "quantity": 100,
            "supplierID": 9,
            "label": "Raquette débutant",
            "description": "Raquette idéale pour débutants en Ping Pong"
        }, {
            "isBought": false,
            "isDeliverable": false,
            "isRaw": false,
            "isIntermediate": true,
            "quantity": 100,
            "supplierID": 10,
            "label": "Filet de rechange",
            "description": "Filet de remplacement pour tables de Ping Pong"
        }, {
            "isBought": true,
            "isDeliverable": true,
            "isRaw": false,
            "isIntermediate": true,
            "quantity": 100,
            "supplierID": 4,
            "label": "Table de Ping Pong compétition",
            "description": "Table de Ping Pong homologuée pour compétitions officielles"
        }, {
            "isBought": false,
            "isDeliverable": false,
            "isRaw": true,
            "isIntermediate": false,
            "quantity": 100,
            "supplierID": 2,
            "label": "Housse de transport",
            "description": "Housse de transport rembourrée pour raquette et accessoires de Ping Pong"
        }, {
            "isBought": true,
            "isDeliverable": false,
            "isRaw": true,
            "isIntermediate": false,
            "quantity": 100,
            "supplierID": 3,
            "label": "Set de 3 balles fluorescentes",
            "description": "Set de balles fluorescentes pour jouer même la nuit"
        }, {
            "isBought": false,
            "isDeliverable": true,
            "isRaw": false,
            "isIntermediate": false,
            "quantity": 100,
            "supplierID": 1,
            "label": "Support de raquette",
            "description": "Support de raquette pratique pour éviter les déformations"
        }, {
            "isBought": true,
            "isDeliverable": true,
            "isRaw": true,
            "isIntermediate": false,
            "quantity": 100,
            "supplierID": 1,
            "label": "Boîte de rangement pour raquette",
            "description": "Boîte de rangement spéciale pour une ou deux raquettes de Ping Pong"
        }], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Parts', null, {});
    }
};

