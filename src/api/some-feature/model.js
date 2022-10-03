const { sortAsc } = require('../../utils');

function mapNames(data) {
  const mapped = data.map((obj) => obj.name);

  return [...mapped].sort(sortAsc);
}

module.exports = {
  mapNames,
};
