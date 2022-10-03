const express = require('express');
const { mapNames } = require('./model');

function routes() {
  const router = express.Router();

  router.get('/foo', (req, res) => {
    const dataFromFetch = [
      { id: 2, name: 'b' },
      { id: 1, name: 'a' },
      { id: 3, name: 'c' },
    ];

    res.json(mapNames(dataFromFetch));
  });

  return router;
}

module.exports = routes;
