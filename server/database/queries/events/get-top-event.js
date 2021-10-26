const connection = require('../../connection');

module.exports = async (date) => {
  const { rows } = await
  connection.query(`
    SELECT * FROM events
    WHERE expire_date >= $1 
    ORDER BY attendance DESC LIMIT 9 ;`,
  [date]);

  return rows;
};
