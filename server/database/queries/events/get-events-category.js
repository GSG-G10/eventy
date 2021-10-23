const connection = require('../../connection');

const getEventsCategory = (category, date, time) => connection.query('SELECT * FROM events WHERE category = $1 AND expire_date >= $2 AND duration >= $3 ORDER BY attendance DESC LIMIT 3 ', [category, date, time]);

module.exports = getEventsCategory;
