const connection = require('../../connection');

const addAttendant = async ({
  name, email, age, gender, isSubscriber, phone,
}) => {
  const { rows } = await connection
    .query(`
  INSERT INTO
   attendance (name, email, age, gender, isSubscriber, phone)
  VALUES($1, $2, $3, $4, $5, $6)
  RETURNING id, email
   `,
    [name, email, age, gender, isSubscriber, phone]);
  return rows[0];
};

module.exports = addAttendant;
