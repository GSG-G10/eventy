const connection = require('../../connection');

const getTopEventsQuery = (date) => connection.query('SELECT * FROM events WHERE expire_date >= $1 ORDER BY attendance DESC LIMIT 9 ', [date]);

module.exports = getTopEventsQuery;
