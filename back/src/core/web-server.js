const express = require('express');
const { initializeConfigMiddlewares, initializeErrorMiddlewares } = require('./middlewares');
const partsRoute = require('../route/parts.route');
const usersRoute = require('../route/users.route');
const machinesRoute = require('../route/machines.route');
const operationsRoute = require('../route/operations.route');
const rangesRoute = require('../route/ranges.route');
const operationHistoryRoute = require('../route/operationHistory.route');
const loginRoute = require('../route/login.route');

const {sequelize} = require('./postgres');
class WebServer {
  app = undefined;
  port = 4000;
  server = undefined;

  constructor() {
    this.app = express();
    initializeConfigMiddlewares(this.app);
    this._initializeRoutes();
    initializeErrorMiddlewares(this.app);
    sequelize.sync()
  }

  start() {
    this.server = this.app.listen(this.port, () => {
      console.log(`app listening on port ${this.port}`);
    });
  }

  stop() {
    this.server.close();
  }

  _initializeRoutes() {
    this.app.use('/parts',partsRoute.initializeRoutes());
    this.app.use('/users',usersRoute.initializeRoutes());
    this.app.use('/machines',machinesRoute.initializeRoutes());
    this.app.use('/operations',operationsRoute.initializeRoutes());
    this.app.use('/ranges',rangesRoute.initializeRoutes());
    this.app.use('/operationHistory',operationHistoryRoute.initializeRoutes());
    this.app.use('/',loginRoute.initializeRoutes());
  }
}

module.exports = WebServer;
