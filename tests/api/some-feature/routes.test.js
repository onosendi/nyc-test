const request = require('supertest');
const tap = require('tap');
const config = require('../../../config');
const appFactory = require('../../../src/api/app-factory');

tap.test('Routes', async (t) => {
  t.before(() => {
    const { context } = t;

    context.app = appFactory(config);
  });

  t.test('GET /foo', async (t2) => {
    t2.test('Returns 200', async (t3) => {
      const res = await request(t.context.app).get('/foo');

      t3.equal(res.status, 200);
    });
  });
});
