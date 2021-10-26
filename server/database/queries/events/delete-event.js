const connection = require('../../connection');

module.exports = (id) => connection.query('DELETE FROM events WHERE id = $1', [id]);
