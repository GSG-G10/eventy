const connection = require('../../connection');

const getAttendance = async (email) => {
  const { rows } = await connection
    .query('SELECT * FROM attendance WHERE email = $1', [email]);

  return rows[0];
};
module.exports = getAttendance;
