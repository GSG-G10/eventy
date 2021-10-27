const connection = require('../../connection');

module.exports = async (eventId) => {
  const { rows } = await connection.query(
    'SELECT * FROM events WHERE id=$1', [eventId],
  );
  return rows[0];
};
