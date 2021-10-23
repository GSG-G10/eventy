const connection = require('../../connection');

module.exports = (date) => connection
  .query('SELECT * FROM events WHERE expire_date >= $1 ORDER BY attendance DESC;', [date]);
