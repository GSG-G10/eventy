const connection = require('../../connection');

const deleteQuery = (id) => connection.query('DELETE FROM events WHERE id = $1', [id]);

module.exports = deleteQuery;
