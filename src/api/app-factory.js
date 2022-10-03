require('@babel/register');
const express = require('express');

const someFeatureRoutes = require('./some-feature/routes');

function appFactory(config) {
  const app = express();

  app.locals.config = config;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('', someFeatureRoutes());

  return app;
}

module.exports = appFactory;
