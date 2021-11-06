const connection = require('../../connection');

const getAttendance = async (email) => {
  const { rowCount } = await connection
    .query('SELECT id FROM attendance WHERE email = $1', [email]);
  return rowCount;
};
module.exports = getAttendance;
