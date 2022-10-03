const { indexBy } = require('../../utils');

function indexByCustId(arr) {
  return indexBy((obj) => obj.cust_id, arr);
}

module.exports = {
  indexByCustId,
};
