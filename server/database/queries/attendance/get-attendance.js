const connection = require('../../connection');

const getAttendance = async (email) => {
  const { rows } = await connection
    .query('SELECT id FROM attendance WHERE email = $1', [email]);

  return rows[0].id;
};
module.exports = getAttendance;
