const config = require('../../config');
const appFactory = require('./app-factory');

const app = appFactory(config);

app.listen(8000, () => {
  // eslint-disable-next-line no-console
  console.log('Running on port: 8000');
});
