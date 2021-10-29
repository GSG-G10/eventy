const connection = require('../../connection');

module.exports = async (date) => {
  const { rows } = await
  connection.query(`
  SELECT * FROM events
   WHERE location = 'Online' AND expire_date >= $1 
   ORDER BY expire_date DESC; 
    `,
  [date]);
  return rows;
};
