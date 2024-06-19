@echo off
call npx sequelize-cli db:seed --seed validMachines.seeder.js
call npx sequelize-cli db:seed --seed jobQualificationList.seeder.js
call npx sequelize-cli db:seed --seed workStations.seeder.js
call npx sequelize-cli db:seed --seed machines.seeder.js
call npx sequelize-cli db:seed --seed operations.seeder.js