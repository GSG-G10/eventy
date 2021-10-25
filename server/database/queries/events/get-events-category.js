const connection = require('../../connection');

const getEventsCategory = (category, date) => connection.query('SELECT * FROM events WHERE category = $1 AND expire_date >= $2  ORDER BY attendance DESC LIMIT 3 ', [category, date]);

module.exports = getEventsCategory;
