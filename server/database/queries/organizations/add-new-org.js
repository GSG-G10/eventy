const connection = require('../../connection');
const { hashPassword } = require('../../../utils/b-crypt');

module.exports = async ({
  name, description, email, password, categories, image,
}) => {
  const hashedPassword = await hashPassword(password);
  const { rows } = await connection
    .query(`
    INSERT INTO organization
    (name,email,password,image,description,categories)
    VALUES ($1,$2,$3,$4,$5,$6) 
    RETURNING id;`,
    [name, email, hashedPassword, image, description, categories]);

  return rows[0].id;
};
