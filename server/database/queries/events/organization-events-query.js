const connection = require('../../connection');

module.exports = async (id) => {
  const { rows } = await connection
    .query(`
   SELECT * FROM events
   WHERE organizer_id=$1;`,
    [id]);

  return rows;
};
