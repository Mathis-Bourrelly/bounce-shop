@echo off
call npx sequelize-cli db:seed --seed jobQualificationList.seeder.js
call npx sequelize-cli db:seed --seed users.seeder.js
call npx sequelize-cli db:seed --seed validMachines.seeder.js
call npx sequelize-cli db:seed --seed workStations.seeder.js
call npx sequelize-cli db:seed --seed machines.seeder.js
call npx sequelize-cli db:seed --seed suppliers.seeder.js
call npx sequelize-cli db:seed --seed parts.seeder.js
call npx sequelize-cli db:seed --seed previousParts.seeder.js
call npx sequelize-cli db:seed --seed ranges.seeder.js
call npx sequelize-cli db:seed --seed operations.seeder.js
call npx sequelize-cli db:seed --seed operationsHistory.seeder.js
call npx sequelize-cli db:seed --seed prices.seeder.js
