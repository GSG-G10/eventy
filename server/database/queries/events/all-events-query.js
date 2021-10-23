const connection = require('../../connection');

module.exports = connection.query('SELECT * FROM events');
