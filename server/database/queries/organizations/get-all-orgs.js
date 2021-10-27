const connection = require('../../connection');

module.exports = async () => {
  const { rows } = await connection.query('SELECT id, name, image, categories FROM organization');
  return rows;
};
