'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('JobQualificationList', null, {});
        await queryInterface.bulkInsert('JobQualificationList', [
            { jobQualificationListID: 1 },
            { jobQualificationListID: 2 },
            { jobQualificationListID: 3 }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('JobQualificationList', null, {});
    }
};
