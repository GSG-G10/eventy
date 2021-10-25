const connection = require('../../connection');

module.exports = (id) => connection
  .query('SELECT * FROM events WHERE organizer_id=$1', [id]);
