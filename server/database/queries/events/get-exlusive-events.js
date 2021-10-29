const connection = require('../../connection');

module.exports = async (date) => {
  const { rows } = await
  connection.query(`
  SELECT * FROM events
   WHERE price > 0 AND expire_date >= $1 
   ORDER BY price DESC; 
    `,
  [date]);
  return rows;
};
