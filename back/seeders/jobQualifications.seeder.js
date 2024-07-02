'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('JobQualificationList', null, {});
        await queryInterface.bulkInsert('JobQualifications', [
            { userID: "00000000-0000-0000-0000-000000000001",label: "Qualification 1" },
            { userID: "00000000-0000-0000-0000-000000000002",label: "Qualification 2" },
            { userID: "00000000-0000-0000-0000-000000000003",label: "Qualification 3" }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('JobQualificationLists', null, {});
    }
};
