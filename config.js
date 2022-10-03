const dotenv = require('dotenv');

dotenv.config();

const config = {
  foo: process.env.foo,
};

module.exports = config;
