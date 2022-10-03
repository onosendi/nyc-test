function sortAsc(a, b) {
  return a < b ? -1 : 1;
}

function indexBy(fn, arr) {
  return arr.reduce((acc, row) => {
    const fnRes = fn(row);

    acc[fnRes] = (acc[fnRes] || []).concat(row);

    return acc;
  }, {});
}

module.exports = {
  indexBy,
  sortAsc,
};
