'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('Parts', null, {});
        await queryInterface.bulkInsert('Parts', [
            {
                "type":"R",
                "quantity": 5861,
                "supplierID": 1,
                "label": "Balles de Ping Pong",
                "description": "Lot de 6 balles de Ping Pong pour entraînement"
            },
            {
                "type":"B",
                "quantity": 2345,
                "supplierID": 2,
                "label": "Filet de Ping Pong",
                "description": "Filet de Ping Pong rétractable pour tables standards"
            },
            {
                "type":"B",
                "quantity": 7862,
                "supplierID": 3,
                "label": "Raquette de Ping Pong",
                "description": "Raquette professionnelle avec revêtement anti-adhérent"
            },
            {
                "type":"I",
                "quantity": 891,
                "supplierID": 4,
                "label": "Housse de Raquette",
                "description": "Housse de protection pour raquette de Ping Pong"
            },
            {
                "type":"D",
                "quantity": 5123,
                "supplierID": 5,
                "label": "Table de Ping Pong pliable",
                "description": "Table de Ping Pong d'extérieur avec système de pliage rapide"
            },
            {
                "type":"R",
                "quantity": 3987,
                "supplierID": 6,
                "label": "Ensemble de 4 supports",
                "description": "Ensemble de supports pour fixer un filet de Ping Pong sur n'importe quelle surface"
            },
            {
                "type":"D",
                "quantity": 764,
                "supplierID": 7,
                "label": "Boîte de rangement pour balles",
                "description": "Boîte de rangement pratique pour balles de Ping Pong"
            },
            {
                "type":"B",
                "quantity": 4276,
                "supplierID": 8,
                "label": "Pack de 100 balles",
                "description": "Pack économique de 100 balles de Ping Pong pour un usage intensif"
            },
            {
                "type":"R",
                "quantity": 564,
                "supplierID": 9,
                "label": "Raquette débutant",
                "description": "Raquette idéale pour débutants en Ping Pong"
            },
            {
                "type":"I",
                "quantity": 8753,
                "supplierID": 10,
                "label": "Filet de rechange",
                "description": "Filet de remplacement pour tables de Ping Pong"
            },
            {
                "type":"I",
                "quantity": 1352,
                "supplierID": 4,
                "label": "Table de Ping Pong compétition",
                "description": "Table de Ping Pong homologuée pour compétitions officielles"
            },
            {
                "type":"D",
                "quantity": 981,
                "supplierID": 2,
                "label": "Housse de transport",
                "description": "Housse de transport rembourrée pour raquette et accessoires de Ping Pong"
            },
            {
                "type":"B",
                "quantity": 2754,
                "supplierID": 3,
                "label": "Set de 3 balles fluorescentes",
                "description": "Set de balles fluorescentes pour jouer même la nuit"
            },
            {
                "type":"B",
                "quantity": 623,
                "supplierID": 1,
                "label": "Support de raquette",
                "description": "Support de raquette pratique pour éviter les déformations"
            },
            {
                "type":"I",
                "quantity": 874,
                "supplierID": 1,
                "label": "Boîte de rangement pour raquette",
                "description": "Boîte de rangement spéciale pour une ou deux raquettes de Ping Pong"
            },
            {
                "type":"D",
                "quantity": 3124,
                "supplierID": 2,
                "label": "Kit de nettoyage pour raquette",
                "description": "Kit complet pour le nettoyage et l'entretien des raquettes de Ping Pong"
            },
            {
                "type":"R",
                "quantity": 4782,
                "supplierID": 5,
                "label": "Sangle de transport",
                "description": "Sangle ajustable pour le transport facile des tables de Ping Pong"
            },
            {
                "type":"D",
                "quantity": 5678,
                "supplierID": 6,
                "label": "Ensemble de 2 raquettes",
                "description": "Ensemble de 2 raquettes de Ping Pong avec revêtement en caoutchouc"
            },
            {
                "type":"D",
                "quantity": 9210,
                "supplierID": 9,
                "label": "Balles de compétition",
                "description": "Balles de Ping Pong homologuées pour les compétitions internationales"
            },
            {
                "type":"D",
                "quantity": 3845,
                "supplierID": 7,
                "label": "Table de Ping Pong intérieure",
                "description": "Table de Ping Pong pour usage intérieur avec surface en bois"
            },
            {
                "type":"R",
                "quantity": 1475,
                "supplierID": 8,
                "label": "Caoutchouc pour raquette",
                "description": "Feuille de caoutchouc pour remplacer le revêtement des raquettes de Ping Pong"
            },
            {
                "type":"I",
                "quantity": 6298,
                "supplierID": 3,
                "label": "Boîte de rangement pour balles",
                "description": "Boîte de rangement compacte pour balles de Ping Pong"
            },
            {
                "type":"B",
                "quantity": 8312,
                "supplierID": 1,
                "label": "Housse imperméable pour table",
                "description": "Housse imperméable pour protéger les tables de Ping Pong des intempéries"
            },
            {
                "type":"B",
                "quantity": 7563,
                "supplierID": 4,
                "label": "Ciseaux de découpe",
                "description": "Ciseaux spéciaux pour découper les feuilles de caoutchouc des raquettes"
            },
            {
                "type":"D",
                "quantity": 5129,
                "supplierID": 10,
                "label": "Ensemble de 5 balles",
                "description": "Ensemble de 5 balles de Ping Pong pour loisirs"
            },
            {
                "type":"R",
                "quantity": 2491,
                "supplierID": 6,
                "label": "Table de Ping Pong professionnelle",
                "description": "Table de Ping Pong professionnelle avec surface antidérapante"
            },
            {
                "type":"D",
                "quantity": 3890,
                "supplierID": 2,
                "label": "Colle pour raquette",
                "description": "Colle spéciale pour fixer le revêtement en caoutchouc sur les raquettes"
            },
            {
                "type":"I",
                "quantity": 6914,
                "supplierID": 9,
                "label": "Filet avec support",
                "description": "Filet de Ping Pong avec support ajustable pour table"
            },
            {
                "type":"B",
                "quantity": 2103,
                "supplierID": 8,
                "label": "Protège-poignet",
                "description": "Protège-poignet élastique pour joueurs de Ping Pong"
            },
            {
                "type":"D",
                "quantity": 4097,
                "supplierID": 5,
                "label": "Sac de transport",
                "description": "Sac de transport rembourré pour raquettes et balles de Ping Pong"
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Parts', null, {});
    }
};

