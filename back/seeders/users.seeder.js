'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //await queryInterface.bulkDelete('Users', null, {});
        await queryInterface.bulkInsert('Users', [
            {
                userID: '00000000-0000-0000-0000-000000000001',
                name: 'test',
                password: 'test',
                email: 'test@test.fr',
                role: 'admin',
                jobQualificationListID: 1
            },
            {
                userID: '00000000-0000-0000-0000-000000000002',
                name: 'Jane Smith',
                password: 'password456',
                email: 'jane.smith@example.com',
                role: 'user',
                jobQualificationListID: 2
            },
            {
                userID: '00000000-0000-0000-0000-000000000003',
                name: 'Jim Brown',
                password: 'password789',
                email: 'jim.brown@example.com',
                role: 'user',
                jobQualificationListID: 3
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Users', null, {});
    }
}
