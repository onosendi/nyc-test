const tap = require('tap');
const { indexByCustId } = require('../../../src/reports/some-feature/model');

tap.test('Index By Cust Id', async (t) => {
  const arr = [
    { cust_id: 1, name: 'bar' },
    { cust_id: 1, name: 'baz' },
    { cust_id: 2, name: 'foo' },
  ];

  const found = indexByCustId(arr);

  const wanted = {
    1: [{ cust_id: 1, name: 'bar' }, { cust_id: 1, name: 'baz' }],
    2: [{ cust_id: 2, name: 'foo' }],
  };

  t.strictSame(found, wanted);
});
