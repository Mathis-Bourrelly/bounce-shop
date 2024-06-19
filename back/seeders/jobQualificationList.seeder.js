'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('JobQualificationList', null, {});
        await queryInterface.bulkInsert('JobQualificationList', [
            { JobQualificationListID: 1 },
            { JobQualificationListID: 2 },
            { JobQualificationListID: 3 }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('JobQualificationList', null, {});
    }
};
