const connection = require('../../connection');

module.exports = (email) => connection
  .query('SELECT * FROM organization WHERE email=$1;', [email]);
