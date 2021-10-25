const connection = require('../../connection');

const getTopEventsQuery = (date, time) => connection.query('SELECT * FROM events WHERE expire_date >= $1 AND duration >= $2 ORDER BY attendance DESC LIMIT 9 ', [date, time]);

module.exports = getTopEventsQuery;
