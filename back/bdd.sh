#!/bin/bash

npx sequelize-cli db:seed --seed users.seeder.js
npx sequelize-cli db:seed --seed jobQualifications.seeder.js
npx sequelize-cli db:seed --seed validMachines.seeder.js
npx sequelize-cli db:seed --seed workStations.seeder.js
npx sequelize-cli db:seed --seed machines.seeder.js
npx sequelize-cli db:seed --seed suppliers.seeder.js
npx sequelize-cli db:seed --seed parts.seeder.js
npx sequelize-cli db:seed --seed previousParts.seeder.js
npx sequelize-cli db:seed --seed ranges.seeder.js
npx sequelize-cli db:seed --seed operations.seeder.js
npx sequelize-cli db:seed --seed operationLists.seeder.js
npx sequelize-cli db:seed --seed operationsHistory.seeder.js
npx sequelize-cli db:seed --seed prices.seeder.js
