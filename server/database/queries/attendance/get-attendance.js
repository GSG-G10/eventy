const connection = require('../../connection');

const getAttendance = (email) => connection
  .query('SELECT * FROM attendance WHERE email = $1', [email]);

module.exports = getAttendance;
