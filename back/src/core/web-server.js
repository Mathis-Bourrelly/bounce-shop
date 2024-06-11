const express = require('express');
const { initializeConfigMiddlewares, initializeErrorMiddlwares } = require('./middlewares');

const {sequelize} = require('./postgres');
class WebServer {
  app = undefined;
  port = 4000;
  server = undefined;

  constructor() {
    this.app = express();
    initializeConfigMiddlewares(this.app);
    this._initializeRoutes();
    initializeErrorMiddlwares(this.app);
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
    //TODO ROUTE
  }
}

module.exports = WebServer;
