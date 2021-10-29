const connection = require('../../connection');

module.exports = async (category, date) => {
  const { rows } = await connection.query(`
    SELECT * FROM events 
    WHERE category = $1 AND expire_date >= $2 
    ORDER BY attendance DESC `,
  [category, date]);

  return rows;
};
